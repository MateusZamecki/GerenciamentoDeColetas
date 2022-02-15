export abstract class Entidade{

    Id: number;
    DataDeCriacao: Date;

    constructor(id: number){
        this.Id = id;
        this.DataDeCriacao = new Date();
    }
}