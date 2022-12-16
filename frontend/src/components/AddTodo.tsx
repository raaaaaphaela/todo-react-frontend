import React, {useState} from "react";
import axios from "axios";
import {Status} from "../helper/Status";

export type NewTodo = {
    description: string;
    status: Status
}

export default function AddTodo() {

    let todoBody: NewTodo = {
        description: "",
        status: Status.OPEN
    }

    const [newTodo, setNewTodo] = useState<NewTodo>(todoBody);

     function sendNewTodo () {
         axios.post("/api/todo", newTodo)
             .then(response => response.data)
             .catch(e => console.error(e));
    }

    function createNewTodo(e: React.ChangeEvent<HTMLInputElement>) {
        const description = e.target.value;
        setNewTodo({
            ...newTodo, description: description
        })
    }

    return (
        <div className={"add-todo"}>
            <h2>Neues Item hinzufügen:</h2>
            <form onSubmit={sendNewTodo}>
                <input type="text" name="description" onChange={createNewTodo}/>
                <button type={"submit"}>Hinzufügen</button>
            </form>
        </div>
    )
}

