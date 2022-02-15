import { Coleta } from "../Coletas/Coleta";
import { Veiculo } from "../Coletas/Veiculo";
import { TipoDePermissao } from "./TipoDePermissao";
import { Usuario } from "./Usuario";
import { FuncionarioDto } from "../Usuarios/Dtos/FuncionarioDto";

export class Funcionario extends Usuario{

    public TipoDePermissao: TipoDePermissao = TipoDePermissao.Funcionario;
    public Coletas : Array<Coleta>;
    public Veiculos : Array<Veiculo>;

    constructor(id:number, nome:string, cpf:string, email:string, coletas: Array<Coleta> ,veiculos: Array<Veiculo>){
        super(id,nome,cpf,email);
        this.Coletas = coletas;
        this.Veiculos = veiculos;
    }
    
    public AdicionarColeta(coleta:Coleta): void{
        this.Coletas.push(coleta);
    }

    public AdicionarVeiculo(veiculo:Veiculo): void{
        this.Veiculos.push(veiculo);
    }

    public RemoverColeta(idDaColeta: number){
        let index = this.Coletas.findIndex(coleta => {
            return coleta.Id == idDaColeta;
        })
        this.Coletas.splice(index,1);
    }

    public RemoverVeiculo(idDoVeiculo: number){
        let index = this.Veiculos.findIndex(veiculo => {
            return veiculo.Id == idDoVeiculo;
        })
        this.Veiculos.splice(index,1);
    }

    public ObterInformacoesDoFuncionario(): FuncionarioDto{
        const dto: FuncionarioDto = {
            Id: this.Id,
            Nome: this.Nome,
            DataDeCriacao: this.DataDeCriacao,
            Cpf: this.Cpf,
            Email: this.Email,
            Coletas: this.Coletas,
            Veiculos: this.Veiculos,
            TipoDePermissao: TipoDePermissao.Funcionario
        };
        return dto;
    }
}