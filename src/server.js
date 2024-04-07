import express from 'express';
const app = express();
require('dotenv').config();
const port = process.env.PORT || 5000;
import cookieParser from 'cookie-parser'

import webRoutes from './route/webRoutes';
import bodyParser from 'body-parser';
import cors from 'cors';
const connect = require('./connectDBMongo/connectDBMongo');

app.listen(port, () => {
    console.log(`Moi ban truy cap vao: http://localhost:${port}`)
})
app.use((req, res, next) => {
    res.setHeader('Access-Control-Allow-Origin', '*');
    res.setHeader(
        'Access-Control-Allow-Methods',
        'GET, POST, OPTIONS, PUT, PATCH, DELETE'
    );
    res.setHeader(
        'Access-Control-Allow-Headers',
        'X-Requested-With,content-type'
    );
    res.setHeader('Access-Control-Allow-Credentials', true);
    next();
});

const corsOptions = {
    origin: process.env.CONNECT_FRONTEND,
    credentials: true,            //axios
    optionSuccessStatus: 200,
    methods: ["GET", "POST"]
}
app.use(cors(corsOptions));



app.use(bodyParser.json({ limit: '50mb' }))
app.use(bodyParser.urlencoded({ limit: '50mb', extended: true }))
app.use(cookieParser());





webRoutes(app);











