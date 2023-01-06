import './App.css';
import Navbar from './Navbar.js';
import React from 'react'
import GradePage from './GradePage.js';
import Footer from './Footer.js'

function App() {
    return (
        <div className="w-full flex flex-col">
            <Navbar />
            <GradePage />
            <Footer  />
        </div>
    );
}

export default App;
