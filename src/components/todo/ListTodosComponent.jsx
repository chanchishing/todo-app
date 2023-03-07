import { useEffect, useState } from "react";
import { retrieveAllTodosForUserName } from "./api/TodoApiService";

export default function ListTodosComponent() {

    const today= new Date();
    const targetDate=new Date(today.getFullYear()+12,today.getMonth(),today.getDay());

    const [todos,setTodos]=useState([])


    function refreshTodos(){
        retrieveAllTodosForUserName('in28minutes')
            .then(response=>{
                            setTodos(response.data);
                            }
                )
            .catch(error=>console.log(error));
    }

    useEffect( ()=>(refreshTodos(),[]) );

    return (
        <div className="container">
            <h1>Things To Do!</h1>
            <div>
                <table className="table">
                    <thead>
                        <tr>
                            <td>Id</td>
                            <td>Description</td>
                            <td>Is Done?</td>
                            <td>Target Date</td>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            todos.map(todo=>(
                                                <tr key={todo.id}>                            
                                                    <td>{todo.id}</td>
                                                    <td>{todo.description}</td>
                                                    <td>{todo.done.toString()}</td>
                                                    <td>{todo.targetDate.toString()}</td>
                                                </tr>
                                            )
                                    )
                        }
                    </tbody>
                </table>

            </div>
        </div>
    )
}