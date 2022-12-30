import { cleanup } from "@testing-library/react"
import { useEffect, useState } from "react"

const GradeList = () => {
    const [unit, setUnit] = useState([])
    const [grade, setGrade] = useState([])
    const [data, setData] = useState([])
    const [ids, setId] = useState([0, 1, 2, 3])

    const addBox = () => {
        setId([...ids, ids.length])
        setData([...data, {
            id: ids.length,
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
        setId(ids.map((element) => element - 1)) //bug fix: the appending and removing of boxes logic is bad
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
        data[id].grade = addedGrade
    }

    const addUnits = (id, addedUnits) => {
        if (typeof unit[id] === 'undefined') {
            setUnit([...unit, {
                id: id,
                units: addedUnits
            }])
        } else {
            setUnit(unit.map((item) => {
                if (item.id === id) {
                    item.units = addedUnits
                }
                return item
            }))
        }
    }

    return (
        <div>
            <div className="grid grid-cols-4 justify-center w-full h-12 rounded-lg greenBG my-1 border-2 border-solid border-green-200 palette6">
                <div className="label-tag">
                    Course Code
                </div>
                <div className="label-tag">
                    Units
                </div>
                <div className="label-tag">
                    Grades
                </div>
                <div className="label-tag">
                    Add/Remove
                </div>
            </div>
            {
                ids.map(id => (
                    <div className="flex justify-center w-full h-24 rounded-lg greenBG padding" key={id}>
                        <div className="grid grid-cols-4 justify-self-center justify-center w-full h-16 palette5 rounded-lg shadow-slate-100 self-center shadow-2xl
                        border-solid border-2 border-white">
                            <div className="flex place-content-center">
                                <input className="border-2 border-solid border-black h-12 my-1.5 rounded-lg palette6 text-black w-3/4 text-center" />
                            </div>
                            <div className="flex place-content-center">
                                <input type="number" min="0" step="1" className="border-2 border-solid border-black h-12 my-1.5 rounded-lg palette6 text-black w-1/2 text-center" onChange={(e) => addUnits(id, e.target.value)} />
                            </div>
                            <div className="flex place-content-center">
                                <select id="grades" className="border-2 border-solid border-black h-12 my-1.5 rounded-lg palette6 w-1/2 text-center" onChange={(e) => addGrade(id, e.target.value)}>
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
                            </div>
                            <div>
                                <button onClick={() => removeBox(id)} className="bg-emerald-500 hover:bg-emerald-700 text-white font-bold py-2 px-4 rounded-full w-3/4 place-self-center mt-2.5">
                                    Remove
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