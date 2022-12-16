import {useNavigate, useParams} from "react-router-dom";
import {Todo} from "../App";
import React, {FormEvent, useEffect, useState} from "react";
import axios from "axios";

export default function EditCard() {

    const {id} = useParams<{ id: string }>();
    const [todo, setTodo] = useState<Todo>();
    const navigate = useNavigate();

    useEffect(() => {

        (async () => {
            const response = await axios.get("/api/todo/" + id);
            setTodo(response.data);
        })();
    }, []);

    function onChange(e: React.ChangeEvent<HTMLInputElement>) {

        const targetValue: string = e.target.value;
        const targetName: string = e.target.name;

        todo !== undefined && setTodo({...todo, [targetName]: targetValue});

        console.log(todo);
    }

    function onSelectChange(e: any) {
        const value = e.target.value;
        todo !== undefined && setTodo({...todo, status: value})
    }

    const onSubmit = (event: FormEvent<HTMLFormElement>) => {
        event.preventDefault()
        todo !== undefined && axios.put(`/api/todo/${todo.id}/update`, todo)
            .then(() => setTodo(todo))
            .catch(error => console.log(error))
    }

    // TODO make undefined not working...
    return (
        <div>
            {todo === undefined ? <p>Sorry, dieses Item ist nicht vorhanden...</p> : (
                <div>
                    <form onSubmit={onSubmit}>
                        <label htmlFor="description">Description</label><br/>
                        <input type="text" name="description" value={todo.description} onChange={onChange}/><br/>

                        <label htmlFor="status">Status</label><br/>

                        <select value={todo.status} onChange={onSelectChange}>
                            <option value="OPEN">OPEN</option>
                            <option value="IN_PROGRESS">IN_PROGRESS</option>
                            <option value="DONE">DONE</option>
                        </select><br/>
                        <button>Änderungen speichern</button>
                    </form>
                    <button onClick={() => navigate("/")}>Zurück</button>
                </div>
            )
            }
        </div>
    )
}
