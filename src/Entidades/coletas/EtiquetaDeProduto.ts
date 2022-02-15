import { Entidade } from "../Entidade";

export class EtiquetaDeProduto extends Entidade{

    public Nome: string;

    constructor(id:number, nome:string){
        super(id);
        this.Nome = nome;
    }

    public AlterarNome(nome: string): void{
        this.Nome = nome;
    }

}