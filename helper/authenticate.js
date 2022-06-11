import { setRequestMeta } from "next/dist/server/request-meta";
import { useRouter } from "next/router";
import { useState, useEffect } from "react";
import { postRequest } from "./request";


// get user information from db call
export const getUser = async (formData, setResponse) => {

    const rsp = await postRequest('https://passbuttons.com/fnn/loginauth',formData, 
            (data)=>{
                setResponse(data)
                if(data.code == 200){
                    // console.log(data.data)
                    setLocalStorage('shieldedbit_user_info', data.data);
                } 
            },
            (error)=>{
                setResponse(
                    { 'code': 404, 'message': 'Unable to make request. Check your internet connection'}
                );
            }
        )
    // if password = null then get some data else do a strict authenticity
    // authenticate user first from db
    // Set localstortage data
    return ; 
}

// get admin information from db call
export const getAdmin = async (username, password) => {
    
    if(username == "admin" && password == "admin123"){
        setLocalStorage("shieldedbit_admin_data", {name: "Joseph Emmanuel", username:username, token: "jskskslssnk339822092jjwkwkek38982"})
        return {name: "Joseph Emmanuel", username:username}
    }

    // if password = null then get some data else do a strict authenticity
    // authenticate user first from db
    // Set localstortage data
    return null 
}
// Login
export async function authenticate (form_data, pathurl, setResponse){

    return pathurl.includes("/v1/login") ? await getAdmin(form_data) : await getUser(form_data, setResponse);
}

export const authCheck = (callback, store_key = "shieldedbit_user_info") => {

    useEffect(() => {
        const fetched_data = localStorage.getItem(store_key);
        const user_data = fetched_data !== null ? JSON.parse(fetched_data) : undefined;
        callback(user_data)
    }, []);

}

function setLocalStorage(store_key, data){
    localStorage.setItem(store_key, JSON.stringify(data))
}

