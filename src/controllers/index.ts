import { Request, Response } from "express"
import { CreatFilme } from "../protocols/index";
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

const moviesControllers = {
    creatMovie
}

export default moviesControllers