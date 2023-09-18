export type filme = {
    id: number;
    nome: string;
    plataforma: string;
    gênero: string;
    status: boolean;
    nota?: number;
    resumo?: string
}

export type CreatFilme = Omit<filme,"id">