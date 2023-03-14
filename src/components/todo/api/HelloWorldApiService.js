import { apiClient } from './ApiClent';

export const retrieveHelloWorldBean =
    ((token)=>apiClient.get('/hello-world-bean',
        // {
        //     headers :{
        //         Authorization: token
        //     }
        // }
    ));

export const retrieveHelloWorld = (()=>apiClient.get('/hello-world'));

export const retrieveHelloWorldPathVariable = 
    ((username,token)=>apiClient.get(`/hello-world/path-variable/${username}`,
        // {
        //     headers :{
        //         Authorization: token
        //     }
        // }
    ));
