"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.getDB = exports.initDB = void 0;
const { MongoClient } = require('mongodb');
const dotenv = require('dotenv');
dotenv.config();
let _db;
const initDB = () => __awaiter(void 0, void 0, void 0, function* () {
    if (_db) {
        console.warn('Trying to init DB again!');
        return _db;
    }
    try {
        const client = yield MongoClient.connect(process.env.MONGO_URI);
        _db = client.db('SecureAuth');
        return _db;
    }
    catch (err) {
        console.error('Error connecting to MongoDB', err);
        throw err;
    }
});
exports.initDB = initDB;
const getDB = () => {
    if (!_db) {
        console.warn('DB not initialized!');
    }
    return _db;
};
exports.getDB = getDB;
