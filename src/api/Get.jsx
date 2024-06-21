import axios from 'axios'

export const apiGet = () =>{
 
    const URL = "http://localhost:9000/registro/v1/cv/registro";

    axios.get(URL).then(response =>{
        console.log(response.data);

    }).catch(error =>{
        console.log("error en la peticion")
    })
}