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
                <div className={"edit-container"}>
                    <div className={"edit-form"}>
                        <div>
                            <h2>Item ändern</h2>
                            <form onSubmit={onSubmit}>
                                <div>
                                    <label htmlFor="description">Description: </label>
                                    <input type="text" name="description" value={todo.description} onChange={onChange}/>
                                </div>
                                <div>
                                    <label htmlFor="status">Status: </label>
                                    <select value={todo.status} onChange={onSelectChange}>
                                        <option value="OPEN">OPEN</option>
                                        <option value="IN_PROGRESS">IN_PROGRESS</option>
                                        <option value="DONE">DONE</option>
                                    </select>
                                </div>
                                <button className={"button button_white"}>Änderungen speichern</button>
                            </form>
                        </div>
                        <button className={"button button_white"} onClick={() => navigate("/")}>Zurück</button>
                    </div>
                </div>
            )
            }
        </div>
    )
}
