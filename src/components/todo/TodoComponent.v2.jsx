import { retrieveTodoApi,updateTodoApi,createTodoApi } from "./api/TodoApiService"
import { useAuth } from "./security/AuthContext";
import { useNavigate, useParams } from 'react-router-dom';
import { useEffect, useState } from "react";
import {ErrorMessage, Field, Form, Formik} from "formik"
import moment from "moment/moment";
export default function TodoComponent() {

    const authContext=useAuth();
    const username=authContext.username;

    const navigate=useNavigate();
    
    const {id}=useParams();

    const [todo,setTodo]=useState('');

    function retrieveTodo(){
        
        if (id==="-1") {
            console.log("id is -1");
            setTodo({description:"",targetDate:"",done:false});
            return;
        }

        retrieveTodoApi(username,id)
            .then(response=>setTodo(response.data))
            .catch(error=>console.log(error));
    }

    function onSubmit(values) {
        
        const todo={id:id,
                    username:username,
                    description: values.todo.description,
                    targetDate:values.todo.targetDate,
                    done: false,
                    version:values.todo.version
        }

        if (id==="-1") {
            createTodoApi(username,todo)
                .then(response=>navigate('/todos'))
                .catch(error=>console.log(error));
        } else {
            updateTodoApi(username,id,todo)
                .then(response=>navigate('/todos'))
                .catch(error=>console.log(error));
        }
    }

    function validate(values) {
        let errors={}

        if (values.todo.description.length<5){
            errors.todo ? void(0):errors.todo={};
            errors.todo.description='Enter a least 5 characters';     
        }

        if (values.todo.targetDate===null||values.todo.targetDate==="" || !moment(values.todo.targetDate).isValid()){
            errors.todo ? void(0):errors.todo={};
            errors.todo.targetDate='Enter a target date';   
        }
 
        return errors;
    }

    useEffect( ()=>retrieveTodo(),[todo.description,todo.targetDate] );


    return (
        <div className="container">
            <h1>Enter Todo Details</h1>
            <div>
                <Formik initialValues={ {todo} } enableReinitialize={true}
                    onSubmit={onSubmit}
                    validate={validate}
                    validateOnChange={false}
                    validateOnBlur={false}
                >
                {
                    (props) => (
                        <Form>
                            <ErrorMessage 
                                name="todo.description"
                                component="div"
                                className="alert alert-warning"
                            />
                            <ErrorMessage 
                                name="todo.targetDate"
                                component="div"
                                className="alert alert-warning"
                            />

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