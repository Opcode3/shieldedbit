import { useRouter } from "next/router";
import { useState, useEffect } from "react";


// get user information from db call
export const getUser = async (username, password = null) => {

    if(username == "opcode3" && password == "123"){
        setLocalStorage("shieldedbit_user_info", {name: "Joseph Emmanuel", username:"", token: "jskskslssnk339822092jjwkwkek38982"})
        return {name: "Joseph Emmanuel", username:username, accountType: ''}
    }

    // if password = null then get some data else do a strict authenticity
    // authenticate user first from db
    // Set localstortage data
    return null 
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
export async function authenticate (username, password, pathurl){

    let response = null;
    if(pathurl.includes("/v1/login")){
        response = await getAdmin(username, password)
    }else if(pathurl.includes("/login")){
        response = await getUser(username, password);
    }

    return response;
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

