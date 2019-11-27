const initialState = {
    currentUser: {}
  }
  export default function root(state = initialState, action: any) {
    console.log("action=>", action)
    switch (action.type) {
      case 'LOGIN_USER':
          return {...state, currentUser: action.payload}
        default:
          return state;
      }
    }