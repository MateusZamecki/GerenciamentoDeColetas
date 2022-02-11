import { Coleta } from "../coletas/Coleta";
import { UsuarioDto } from "./dtos/UsuarioDto";
import { Entidade } from "../Entidade";
import { TipoDePermissao } from "./TipoDePermissao";

export class Usuario extends Entidade{

    private Senha: string;
    private Cpf: string;
    private TipoDePermissao: TipoDePermissao;
    private Coletas: Array<Coleta>;

    constructor(id:number, nome:string, data:Date, senha:string, cpf:string, tipoDePermissao:TipoDePermissao, coletas: Array<Coleta>){
        super(id,nome,data);
        this.ValidarDadosObrigatorios(id, nome, data, senha, cpf, tipoDePermissao);
        this.Senha = senha;
        this.Cpf = cpf;
        this.TipoDePermissao = tipoDePermissao;
        this.Coletas = coletas;
    }

    private ValidarDadosObrigatorios(id:number, nome:string, data:Date, senha:string, cpf:string, tipoDePermissao:TipoDePermissao): void{
        var dados = [id,nome,data,senha,cpf,tipoDePermissao];
        dados.forEach(dado =>{
            if(dado == null){
                throw new Error('Não é possível criar um usuário sem as informações necessárias');
            }
        });

        this.ValidarCpf(cpf);        
    }

    private ValidarCpf(cpf:string):void {
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

    public ObterInformacoesDoUsuario(): UsuarioDto{
        const dto: UsuarioDto = {
            id: this.Id,
            nome: this.Nome,
            data: this.Data,
            senha: this.Senha,
            cpf: this.Cpf,
            tipoDePermissao: this.TipoDePermissao,
            coletas: this.Coletas
        };
        return dto;
    }

    public AlterarPemissao(tipoDePermissao:TipoDePermissao): void{
        this.TipoDePermissao = tipoDePermissao;
    }
}