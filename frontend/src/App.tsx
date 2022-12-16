import React from 'react';
import './App.css';
import AddTodo from "./components/AddTodo";
import {BrowserRouter, Route, Routes} from "react-router-dom";
import ToDoGallery from "./components/ToDoGallery";
import EditCard from "./components/EditCard";

export type Todo = {
    id: string;
    description: string;
    status: string;
}

function App() {

    return (
        <div className="App">
            <h1>Raphas ToDO List</h1>
            <AddTodo/>
          {/*  <ul className={"nav"}>
                <li>Home</li>
                <li>ToDo</li>
                <li>Doing</li>
                <li>Done</li>
            </ul>*/}

            <BrowserRouter>
                <Routes>
                    <Route path={"/todo/:id"} element={<EditCard/>}></Route>
                    <Route path={"/"} element={<ToDoGallery/>}></Route>
                </Routes>
            </BrowserRouter>
        </div>
    );
}

export default App;
