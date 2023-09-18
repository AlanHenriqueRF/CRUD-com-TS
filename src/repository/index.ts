import { CreatFilme, filme } from "../protocols/index";
import db from "../database/conection";

export async function existMovie(filme: CreatFilme): Promise<number> {
    return (await db.query<filme>('SELECT * FROM movie WHERE nome =$1 AND gênero=$2', [filme.nome, filme.gênero])).rowCount
}

export async function postMovie(nome: string, plataforma: string, gênero: string, status: boolean, nota: number | undefined, resumo: string | undefined) {
    return (await db.query<filme>('INSERT INTO movie (nome, plataforma, gênero, status, nota, resumo) VALUES ($1,$2,$3,$4,$5,$6)', [nome, plataforma, gênero, status, nota, resumo]))
}

export async function getMovie() {
    return (await db.query<filme>('SELECT * FROM movie'))
}

export async function getMovieByid(id:number) {
    return (await db.query<filme>('SELECT * FROM movie WHERE id =$1',[id]))
}

export async function updateMovie(id: number, nome: string, plataforma: string, gênero: string, status: boolean, nota: number | undefined, resumo: string | undefined) {
    console.log(nome, plataforma, gênero, status, nota, resumo,id)
    return (await db.query<filme>('UPDATE movie SET nome = $1, plataforma=$2, gênero=$3, status=$4, nota=$5, resumo = $6 WHERE id =$7;',[nome, plataforma, gênero, status, nota, resumo,id]))
}

export async function deleteMovie(id:number){
    return (await db.query<filme>('DELETE FROM movie WHERE id = $1',[id]))
}