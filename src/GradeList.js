import { CSSTransition, TransitionGroup } from "react-transition-group"

const GradeList = ({ ids, enter, addUnits, addGrade, removeBox }) => {
    
    return (
        <div className="p-1">
            <TransitionGroup>
                {
                    ids.map(id => (
                        <CSSTransition classNames="list-transition" in={enter} timeout={400} key={id}>
                            <div className="grid grid-cols-3 justify-self-center justify-center w-full h-16 palette5 rounded-lg shadow-slate-100 self-center shadow-2xl
                        border-solid border-2 border-white my-5" >
                                <div className="flex place-content-center">
                                    <input className="border-2 border-solid border-black h-12 my-1.5 rounded-lg palette6 text-black w-3/4 text-center" />
                                </div>
                                <div className="flex place-content-center">
                                    <input type="number" min="0" step="1" className="border-2 border-solid border-black h-12 my-1.5 rounded-lg palette6 text-black w-1/2 text-center" onChange={(e) => addUnits(id, e.target.value)} />
                                </div>
                                <div className="flex justify-end">
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
                                    <button onClick={() => removeBox(id)} className="transition delay-100 bg-transparent hover:shadow-inherit-500/50 hover:ease-in hover:bg-red-500 text-white font-bold py-2 rounded-full w-1/4 h-3/4 m-1.5">
                                        <p className="text-white font-bold">X</p>
                                    </button>
                                </div>
                            </div>
                        </CSSTransition>
                    ))
                }
            </TransitionGroup>
        </div>
    )
}

export default GradeList