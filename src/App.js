import GradeContainer from './GradeContainter.js'
import './App.css';
import Navbar from './Navbar.js';
import React from 'react'

function App() {
    return (
        <div className="w-full font-mono">
            <Navbar />
            <div className="grid grid-cols-1 md:grid md:grid-cols-2 md:w-full">
                <GradeContainer />
                Hello
            </div>
        </div>
    );
}

export default App;
