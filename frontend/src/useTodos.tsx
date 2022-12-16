import {useEffect, useState} from "react";
import {Todo} from "./App";
import axios from "axios";

export default function useTodos() {
    const [todos, setTodos] = useState<Todo[]>([]);

    useEffect(() => {
        try {
            (async() => {
                const response = await axios.get("/api/todo");
                setTodos(response.data);
            })();
        } catch (e) {
            console.log(e);
        }

    }, []);

    return todos;
}