import express from 'express';
import http from 'http';
import bodyParser from 'body-parser';
import cookieParser from 'cookie-parser';
import compression from 'compression';
import cors from 'cors';
import mongoose from 'mongoose';
import { error } from 'console';

const app = express();

app.use(cors({
    credentials: true,
}));

app.use(compression());
app.use(bodyParser());
app.use(bodyParser.json());

const server = http.createServer(app);

server.listen(8000, ()=> {
    console.log("Server is running on http//:localhost:8000");
})

const MONGO_URL = 'mongodb+srv://oduwolejohn431:Mm1901318@cluster0.ynniptx.mongodb.net/?retryWrites=true&w=majority';

mongoose.Promise = Promise;
mongoose.connect(MONGO_URL);
mongoose.connection.on('error', (error: Error) => console.log(error));