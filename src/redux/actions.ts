import axios from "axios"

// import Actions from './actions.config'
// import service from './service'




export const userLogin = (user: any) => {
  return async (dispatch: any) => {
    try {
      const result = await axios.post("http://localhost:4000/login", user)
      const { redirect, message, token } = result.data
      if (redirect) {
        alert(message)

        localStorage.setItem('token', token);
        dispatch(loginUser(user))
      }
      if (!redirect) alert("log out")
    } 
    catch(err) {
           console.log(err);
    }
}  
}



export const getFlights = (history: any) => {

  return async (dispatch: any) => {
    const token = localStorage.token;
    if (!token) history.push('/login/')
    try {
      const result = await axios.post(
        "http://localhost:4000/myFlights", {
        method: "GET",
        headers: {
          'Content-Type': 'application/json',
          Accept: 'application/json',
          'Authorization': token
        }
      }
      )
      const { redirect, message, user } = result.data
      console.log("res", result.data)
      if (!redirect) {
        alert(message)
        history.push('/login')
        // An error will occur if the token is invalid.
        // If this happens, you may want to remove the invalid token.
        localStorage.removeItem("token")
      } else {
    
        dispatch(loginUser("user"))
      }
    }
    catch(err) {
      console.log(err);
}
  
    }
  }


//=================--------------------------not working properly

// export const getFlights = (history: any) => {

//   return (dispatch: any) => {
//     const token = localStorage.token;
//     if (!token) history.push('/login/')
//     if (token) {
//       return fetch("http://localhost:4000/myFlights", {
//         method: "GET",
//         headers: {
//           'Content-Type': 'application/json',
//           Accept: 'application/json',
//           'Authorization': token
//         }
//       })
//         .then(resp => resp.json())
        
//         .then(data => {
//           console.log("data=", data)
//           if (!data.redirect) {
//             alert(data.message)
//             history.push('/login')
//             // An error will occur if the token is invalid.
//             // If this happens, you may want to remove the invalid token.
//             localStorage.removeItem("token")
//           } else {
        
//             dispatch(loginUser(data.user))
//           }
//         })
//     }
//   }
// }
//====================================



    // fetch("http://localhost:4000/login", {
    //     method: "POST",
    //     headers: {
    //       'Content-Type': 'application/json',
    //       Accept: 'application/json',
    //     },
    //     body: JSON.stringify({user})
    //   })
    //   .then(resp => resp.json())
    //   .then(data => {
    //     console.log("data", data)
        
    //       if (data.redirect) {
    //             alert(data.message)

    //             localStorage.setItem('token', data.token);
    //             dispatch(loginUser(data.user))
    //           }
    //           if (!data.redirect) alert("log out")
          


    
        
    
  


  const loginUser = (userObj: any) => ({
    type: 'LOGIN_USER',
    payload: userObj
})


//working ===========with===========fetch 


// export const userLogin = (user: any) => {
//   return (dispatch: any) => {
//     return fetch("http://localhost:4000/login", {
//         method: "POST",
//         headers: {
//           'Content-Type': 'application/json',
//           Accept: 'application/json',
//         },
//         body: JSON.stringify({user})
//       })
//       .then(resp => resp.json())
//       .then(data => {
//         console.log("data", data)
        
//           if (data.redirect) {
//                 alert(data.message)

//                 localStorage.setItem('token', data.token);
//                 dispatch(loginUser(data.user))
//               }
//               if (!data.redirect) alert("log out")
          


    
//         })
//     }
//   }


//   const loginUser = (userObj: any) => ({
//     type: 'LOGIN_USER',
//     payload: userObj
// })


//=====================================================end


  // handleLogin = async () => {
  //   console.log(this.state)
  //   const result = await axios.post(logInUrl, this.state)
  //   const { redirect, message, token } = result.data
  //   this.setState({ message: message })
  //   if (redirect) {
  //     alert(message)
  //     this.props.history.push('/home')
  //     localStorage.setItem('token', token);
  //   }
  //   if (!redirect) this.props.history.push('/login')

  // }








// export const registerSuccessAction = (user: any) => {
//     return {
//         type: Actions.REGISTER_SUCCESS,
//         payload: { user }
//     }
// }




// export const registerAction = (user: any) => {
//     return async (dispatch: any) => {
//         try {
//             const result = await service.register("http://localhost:4000/register", user)
//             //dispatch(registerSuccessAction(result.data.user))
//             console.log("this is the resulrt=>" + result)
//         }
//         catch(err) {
//            console.log(err);
//         }
//     }
// }



// export const logInAction = (email: any, password: any) => {
//     return async (dispatch: any) => {
//         try {
//             const result = await service.logIN(email, password)
//             dispatch(logInSuccessAction(result.data.Search))
//         }
//         catch(err) {
//            console.log(err);
//         }
//     }
// }

