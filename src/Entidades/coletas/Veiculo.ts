import { Entidade } from "../Entidade";
import { Funcionario } from "../Usuarios/Funcionario";

export class Veiculo extends Entidade{

    public CargaTotalKg: number;
    public Funcionario: Funcionario;
    public Nome: string;

    constructor(id:number,nome:string, cargaTotalKg: number, funcionario: Funcionario){
        super(id);       
        this.ValidarDadosObrigatorios(cargaTotalKg); 
        this.Nome = nome;
        this.CargaTotalKg = cargaTotalKg;
        this.Funcionario = funcionario;
    }

    private ValidarDadosObrigatorios(cargaTotalKg: number):void{
        if(cargaTotalKg == null || cargaTotalKg == 0){
            throw new Error('Não é possível cadastrar um veículo sem uma carga total');
        }
    }

    public AdicionarFuncionario(funcionario: Funcionario): void{
        this.Funcionario = funcionario;
    }

}