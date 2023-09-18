import express, { json } from "express";
import indexRouter from "./router/indexRouter";

const app = express();

app.use(json());

app.use(indexRouter);

app.listen(5000,()=>{console.log('server is running in Port 5000')})