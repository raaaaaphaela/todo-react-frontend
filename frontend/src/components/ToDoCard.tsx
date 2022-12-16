import {Link} from "react-router-dom";

export default function ToDoCard({ description, id, status} : {
    description: string,
    id: string,
    status: string
}) {
    return (
        <div className={"todo-card"}>
            <h2>{description}</h2>
            <div className={"todo-card--actions"}>
                <p>Status: {status}</p>
                <p><Link to={"/todo/" + id}>Bearbeiten</Link></p>
            </div>
        </div>
    )
}