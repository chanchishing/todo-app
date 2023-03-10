import { retrieveTodoApi } from "./api/TodoApiService"
import { useAuth } from "./security/AuthContext";
import { useParams } from 'react-router-dom';
import { useEffect, useState } from "react";
import {ErrorMessage, Field, Form, Formik} from "formik"
export default function TodoComponent() {

    const authContext=useAuth();
    const username=authContext.username;

    const {id}=useParams();

    //const [todo,setTodo]=useState('');
    const [description,setDescription]=useState('');
    const [targetDate,setTargetDate]=useState('');

    function retrieveTodo(){
        retrieveTodoApi(username,id)
            .then(response=>{setDescription(response.data.description);
                             setTargetDate(response.data.targetDate);
                            })
            // .then(response=>setTodo(response.data))
            .catch(error=>console.log(error));
    }

    function onSubmit(values) {
        console.log(values);
    }

    function validate(values) {
        let errors={
        }

        //console.log(values);
        if (values.description.length<5){
            errors.description='Enter a least 5 characters';     
        }

        if (values.targetDate ==null ||values.targetDate ==""){
            errors.targetDate='Enter a target date';   
        }

        return errors;
    }

    useEffect( ()=>retrieveTodo(),[id] );
    //useEffect( ()=>retrieveTodo() );

    return (
        <div className="container">
            <h1>Enter Todo Details</h1>
            <div>
                <Formik initialValues={ {description,targetDate} } enableReinitialize={true}
                    onSubmit={onSubmit}
                    validate={validate}
                    validateOnChange={false}
                    validateOnBlur={false}
                >
                {
                    (props) => (
                        <Form>
                            <ErrorMessage 
                                name="description"
                                component="div"
                                className="alert alert-warning"
                            />
                            <ErrorMessage 
                                name="targetDate"
                                component="div"
                                className="alert alert-warning"
                            />

                            <fieldset className="form-group">
                                <label>Description</label>
                                <Field type="text" className="form-control" name="description"/>
                            </fieldset>
                            <fieldset className="form-group">
                                <label>Target Date</label>
                                <Field type="date" className="form-control" name="targetDate"/>
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