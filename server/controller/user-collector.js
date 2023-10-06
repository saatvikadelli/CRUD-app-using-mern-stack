


import { request, response } from 'express';
import User from '../schema/user-schema.js';

export const addAnotherUser = async (request, response) => {
    const user = request.body;

    try {
        let role = user.role;
        if(!role){
            role = 'admin';
        }

        const nextUserId = await User.getNextUserId();
        const newUser = new User({
            ...user,
            userId: nextUserId,
            role : role
        });

        await newUser.save();
        response.status(201).json(newUser);
    } catch (error) {
        if (error.name === 'ValidationError') {
            response.status(400).json({ message: 'Validation error', errors: error.errors });
        } else {
            response.status(500).json({ message: 'Internal server error', error: error.message });
        }
    }
};


export const createPublicUser = async (req, res) => {
    const userId = req.params.userId;

    try {
        const user = req.body;
        const createdPublicUser = await User.create(user)
        // Fetch users with the specified role
        

        res.status(201).json(createdPublicUser);
    } catch (error) {
        res.status(500).json({ message: 'Internal server error', error: error.message });
    }
};



export const getUsers = async (request, response) =>{
    try{
        const users= await User.find({});//gets all data
        response.status(200).json(users);
    }catch(error){
        response.status(404).json({message: error.message});

    }
}

export const getPublicUsers = async (request, response) => {
    try {
        const role = 'public'; // Assuming you always want to fetch public users
        const users = await User.find({ role });
        response.status(200).json(users);
        
    } catch (error) {
        response.status(404).json({ message: error.message });
    }
}

export const getUser = async (request, response) => {
    const userId = request.params.id; // Get the _id from the request parameters
    try {
        const user = await User.findOne({ _id: userId }); // Find one user by _id
        if (!user) {
            return response.status(404).json({ message: 'User not found' });
        }
        response.status(200).json(user);
    } catch (error) {
        response.status(500).json({ message: error.message });
    }
}

export const editUser = async (request , response) => {
    let user = request.body;
    const editUser = new User(user);
    try{
        await User.updateOne({_id : request.params.id},editUser);
        response.status(201).json(editUser);
    }catch(error){
        response.status(409).json({message: error.message});
    }
}

export const deleteUser = async (request, response) => {
    

    try {
        await User.deleteOne({ _id: request.params.id });
        response.status(200).json({ message: 'User deleted successfully' });
    } catch (error) {
        response.status(409).json({ message: error.message });
    }
}