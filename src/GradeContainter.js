import GradeList from './GradeList.js'
import {useState} from 'react'
const GradeContainer = () => {
    return (
        <div className="border-solid border-2 border-green-700 rounded-md m-4">
            <GradeList/>
        </div>
    )
}

export default GradeContainer