import { useEffect, useMemo, useState } from "react"
import GradeContainer from "./GradeContainter"
import { GradeContext } from "./GradeContext"
import { GradeDisplay } from "./GradeDisplay"

const GradePage = () => {
    const [data, setData] = useState()
    const [compute, setCompute] = useState(false)

    const providerValue = useMemo(() => ({data, setData}), [data, setData])

    return (
        <div className="grid grid-cols-1 h-full md:grid md:grid-cols-2 md:w-full">
            <GradeContext.Provider value={providerValue}>
                <GradeContainer setCompute={setCompute}/>
                <GradeDisplay compute={compute} setCompute={setCompute}/>
            </GradeContext.Provider>
        </div>
    )
}

export default GradePage