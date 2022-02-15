import { Entidade } from "../Entidade";
import { Funcionario } from "../Usuarios/Funcionario";
import { Produto } from "./Produto";
import { Cliente } from "../Cliente/Cliente";

export class Coleta extends Entidade{

    public Produtos: Array<Produto>;
    public Funcionario: Funcionario;
    public Cliente: Cliente;
    public TotalProdutos:number = 0;

    constructor(id:number, produtos: Array<Produto> = [], funcionario: Funcionario, cliente: Cliente) {
        super(id);
        this.ValidarDadosObrigatorios(funcionario,cliente);
        this.Produtos = produtos;
        this.Funcionario = funcionario;
        this.Cliente = cliente;
        this.NovoValorDeCompraDosProdutos();
    }

    private ValidarDadosObrigatorios(funcionario: Funcionario, cliente: Cliente):void{
        if(funcionario == null){
            throw new Error('Erro, funcionário não encontrado');
        }
        if(cliente == null){
            throw new Error('Erro, cliente não encontrado');
        }
    }

    public AdicionarProduto(produto: Produto): void{
        this.Produtos.push(produto);
        this.NovoValorDeCompraDosProdutos();
    }

    public RemoverProduto(idDoProduto: number): void{
        let index = this.Produtos.findIndex(produto => { return produto.Id == idDoProduto });
        this.Produtos.splice(index,1);
        this.NovoValorDeCompraDosProdutos();
    }

    public AlterarCliente(novoCliente: Cliente): void{
        this.ValidarDadosObrigatorios(this.Funcionario, novoCliente);
        this.Cliente = novoCliente;
    }

    public AlterarFuncionario(novoFuncionario: Funcionario): void{
        this.ValidarDadosObrigatorios(novoFuncionario, this.Cliente);
        this.Funcionario = novoFuncionario;
    }

    private NovoValorDeCompraDosProdutos(): void{
        this.TotalProdutos = this.Produtos.reduce((soma, produto) =>{ return soma + produto.ValorTotalDaCompra; }, 0);
    }

}