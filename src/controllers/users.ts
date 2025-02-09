import { Request, Response } from 'express';
import { CreateUserDto } from '../dtos/createUser.dto';
const mongodb = require('../mongodb/connect');
const { ObjectId } = require('mongodb');

export const addUser = async (req: Request, res: Response) => {
    const { name, email, username, password } = req.body as CreateUserDto;
    const newUser = {name, email, username, password};
    const db = mongodb.getDB();
    const result = await db.collection('users').insertOne(newUser);
    if (result.acknowledged) {
        res.status(201).json({message: 'User created successfully'});
    } else {
        res.status(500).json({message: 'Failed to create user'});
    }
};


export const getUser = async (req: Request, res: Response) => {
    try {
        let id: string = req.params.id;
        const userId = new ObjectId(id);
        const db = mongodb.getDB();

        const result = await db.collection('users').findOne({_id: userId});
        
        if (!result) {
            return res.status(404).json({message: 'User not found'});
        } 
        res.setHeader('Content-Type', 'application/json');
        res.status(200).json(result);
    }
    catch (error) {
        res.status(404).json({message: 'User not found', error});
        console.error(`Error: ` ,  error)
    }
};

export const updateUser = async (req: Request, res: Response) => {
    const { id } = req.params;
    const { name, email, username, password } = req.body as CreateUserDto;
    const db = mongodb.getDB();
    const result = await db.collection('users').updateOne({_id: new ObjectId(id)}, {$set: {name, email, username, password}});
    if (result.acknowledged) {
        res.status(200).json({message: 'User updated successfully'});
    } else {
        res.status(500).json({message: 'Failed to update user'});
    }
};

export const deleteUser = async (req: Request, res: Response) => {
    const { id } = req.params;
    const db = mongodb.getDB();
    const result = await db.collection('users').deleteOne({_id: new ObjectId(id)});
    if (result.deletedCount) {
        res.status(200).json({message: 'User deleted successfully'});
    } else {
        res.status(500).json({message: 'Failed to delete user'});
    }
};