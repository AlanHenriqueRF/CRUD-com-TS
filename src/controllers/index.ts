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
        const movies = await MoviesSevice.TakeMovies()
        res.status(200).send(movies)
    }catch(err){
        res.sendStatus(500);
    }
    
}

async function updateMovie(req:Request,res:Response) {
    const id:number = Number(req.params.id);
    const movie = req.body as CreatFilme;
    
    try{
        await MoviesSevice.takeMovieById(id,movie)
        res.status(200).send('Updated values succefully!')
    }catch(err){
        console.log(err)
        res.status(500).send(err.message);
    }
    
}

async function deleteMovie(req:Request,res:Response) {
    const id = Number(req.params.id)
    try{
        await MoviesSevice.DeleteMovie(id)
        res.status(200).send('Deleted value succesfully!')
    }catch(err){
        console.log(err)
        res.status(500).send(err.message);
    }
    
}


const moviesControllers = {
    creatMovie,
    TakeMovie,
    updateMovie,
    deleteMovie
}

export default moviesControllers