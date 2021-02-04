// Imports pkg of solution
import express from 'express';
import bodyParser from 'body-parser';
import cors from 'cors';

// Imports routes
import todoRouter from './routes/todoRouter.js';

// Initializer app
const server = express();

// Implmentations of body parser
server.use(bodyParser.json());

// Implementation of cors
server.use(cors());

// Implementation of routers
server.use('/api', todoRouter);

export default server;