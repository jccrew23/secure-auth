const { MongoClient } = require('mongodb');
import { Db } from 'mongodb';
const dotenv = require('dotenv');
dotenv.config();

let _db: Db;

export const initDB = async (): Promise<Db> => {
    if (_db) {
        console.warn('Trying to init DB again!');
        return _db;
    }

    try {
        const client = await MongoClient.connect(process.env.MONGO_URI);
            _db = client.db('SecureAuth');
            return _db;
    }
    catch (err) {
        console.error('Error connecting to MongoDB', err);
        throw err;
    }
};

export const getDB = () => {
    if (!_db) {
        console.warn('DB not initialized!');
    }
    return _db;
}


