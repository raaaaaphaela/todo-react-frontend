import React from "react";
import AddTodo from "./components/AddTodo";
import {NavLink} from "react-router-dom";

export default function Navigation() {
    return (
        <div>
            <AddTodo/>
            <nav>
                <NavLink to="/">Home</NavLink>
                <NavLink to="/board/todo">Todo</NavLink>
                <NavLink to="/board/doing">Doing</NavLink>
                <NavLink to="/board/done">Done</NavLink>
            </nav>
        </div>
    )
}