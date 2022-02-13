import { Coleta } from "../Coletas/Coleta";
import { UsuarioDto } from "./Dtos/UsuarioDto";
import { Entidade } from "../Entidade";
import { TipoDePermissao } from "./TipoDePermissao";

export class Usuario extends Entidade{

    private Senha: string;
    private Cpf: string;
    private TipoDePermissao: TipoDePermissao;
    private Coletas: Array<Coleta>;

    constructor(id:number, nome:string, data:Date, senha:string, cpf:string, tipoDePermissao:TipoDePermissao, coletas: Array<Coleta>){
        super(id,nome,data);
        this.ValidarDadosObrigatorios(id, nome, senha);
        this.ValidarCpf(cpf);
        this.Senha = senha;
        this.Cpf = cpf;
        this.TipoDePermissao = tipoDePermissao;
        this.Coletas = coletas;
    }

    private ValidarDadosObrigatorios(id:number, nome:string, senha:string): void{
        const dados = [id,nome,senha];
        dados.forEach(dado =>{
            if(dado == null || dado == 0){
                throw new Error('Não é possível criar um usuário sem as informações necessárias');
            }
        });  
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

    public ObterInformacoesDoUsuario(): UsuarioDto{
        const dto: UsuarioDto = {
            Id: this.Id,
            Nome: this.Nome,
            Data: this.Data,
            Senha: this.Senha,
            Cpf: this.Cpf,
            TipoDePermissao: this.TipoDePermissao,
            Coletas: this.Coletas
        };
        return dto;
    }

    public AlterarPemissao(tipoDePermissao:TipoDePermissao): void{
        this.TipoDePermissao = tipoDePermissao;
    }
}