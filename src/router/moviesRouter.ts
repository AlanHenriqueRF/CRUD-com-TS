import { Router } from "express";
import { validateSchemaMiddleware } from "../middleware/validateSchemas";
import { filmeSchema } from "../schemas/movieSchma";
import moviesControllers from "../controllers/index";

const moviesRouter = Router();

moviesRouter.post('/Movies', validateSchemaMiddleware(filmeSchema),moviesControllers.creatMovie)
moviesRouter.get('/Movies',moviesControllers.TakeMovie)
moviesRouter.put('/Movies/:id',validateSchemaMiddleware(filmeSchema),moviesControllers.updateMovie)
moviesRouter.delete('/Movies/:id',moviesControllers.deleteMovie)

export default moviesRouter