import { useEffect, useState } from "react"
import { v4 as uuidv4 } from 'uuid'

const GradeList = () => {
    const [data, setData] = useState([])
    const [ids, setId] = useState([uuidv4(), uuidv4(), uuidv4(), uuidv4()])

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
        setId(ids.filter((id) => {
            if (idParam !== id) {
                cleanUpData(idParam)
            }
            return idParam !== id
        }))
        //bug fix: the appending and removing of boxes logic is bad
    }

    useEffect(() => {
        onStart()
    }, [])


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


    const printData = () => {
        // console.log(grade)
        // console.log(unit)
        console.log(data)
    }


    const addGrade = (id, addedGrade) => {
        data.find((element, index) => {
            if (element.id === id) {
                data[index].grade = addedGrade
            }
        })
    }


    const addUnits = (id, addedUnits) => {
        data.find((element, index) => {
            if (element.id === id) {
                data[index].unit = addedUnits
            }
        })
    }


    return (
        <div>
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
            {
                ids.map(id => (
                    <div className="flex justify-center w-full h-24 rounded-lg greenBG padding" key={id}>
                        <div className="grid grid-cols-3 justify-self-center justify-center w-full h-16 palette5 rounded-lg shadow-slate-100 self-center shadow-2xl
                        border-solid border-2 border-white">
                            <div className="flex place-content-center">
                                <input className="border-2 border-solid border-black h-12 my-1.5 rounded-lg palette6 text-black w-3/4 text-center" />
                            </div>
                            <div className="flex place-content-center">
                                <input type="number" min="0" step="1" className="border-2 border-solid border-black h-12 my-1.5 rounded-lg palette6 text-black w-1/2 text-center" onChange={(e) => addUnits(id, e.target.value)} />
                            </div>
                            <div className="flex place-content-center">
                                <select id="grades" className="border-2 border-solid border-black h-12 my-1.5 rounded-lg palette6 w-3/4 text-center md:w-1/2" onChange={(e) => addGrade(id, e.target.value)}>
                                    <option disabled selected value className="hide"></option>
                                    <option value="4.0">4.0</option>
                                    <option value="3.5">3.5</option>
                                    <option value="3.0">3.0</option>
                                    <option value="2.5">2.5</option>
                                    <option value="2.0">2.0</option>
                                    <option value="1.5">1.5</option>
                                    <option value="1.0">1.0</option>
                                    <option value="0.0">0.0</option>
                                </select>
                                <button onClick={() => removeBox(id)} className="transition delay-100 bg-transparent hover:shadow-inherit-500/50 hover:ease-in hover:bg-red-500 text-white font-bold py-2 px-4 rounded-full w-1/4 h-3/4 m-1.5">
                                    <p className="text-white font-bold">X</p>
                                </button>
                            </div>
                        </div>
                    </div>
                ))
            }
            <div className="flex place-content-center m-1">
                <button onClick={addBox} className="bg-emerald-500 hover:bg-emerald-700 text-white font-bold py-2 px-4 rounded-full w-3/4 place-self-center m-0.5">
                    Add
                </button>
                <button onClick={printData} className="bg-emerald-500 hover:bg-emerald-700 text-white font-bold py-2 px-4 rounded-full w-3/4 place-self-center m-0.5">
                    Compute
                </button>
            </div>
        </div>
    )
}

export default GradeList