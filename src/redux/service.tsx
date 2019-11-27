import axios from 'axios';

function register(registerUrl: any, user: any) {

    return axios.post(registerUrl, user);

}


export default { register }



// function logIn(email: any, password: any) {

//     return axios.post("http://localhost:4000/register", email, password)

// }


// export default { logIn }

