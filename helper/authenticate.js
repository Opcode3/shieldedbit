

export const getUser = () => {
    setLocalStorage()
    return {};
    // return {  name: 'Joseph Emmanuel', token: '404039993390303', account: 'user'};    

}
    
export const getAdmin = () => {
    setLocalStorage()
    return {} 
}

export const clearLocalStorage = () => {

}

function setLocalStorage(){
    if(!localStorage.getItem("shieldedbit_user_info")){
        console.log("Emeka is Stored locally!")
    }
}

