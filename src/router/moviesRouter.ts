import { Router } from "express";
import { validateSchemaMiddleware } from "../middleware/validateSchemas";
import { filmeSchema } from "../schemas/movieSchma";
import moviesControllers from "../controllers/index";

const moviesRouter = Router();

moviesRouter.post('/Movies', validateSchemaMiddleware(filmeSchema),moviesControllers.creatMovie)
moviesRouter.get('/Movies',moviesControllers.TakeMovie)

export default moviesRouter