import { Entidade } from "../Entidade";

export class Cliente extends Entidade{

    constructor(id:number,nome:string){
        super(id,nome)
    }
}