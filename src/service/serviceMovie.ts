import { existMovie, getMovie, postMovie } from "../repository/index";
import { CreatFilme, filme } from "../protocols/index";

async function CreatMovie(filme:CreatFilme){
    if (await alredyExistMovie(filme)){
        throw { message: "Movie already exists" }
    }

    let {nome, plataforma, gênero, status, nota, resumo} = filme

    if (!nota){
        nota = undefined
    }
    if (!resumo){
        resumo = undefined
    }

    await postMovie(nome, plataforma, gênero, status, nota, resumo)
}

async function alredyExistMovie(filme:CreatFilme):Promise<boolean>{
    const num_films = await existMovie(filme);
    if (num_films > 0){
        return true
    }
    return false
}

async function TakeMovie() {
    return (await getMovie()).rows
}

const MoviesSevice = {
    CreatMovie,
    TakeMovie
}

export default MoviesSevice