import {Todo} from "../App";
import React from "react";
import ToDoCard from "./ToDoCard";
import useTodos from "../useTodos";

export default function ToDoGallery() {

    const todos = useTodos();

    return (
        <div className={"todo-gallery"}>
            {todos.map((todo: Todo) => {
                return <ToDoCard key={todo.id} {...todo}/>
            })}
        </div>
    )
}