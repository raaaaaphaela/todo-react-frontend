import React from "react";
import {Route, Routes} from "react-router-dom";
import EditCard from "./components/EditCard";
import ToDoGallery from "./components/ToDoGallery";
import AddTodo from "./components/AddTodo";
import useTodos from "./useTodos";

export default function Homepage() {
    const todos = useTodos();

    return (
        <div className={"header"}>
            <h1>Raphas T0D0 List</h1>
            <AddTodo/>
            <Routes>
                <Route path={"/"} element={<ToDoGallery todos={todos}/>}></Route>
                <Route path={"/todo/:id"} element={<EditCard/>}></Route>
            </Routes>
        </div>
    )
}