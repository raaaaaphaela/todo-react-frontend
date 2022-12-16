import React from 'react';
import './App.css';
import {BrowserRouter, Route, Routes} from "react-router-dom";
import ToDoGallery from "./components/ToDoGallery";
import EditCard from "./components/EditCard";
import Navigation from "./Navigation";

export type Todo = {
    id: string;
    description: string;
    status: string;
}

function App() {

    return (
        <div className="App">
            <h1>Raphas T0D0 List</h1>
            <BrowserRouter>
                <Routes>
                    <Route path={"/"} element={<Navigation/>}></Route>
                    <Route path={"/todo/:id"} element={<EditCard/>}></Route>
                    <Route path={"/:status"} element={<ToDoGallery/>}></Route>
                </Routes>
            </BrowserRouter>
        </div>
    );
}

export default App;
