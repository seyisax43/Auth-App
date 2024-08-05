
import { createContext, useContext, useReducer } from "react";
// useReducer allow us to create reducer function to change the value of the store
// store to acess same object]
const initilaState = {auth:false};

const authContext = createContext(initilaState);


export function reducer(state, action){
    switch(action.type){
        case"login":
        return{auth:true};
        case"logout":
        return{auth:false};
        default:
        throw new Error()
    }
}
// auth provider

export function AuthProvider({children}){
const[authed,dispatch] = useReducer(reducer,initilaState)

    return<authContext.Provider value={[authed, dispatch]}>{children}</authContext.Provider>
}

// Own auth consumer hook
export default function AuthConsumer(){
    return useContext(authContext)
}
