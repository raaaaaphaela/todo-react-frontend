import {Link} from "react-router-dom";
import axios from "axios";

export default function ToDoCard({description, id, status}: {
    description: string,
    id: string,
    status: string
}) {
    async function deleteItem() {
        const response = await axios.delete("/api/todo/" + id);
        console.log(response.status)
        response.status === 200 && window.location.reload();
    }

    return (
        <div className={"todo-card"}>
            <h2>{description}</h2>
            <div className={"todo-card--actions"}>
                <p><Link to={"/todo/" + id}>Bearbeiten</Link></p>
                <button className={"button button_white"} onClick={() => deleteItem()}>Löschen</button>
            </div>
        </div>
    )
}