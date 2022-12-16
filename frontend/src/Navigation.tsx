import React from "react";
import AddTodo from "./components/AddTodo";
import ToDoGallery from "./components/ToDoGallery";

export default function Navigation () {
    return (
        <div>
            <AddTodo/>
          {/*  <ul className={"nav"}>
                <li><Link to={"/"}>Alle</Link></li>
                <li><Link to={"/open"}>Todo</Link></li>
                <li><Link to={"/in_progress"}>Doing</Link></li>
                <li><Link to={"/done"}>Done</Link></li>
            </ul>*/}
            <ToDoGallery/>
        </div>
    )
}