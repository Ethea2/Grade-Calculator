import GradeList from './GradeList.js'
import {useState} from 'react'
const GradeContainer = () => {
    const [ids, setId] = useState([0, 1, 2, 3])

    const addBox = () => {
        setId([... ids, ids.length])
    }

    const removeBox = (idParam) => {
        setId(ids.filter((id) => {
            return idParam !== id
        }))
    }
    return (
        <div className="border-solid border-2 border-green-700 rounded-md m-4">
            <GradeList ids={ids} addBox={addBox} removeBox={removeBox}/>
        </div>
    )
}

export default GradeContainer