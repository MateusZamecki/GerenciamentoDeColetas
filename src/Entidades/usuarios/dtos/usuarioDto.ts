import { Coleta } from "@src/Entidades/coletas/Coleta";
import { TipoDePermissao } from "../TipoDePermissao";

export interface UsuarioDto{
    id: number;
    nome: string;
    data: Date;
    senha: string;
    cpf: string;
    tipoDePermissao: TipoDePermissao;
    coletas: Array<Coleta>;
}