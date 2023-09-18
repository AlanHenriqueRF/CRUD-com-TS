import { deleteMovie, existMovie, getMovie, getMovieByid, postMovie, updateMovie } from "../repository/index";
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

async function TakeMovies():Promise<filme[]> {
    return (await getMovie()).rows
}

async function takeMovieById(id:number,filme:CreatFilme) {
    const movie = (await getMovieByid(id)).rows
    if (movie.length !== 1 ){
        throw { message: `No one movie find with this id ${id} or more of one movie finded!`}
    }
    
    await updateMovie(id,filme.nome, filme.plataforma, filme.gênero,filme.status, filme.nota, filme.resumo )
}

async function DeleteMovie(id:number) {
    const movie = (await getMovieByid(id)).rows
    if (movie.length !== 1 ){
        throw { message: `No one movie find with this id ${id} or more of one movie finded!`}
    }

    await deleteMovie(id)
}

const MoviesSevice = {
    CreatMovie,
    TakeMovies,
    takeMovieById,
    DeleteMovie
}

export default MoviesSevice