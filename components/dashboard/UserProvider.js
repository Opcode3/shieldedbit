import { useRouter } from "next/router";
import React from "react"
import { useState } from "react";
// import { getAdmin, getUser} from '../../helper/authenticate'



const AdminContext = React.createContext({});


export function UserProvider({children}){

    const router = useRouter();

    const [user, setUser] = useState({})

    // let user;

    React.useEffect(() => {

        const getUserType = async () => {

            if(router.pathname.includes("/v1")){
                // const admin = await getAdmin()
                // setUser({'username': 'Joseph Emeka'})
                console.log("Admin logged in")
            }

            if(router.pathname.includes("/user")){
                const fetched_data = localStorage.getItem('shieldedbit_user_info');
                const user_data = fetched_data !== null ? JSON.parse(fetched_data) : undefined;
                setUser(user_data)
                console.log("User logged in")
            }
        }

        getUserType()
        
      }, [])

    return (
        <AdminContext.Provider value={{user}}>
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