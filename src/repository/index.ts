import { CreatFilme, filme } from "../protocols/index";
import db from "../database/conection";

export async function existMovie(filme:CreatFilme):Promise<number>{
    return (await db.query<filme>('SELECT * FROM movie WHERE nome =$1 AND gênero=$2',[filme.nome,filme.gênero])).rowCount
}

export async function postMovie(nome:string, plataforma:string, gênero:string, status:boolean, nota:number|undefined, resumo:string|undefined) {
    return (await db.query<filme>('INSERT INTO movie (nome, plataforma, gênero, status, nota, resumo) VALUES ($1,$2,$3,$4,$5,$6)',[nome, plataforma, gênero, status, nota, resumo]))
}