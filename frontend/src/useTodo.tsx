import {useEffect, useState} from "react";
import {Todo} from "./App";
import axios from "axios";

export default function useTodo(id: string|undefined) {
    const [todo, setTodo] = useState<Todo>();

    useEffect(() => {
        try {
            (async () => {
                const response = await axios.get("/api/todo/" + id);
                setTodo(response.data);
            })();
        } catch (e) {
            console.log(e);
        }

    }, []);

    return todo;
}
