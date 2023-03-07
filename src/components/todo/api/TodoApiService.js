import axios from 'axios';

const apiClient =axios.create (
                    {
                        baseURL:'http://localhost:8080',
                    }
                )       

// export const retrieveHelloWorldBean = (()=>apiClient.get('/hello-world-bean'));

// export const retrieveHelloWorld = (()=>apiClient.get('/hello-world'));

export const retrieveAllTodosForUserName = ((username)=>apiClient.get(`/users/${username}/todos`));