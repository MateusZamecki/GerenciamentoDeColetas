import { Coleta } from "@src/Entidades/coletas/coleta";
import { TipoDePermissao } from "../tipoDePermissao";
export interface UsuarioDto{
    id:number;
    nome:string;
    data:Date;
    senha: string;
    cpf: string;
    tipoDePermissao: TipoDePermissao;
    coletas: Array<Coleta>;
}