import React from 'react';
import './App.css';
import {BrowserRouter} from "react-router-dom";
import Homepage from "./Homepage";

export type Todo = {
    id: string;
    description: string;
    status: string;
}

function App() {

    return (
        <div className="App">
            <BrowserRouter>
                <Homepage/>
            </BrowserRouter>
        </div>
    );
}

export default App;
