import { Coleta } from "@src/Entidades/Coletas/Coleta";
import { TipoDePermissao } from "../TipoDePermissao";

export interface UsuarioDto{
    Id: number;
    Nome: string;
    Data: Date;
    Senha: string;
    Cpf: string;
    TipoDePermissao: TipoDePermissao;
    Coletas: Array<Coleta>;
}