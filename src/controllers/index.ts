import { Request, Response } from "express"

function creatMovie(req: Request,res: Response){
    res.sendStatus(201);
}

const moviesControllers = {
    creatMovie
}

export default moviesControllers