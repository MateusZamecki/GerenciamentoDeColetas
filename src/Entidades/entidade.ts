export abstract class Entidade{

    Id: number;
    Nome: string;
    DataDeCriacao: Date;

    constructor(id: number, nome: string){
        this.Id = id;
        this.Nome = nome;
        this.DataDeCriacao = new Date();
    }

    public AlterarNome(nome: string): void{
        this.Nome = nome;
    }
}