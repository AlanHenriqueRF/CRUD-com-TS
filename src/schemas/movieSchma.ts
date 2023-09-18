import joi from "joi";
import {filme} from "../protocols/index";

export const filmeSchema = joi.object<filme>({
    nome: joi.string().required(),
    gênero: joi.string().required(),
    nota: joi.number().min(0).max(10),
    plataforma: joi.string().required(),
    resumo:joi.string(),
    status: joi.boolean().required()

})