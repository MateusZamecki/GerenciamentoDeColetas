export abstract class Entidade{

    id: number;
    nome: string;
    data: Date;

    constructor(id: number, nome: string, data: Date){
        this.id = id;
        this.nome = nome;
        this.data = data;
    }

    public alterarNome(nome: string): void{
        this.nome = nome;
    }

    public alterarData(data: Date): void{
        this.data = data;
    }
}