import { useState } from "react"

const GradeList = ({ ids, addBox, removeBox }) => {

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
                                <input className="border-2 border-solid border-black h-12 my-1.5 rounded-lg palette6 text-black w-1/2 text-center" />
                            </div>
                            <div className="flex place-content-center">
                                <select id="grades" className="border-2 border-solid border-black h-12 my-1.5 rounded-lg palette6 w-1/2 text-center">
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
                <button onClick={addBox} className="bg-emerald-500 hover:bg-emerald-700 text-white font-bold py-2 px-4 rounded-full w-3/4 place-self-center">
                    Add
                </button>
            </div>
        </div>
    )
}

export default GradeList