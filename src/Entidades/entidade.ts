export abstract class Entidade{

    Id: number;
    Nome: string;
    Data: Date;

    constructor(id: number, nome: string, data: Date){
        this.Id = id;
        this.Nome = nome;
        this.Data = data;
    }

    public AlterarNome(nome: string): void{
        this.Nome = nome;
    }

    public AlterarData(data: Date): void{
        this.Data = data;
    }
}