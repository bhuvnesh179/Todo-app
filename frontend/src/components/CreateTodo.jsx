import { Todos } from "./Todos";

export function CreateTodo(){
    return <div>
        <input type="text" placeholder="Title"></input>
        <br></br>
        <br></br>
        <input type="text" placeholder="Description"></input>
        <br></br>
        <br></br>

        <button>Add a Todo</button>
        <br></br>
        <br></br>

        
    </div>
}