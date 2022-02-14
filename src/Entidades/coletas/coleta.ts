import { Entidade } from "../Entidade";
import { Funcionario } from "../Usuarios/Funcionario";
import { Produto } from "./Produto";
import { Cliente } from "../Cliente/Cliente";

export class Coleta extends Entidade{

    Produtos: Array<Produto>;
    Funcionario: Funcionario;
    Cliente: Cliente;

    constructor(id:number, nome:string, produtos: Array<Produto>, funcionario: Funcionario, cliente: Cliente) {
        super(id,nome);
        this.Produtos = produtos;
        this.Funcionario = funcionario;
        this.Cliente = cliente;
    }

}