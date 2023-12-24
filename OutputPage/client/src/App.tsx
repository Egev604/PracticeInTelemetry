import './App.css';
import React from "react";
import ClientRouts from "./Routs/clientRouts";
import {BrowserRouter as Router} from "react-router-dom";



function App() {
    return (
            <Router>
                <ClientRouts></ClientRouts>
            </Router>
    );
}

export default App;
