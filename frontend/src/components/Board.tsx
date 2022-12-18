import {Todo} from "../App";
import ToDoCard from "./ToDoCard";

export default function Board (props: {title: string, todos: Todo[] }) {
    return (
        <section className={"board"}>
            <h2 className={"board--headline"}>{props.title}</h2>
            {props.todos.map(todo => {
                return <ToDoCard key={todo.id} description={todo.description} id={todo.id} status={todo.status}/>
            })}
        </section>
    )
}