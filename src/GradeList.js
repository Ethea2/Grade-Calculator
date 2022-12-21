const GradeList = ({ grades }) => {


    return (
        <div>
            {
                grades.map(grade => (
                    <div className="flex justify-center w-full h-32 rounded-lg greenBG padding my-1">
                        <div className="justify-self-center justify-center w-3/4 h-24 yellowBG rounded-lg bg-red-400 shadow-red-500 self-center shadow-2xl">
                            <h1 className="text-3xl font-bold underline">
                                {grade}
                            </h1>
                        </div>
                    </div>
                ))
            }
        </div>
    )
}

export default GradeList