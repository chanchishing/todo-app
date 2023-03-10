import { retrieveTodoApi } from "./api/TodoApiService"
import { useAuth } from "./security/AuthContext";
import { useParams } from 'react-router-dom';
import { useEffect, useState } from "react";
import {Field, Form, Formik} from "formik"
export default function TodoComponent() {

    const authContext=useAuth();
    const username=authContext.username;

    const {id}=useParams();

    // const [description,setDescription]=useState('');
    // const [targetDate,setTargetDate]=useState('');
    const [todo,setTodo]=useState('');

    function retrieveTodo(){
        retrieveTodoApi(username,id)
            // .then(response=>{setDescription(response.data.description);
            //                  setTargetDate(response.data.targetDate);
            //                 })
            .then(response=>setTodo(response.data))
            .catch(error=>console.log(error));
    }

    function onSubmit(values) {
        console.log(values);
    }

    useEffect( ()=>retrieveTodo(),[id] );

    return (
        <div className="container">
            <h1>Enter Todo Details</h1>
            <div>
                <Formik initialValues={ {todo} } enableReinitialize={true}
                    onSubmit={onSubmit}
                >
                {
                    (props) => (
                        <Form>
                            <fieldset className="form-group">
                                <label>Description</label>
                                <Field type="text" className="form-control" name="todo.description"/>
                            </fieldset>
                            <fieldset className="form-group">
                                <label>Target Date</label>
                                <Field type="date" className="form-control" name="todo.targetDate"/>
                            </fieldset>
                            <div>
                                <button type="submit" className="btn btn-success m-5" >Save</button>
                            </div>
                        </Form>
                        )

                }
                </Formik>
            </div>
        </div>
    )

}