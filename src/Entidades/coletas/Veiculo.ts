import { Entidade } from "../Entidade";
import { Funcionario } from "../Usuarios/Funcionario";

export class Veiculo extends Entidade{

    constructor(id:number,nome:string, cargaTotal: number, funcionario: Funcionario){
        super(id,nome);
        
    }

}