import {Todo} from "../App";
import React from "react";
import Board from "./Board";
import {useParams} from "react-router-dom";

export default function ToDoGallery(props: { todos: Todo[] }) {

    const status = useParams<string>();

    console.log(status.toString())

    const openTodos = props.todos.filter(todo => todo.status === 'OPEN')
    const inProgressTodos = props.todos.filter(todo => todo.status === 'IN_PROGRESS')
    const doneTodos = props.todos.filter(todo => todo.status === 'DONE')

    return (
        <div className={"todo-gallery"}>
            <Board title={"OPEN"} todos={openTodos}/>
            <Board title={"IN_PROGRESS"} todos={inProgressTodos}/>
            <Board title={"DONE"} todos={doneTodos}/>
        </div>
    )
}