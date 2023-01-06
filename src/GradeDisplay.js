import { useContext, useEffect, useState } from "react"
import { GradeContext } from "./GradeContext"
import Confetti from 'react-confetti'
import Modal from "./Modal"

export const GradeDisplay = ({ compute, setCompute }) => {
    const { data, setData } = useContext(GradeContext)
    const [gpa, setGpa] = useState(null)
    const [awards, setAwards] = useState(null)
    const [couldNotDL, setCouldNotDL] = useState(false)
    const [isDL, setIsDL] = useState(false)

    // summation(course unit * course grade) / total units

    const computeGrade = () => {
        let sum = 0
        let totalUnits = 0
        data.forEach((element) => {
            if (Number(element.grade) < 2.0) {
                setCouldNotDL(true)
            }
            sum += Number(element.grade) * Number(element.unit)
            totalUnits += Number(element.unit)
        })
        if (totalUnits < 12) {
            setCouldNotDL(true)
        }
        setGpa((sum / totalUnits).toFixed(2))
    }

    const checkAwards = () => {
        if (gpa < 1.0 && gpa !== null) {
            setAwards("You might have to retake some subjects")
        }
        else if (gpa < 3.0 && gpa >= 1.0) {
            setAwards("Congratulations you passed!")
        }
        else if (gpa >= 3.0 && couldNotDL) {
            setAwards("Unable to qualify as Dean's Lister (You had a grade below 2.0 or took less than 12 units)")
        }
        else if (gpa >= 3.0 && gpa <= 3.39) {
            setAwards("2nd Honors Dean's Lister")
            setIsDL(true)
        }
        else if (gpa >= 3.4 && gpa <= 4.0) {
            setAwards("1st Honors Dean's Lister")
            setIsDL(true)
        }
    }

    const closeModal = () => {
        setIsDL(false)
    }
    // 2nd NotDL
    // GPA 3.0 - 3.3
    // No grade below 2.0

    // 1st NotDL
    // GPA 3.4-4.0
    // No grade below 2.0

    useEffect(() => {
        setCouldNotDL(false)
        if (compute === true) {
            computeGrade()
        }
        setCompute(false)
    }, [compute])

    useEffect(() => {
        checkAwards()
    }, [gpa])


    return (
        <div className="grid grid-cols-1 grid-rows-1 place-items-center w-full h-full">
            <div className="text-center">
                <div className="text-emerald-500 font-bold text-7xl">
                    <p>{gpa}</p>
                </div>
                <div className="text-2xl">
                    <p>{awards}</p>
                </div>
            </div>
            {isDL && <Confetti />}
            {isDL && <Modal closeError={closeModal} title="Congratulations!" message={awards} gpa={gpa}/>}
        </div>
    )
}