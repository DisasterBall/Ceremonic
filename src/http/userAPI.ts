import {$authHost, $host} from "./index";
import jwt_decode from "jwt-decode";

export const userRegistration = async (firstName: string, lastName: string, email: string, password: string) => {
    const {data} = await $host.post('/api/Account/registration', {firstName, lastName, email, password})
    localStorage.setItem('jwtString', data.jwtString)
    return jwt_decode(data.jwtString)
}

export const userLogin = async (email: string, password: string) => {
    const {data} = await $host.post('/api/Account/login', {email, password})
    localStorage.setItem('jwtString', data.jwtString)
    return jwt_decode(data.jwtString)
}

export const userGoogleRegistration = async (firstName: string, lastName: string, tokenID: string) => {
    const {data} = await $host.post('/api/Account/googleRegistration', {firstName, lastName, tokenID})
    localStorage.setItem('jwtString', data.jwtString)
    return jwt_decode(data.jwtString)
}

export const userGoogleLogin = async (tokenID: string) => {
    const {data} = await $host.post('/api/Account/googleLogin', {tokenID})
    localStorage.setItem('jwtString', data.jwtString)
    return jwt_decode(data.jwtString)
}

// export const userCheckJWT = async () => {
//     const {data} = await $authHost.get('api/user/auth')
//     localStorage.setItem('token', data.token)
//     return jwt_decode(data.token)
// }

export const fetchUsers = async () => {
    const {data} = await $host.get('/api/users')
    return data
}

export const fetchCurrentUser = async () => {
    const {data} = await $authHost.get('/api/Account/currentUser')
    return data
}

export const providerRoles = async () => {
    const data: string[] = await $host.get('/api/Services/names')
    return data
}

export const providerRegistration = async (
    firstName: string, 
    lastName: string, 
    email: string, 
    password: string, 
    serviceName: string,
    brandName: string) => {
    const {data} = await $host.post('/api/ProviderAccount/registration', {
        "userRegistrationModel":{firstName, lastName, email, password}, 
        "providerInfo":{serviceName, brandName}})
    localStorage.setItem('jwtString', data.jwtString)
    return jwt_decode(data.jwtString)
}

export const providerGoogleRegistration = async (
    firstName: string, 
    lastName: string, 
    tokenID: string, 
    serviceName: string, 
    brandName: string) => {
    const {data} = await $host.post('/api/ProviderAccount/googleRegistration', {
        "userRegistrationModel":{firstName, lastName, tokenID}, 
        "providerInfo":{serviceName, brandName}})
    localStorage.setItem('jwtString', data.jwtString)
    return jwt_decode(data.jwtString)
}

export const providerAvatar = async (formData: FormData) => {
    const {data} = await $authHost.put('/api/ProviderAccount/editAvatar', formData, {
        headers: {
            'Content-Type': 'multipart/form-data'
        }
    })
    return data
}

export const providerDataAvatar = async (formData: FormData) => {
    const response = await $authHost.put('/api/ProviderAccount/edit', formData, {
        headers: {
            'Content-Type': 'multipart/form-data'
        }
    })
    return response
}
  
export const currentDataProvider = async () => {
    const {data} = await $authHost.get('/api/ProviderAccount/currentProvider')
    return data
}

export const fetchAvatarFile = async (fileName: string) => {
    const {data} = await $authHost.get(`/api/Files/avatar/${fileName}`)
    return data
}


// export const updateUsers = async (username, email, role, id) => {
//     const {data} = await $authHost.put('api/user',{username, email, role, id})
//     return data
// }

// export const deleteUsers = async (id) => {
//     const {data} = await $authHost.delete('api/user', { data: {id}})
//     return data
// }

// export const createUsers = async (username, email, password, role) => {
//     const {data} = await $authHost.post('api/user/registration', {username, email, password, role})
//     return data
// }