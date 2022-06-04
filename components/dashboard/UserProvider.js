import React from "react"
import { getAdmin, getUser} from '../../helper/authenticate'



const AdminContext = React.createContext({});


export function UserProvider({children}){


    // const { getAdmin, getUser } = Auth()
    console.log()

    // function getUser(){
    //     return {
    //         name: 'Joseph Emmanuel',
    //         token: '404039993390303',
    //         account: 'user'
    //     };
    // }

    // function getAdmin(){
    //     return {
    //         name: "Joseph Emmanuel",
    //         token: "404039993390303",
    //     }
    // }


    const [name, setName] = React.useState("Dorathy");

    const state = {
        getAdmin, getUser
    }

    return (
        <AdminContext.Provider value={state}>
            {children}
        </AdminContext.Provider>
    )
} 

export function useUserState(){
    const state = React.useContext(AdminContext);

    if(state === undefined){
        throw new Error('useUserState must be used within the userProvider component')
    }
    return state;
}