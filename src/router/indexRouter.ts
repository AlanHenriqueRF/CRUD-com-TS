import { Router } from "express";
import moviesRouter from "./moviesRouter";

const indexRouter = Router();

indexRouter.use(moviesRouter);

export default indexRouter


