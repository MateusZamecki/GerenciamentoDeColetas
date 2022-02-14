import { TipoDePermissao } from "./TipoDePermissao";
import { Usuario } from "./Usuario";

export class Admin extends Usuario{

    public TipoDePermissao: TipoDePermissao = TipoDePermissao.Admin;

    constructor(id:number, nome:string, cpf:string, email:string){
        super(id,nome,cpf,email);
    }

}