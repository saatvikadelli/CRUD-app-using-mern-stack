import axios from 'axios';

const URL = 'http://localhost:8000';

export const addUser = async (data) => {
    try {
        return await axios.post(`${URL}/add`, data);
    } catch (error) {
        console.error('Error while calling addUser API', error);
        throw error; // Re-throw the error
    }
}

export const addPublicUser = async(data)=>{
    try{
        return await axios.post(`${URL}/add`, data);
    }catch(error){
        console.log('error while calling addPublicUser API', error);
    }
}


export const getUsers = async () => {
    try {
        return await axios.get(`${URL}/all`);
    } catch (error) {
        console.error('Error while calling getUsers API', error);
        throw error; // Re-throw the error
    }
}

export const getPublicUsers = async () => {
    try {
        const response = await axios.get(`${URL}/public-users`);
        // Filter the users based on their role (assuming role is a property in your user data)
        
        return response.data;
    } catch (error) {
        console.error('Error while calling getPublicUsers API', error);
        throw error;
    }
}


export const getUser = async (id)=>{
    try{
        return await axios.get(`${URL}/${id}`)

    }catch(error){
        console.log("error while calling API getUser",error)
    }
}

// Create a new function for fetching public user data



export const editUser = async (user , id) =>{
    try{
        return await axios.post(`${URL}/${id}`, user);
    }catch(error){
        console.log("error while calling editUser API",error)
    }
}

export const deleteUser = async (id) => {
    try {
        const response = await axios.delete(`${URL}/${id}`);
        return response.data; // Return the response data
    } catch (error) {
        console.error('Error while calling deleteUser API', error);
        throw error; // Re-throw the error to handle it in the component
    }
};
