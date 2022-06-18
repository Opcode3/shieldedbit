export function useUserInfo(user_data){
    return {
        username: user_data.usename,
        type: user_data.type,
        email: user_data.email,
        id: user_data.id
    }
}