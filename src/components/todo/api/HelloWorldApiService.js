import axios from 'axios';

// export function retrieveHelloWorldBean() {
//     return axios.get('http://localhost:8080/hello-world-bean');
// }
export const retrieveHelloWorldBean = (()=>axios.get('http://localhost:8080/hello-world-bean'));



// export function retrieveHelloWorld() {
//     return axios.get('http://localhost:8080/hello-world');
// }
export const retrieveHelloWorld = (()=>axios.get('http://localhost:8080/hello-world'));
