import GradeList from './GradeList.js'
import { useContext, useEffect, useState } from 'react'
import { v4 as uuidv4 } from 'uuid'
import Modal from './Modal.js'
import { GradeContext } from './GradeContext.js'


const GradeContainer = ({ setCompute }) => {
    const { data, setData } = useContext(GradeContext)
    const [ids, setId] = useState([uuidv4(), uuidv4(), uuidv4(), uuidv4()])
    const [error, setError] = useState(false)

    const addBox = () => {
        const tempID = uuidv4()
        setId([...ids, tempID])
        setData([...data, {
            id: tempID,
            unit: "",
            grade: ""
        }])
    }

    const removeBox = (idParam) => {
        if (ids.length === 1) {
            setId([])
            setData([])
        }
        setId(ids.filter((id) => {
            if (idParam !== id) {
                cleanUpData(idParam)
            }
            return idParam !== id
        }))
    }

    useEffect(() => {
        onStart()
    }, [])

    // useEffect(() => {
    //     handleData(data)
    // }, [data])

    const onStart = () => {
        const tempArray = []
        ids.forEach((element) => {
            tempArray.push({
                id: element,
                unit: "",
                grade: ""
            })
        })
        setData(tempArray)
    }


    const cleanUpData = (id) => {
        setData(data.filter((item) => item.id !== id))
    }

    const checkPassable = () => {
        var temp = true
        data.forEach((element) => {
            if (element.grade === '' || element.unit === '') {
                setError(true)
                temp = false
            }
        })
        return temp
    }


    const triggerCompute = (e) => {
        if (checkPassable()) {
            setData(data)
            setCompute(true)
        }
        e.preventDefault()
    }

    const closeError = () => {
        setError(false)
    }

    const addGrade = (id, addedGrade) => {
        let tempData = [...data]
        let item = {}
        data.map((element, index) => {
            if (element.id === id) {
                item = { ...tempData[index] }
                item.grade = addedGrade
                tempData[index] = item
            }
        })
        setData(tempData)
    }


    const addUnits = (id, addedUnits) => {
        let tempData = [...data]
        let item = {}
        data.map((element, index) => {
            if (element.id === id) {
                item = { ...tempData[index] }
                item.unit = addedUnits
                tempData[index] = item
            }
        })
        setData(tempData)
    }


    return (
        <div className="rounded-md m-4">
            <div className="grid grid-cols-3 justify-center w-full h-12 rounded-lg greenBG my-1 border-2 border-solid border-green-200 palette6">
                <div className="label-tag">
                    Course
                </div>
                <div className="label-tag">
                    Units
                </div>
                <div className="label-tag">
                    Grades
                </div>
            </div>
            <GradeList ids={ids} addUnits={addUnits} addGrade={addGrade} removeBox={removeBox} />
            <div className="flex place-content-center m-1">
                <button onClick={addBox} className="transition duration-150 ease-in-out bg-emerald-500 active:translate-y-2  active:[box-shadow:0_0px_0_0_#1b6ff8,0_0px_0_0_#1b70f841]
                                                    active:border-b-[0px] transition-all duration-150 [box-shadow:0_10px_0_0_#059669,0_15px_0_0_#1b065F46] rounded-full  border-[1px] text-white font-bold py-2 px-4 rounded-full w-3/4 place-self-center m-0.5">
                    Add
                </button>
                <button onClick={(e) => triggerCompute(e)} className="transition duration-150 ease-in-out bg-emerald-500 active:translate-y-2  active:[box-shadow:0_0px_0_0_#1b6ff8,0_0px_0_0_#1b70f841]
                                                    active:border-b-[0px] transition-all duration-150 [box-shadow:0_10px_0_0_#059669,0_15px_0_0_#1b065F46] rounded-full  border-[1px] text-white font-bold py-2 px-4 rounded-full w-3/4 place-self-center m-0.5">
                    Compute
                </button>
            </div>
            {error && <Modal closeError={closeError} title="Compute Error" message="You left one of the grade box or unit box empty!" />}
        </div>
    )
}

export default GradeContainer