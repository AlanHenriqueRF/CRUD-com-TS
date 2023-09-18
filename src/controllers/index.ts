import { Request, Response } from "express"
import { CreatFilme, filme } from "../protocols/index";
import MoviesSevice from "../service/serviceMovie";

async function creatMovie(req: Request, res: Response) {
    const filme = req.body as CreatFilme
    try {
        await MoviesSevice.CreatMovie(filme)
        res.sendStatus(201);
    }
    catch (err) {
        console.log(err)
        if (err.message === 'Movie already exists') return res.status(409).send(err.message)

        res.sendStatus(500);
    }
}

async function TakeMovie(req:Request,res:Response) {
    try{
        const movies = await MoviesSevice.TakeMovie()
        res.status(200).send(movies)
    }catch(err){
        res.sendStatus(500);
    }
    
}

const moviesControllers = {
    creatMovie,
    TakeMovie
}

export default moviesControllers