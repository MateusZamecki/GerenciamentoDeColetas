import { Coleta } from "@src/Entidades/Coletas/Coleta";
import { Veiculo } from "@src/Entidades/Coletas/Veiculo";
import { TipoDePermissao } from "../TipoDePermissao";

export interface FuncionarioDto{
    Id: number;
    Nome: string;
    DataDeCriacao: Date;
    Cpf: string;
    Email: string;
    Coletas: Array<Coleta>;
    Veiculos: Array<Veiculo>;
    TipoDePermissao: TipoDePermissao.Funcionario;
}