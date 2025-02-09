import express from 'express';
const bodyParser = require('body-parser');
const cors = require('cors');
const mongodb = require('./mongodb/connect');


const app = express();

const PORT = 3000;

app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});

app
    .use(cors())
    .use(bodyParser.json())
    .use(express.json())
    .use((req, res, next) => {
        res.setHeader('Access-Control-Allow-Origin', '*');
        res.setHeader('Access-Control-Allow-Methods', 'GET, POST, PUT, DELETE');
        res.setHeader('Access-Control-Allow-Headers', 'Content-Type, Authorization');
        next();
    })
    .use('/users', require('./routes/users'))
;

mongodb.initDB()
    .then(() => {
        console.log('Connected to MongoDB');
    })
    .catch((err: string) => {
        console.error('Error connecting to MongoDB');
        console.error(err);
    });