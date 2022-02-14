import { Entidade } from "../Entidade";

export abstract class Usuario extends Entidade{

    public Cpf: string;
    public Email:string;

    constructor(id:number, nome:string, cpf:string, email:string){
        super(id,nome);
        this.ValidarDadosObrigatorios(nome, cpf, email);
        this.Cpf = cpf;
        this.Email = email;
    }

    private ValidarDadosObrigatorios(nome:string, cpf:string, email:string): void{
        if(nome == null || nome == ''){
            throw new Error('Não é possível criar um usuário sem nome');
        }else if(email == null || email == ''){
            throw new Error('Não é possível criar um usuário sem email');
        }
        this.ValidarCpf(cpf);
    }

    private ValidarCpf(cpf:string):void {
        let soma;
        let resto;
        soma = 0;
        if (cpf == '00000000000' || cpf == '' || cpf == null) {
            throw new Error('Não é possivel criar um usuário com o CPF vazio');
        }
    
        for (let i =1; i<=9; i++) {
            soma = soma + parseInt(cpf.substring(i-1, i)) * (11 - i);
        }
        resto = (soma * 10) % 11;
    
        if ((resto == 10) || (resto == 11)) {  
            resto = 0;
        }
        if (resto != parseInt(cpf.substring(9, 10))) {  
            throw new Error('O CPF informado está inválido');
        }
    
        soma = 0;
        for (let i = 1; i <= 10; i++){ 
            soma = soma + parseInt(cpf.substring(i-1, i)) * (12 - i);
        }
        resto = (soma * 10) % 11;
    
        if ((resto == 10) || (resto == 11)) { 
            resto = 0;
        }

        if (resto != parseInt(cpf.substring(10, 11))) {   
            throw new Error('O CPF informado está inválido');
        }
    }

}