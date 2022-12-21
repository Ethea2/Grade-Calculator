import GradeList from './GradeList.js'
import {useState} from 'react'
const GradeContainer = () => {
    const [grades, setGrades] = useState(["Nathan", "Patty"])
    
    return (
        <div className="grid-cols-1 w-1/2 border-solid border-2">
            <GradeList grades={grades} />
        </div>
    )
}

export default GradeContainer