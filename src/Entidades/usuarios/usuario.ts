import { Coleta } from "../coletas/coleta";
import { UsuarioDto } from "./dtos/usuarioDto";
import { Entidade } from "../entidade";
import { TipoDePermissao } from "./tipoDePermissao";

export class Usuario extends Entidade{

    private senha: string;
    private cpf: string;
    private tipoDePermissao: TipoDePermissao;
    private coletas: Array<Coleta>;

    constructor(id:number, nome:string, data:Date, senha:string, cpf:string, tipoDePermissao:TipoDePermissao, coletas: Array<Coleta>){
        super(id,nome,data);
        this.validarDadosObrigatorios(id, nome, data, senha, cpf, tipoDePermissao);
        this.senha = senha;
        this.cpf = cpf;
        this.tipoDePermissao = tipoDePermissao;
        this.coletas = coletas;
    }

    private validarDadosObrigatorios(id:number, nome:string, data:Date, senha:string, cpf:string, tipoDePermissao:TipoDePermissao): void{
        var dados = [id,nome,data,senha,cpf,tipoDePermissao];
        dados.forEach(dado =>{
            if(dado == null){
                throw new Error('Não é possível criar um usuário sem as informações necessárias');
            }
        });

        this.validarCpf(cpf);
        
    }

    private validarCpf(cpf:string):void {
        var soma;
        var resto;
        soma = 0;
        if (cpf == '00000000000' || cpf == '') {
            throw new Error('CPF inválido');
        }
    
        for (var i =1; i<=9; i++) {
            soma = soma + parseInt(cpf.substring(i-1, i)) * (11 - i);
        }
        resto = (soma * 10) % 11;
    
        if ((resto == 10) || (resto == 11)) {  
            resto = 0;
        }
        if (resto != parseInt(cpf.substring(9, 10))) {  
            throw new Error('CPF inválido');
        }
    
        soma = 0;
        for (var i = 1; i <= 10; i++){ 
            soma = soma + parseInt(cpf.substring(i-1, i)) * (12 - i);
        }
        resto = (soma * 10) % 11;
    
        if ((resto == 10) || (resto == 11)) { 
            resto = 0;
        }

        if (resto != parseInt(cpf.substring(10, 11))) {   
            throw new Error('CPF inválido');
        }
    }

    public obterInformacoesDoUsuario(): UsuarioDto{
        const dto: UsuarioDto = {
            id: this.id,
            nome: this.nome,
            data: this.data,
            senha: this.senha,
            cpf: this.cpf,
            tipoDePermissao: this.tipoDePermissao,
            coletas: this.coletas
        };
        return dto;
    }

    public alterarPemissao(tipoDePermissao:TipoDePermissao): void{
        this.tipoDePermissao = tipoDePermissao;
    }
}