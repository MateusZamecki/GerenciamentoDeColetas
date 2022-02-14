import { Entidade } from "../entidade";
import { ProdutoDto } from "./Dtos/ProdutoDto";

export class Produto extends Entidade{

    private ValorDeVendaKg:number;
    private CustoDeCompraKg:number;
    private Quantidade:number;
    private IdDoCliente:number;

    constructor(id:number, nome:string, valorDeVendaKg:number, custoDeCompraKg:number, quantidade:number, IdDoCliente:number) {
        super(id,nome);
        this.ValorDeVendaKg = valorDeVendaKg;
        this.CustoDeCompraKg = custoDeCompraKg;
        this.Quantidade = quantidade;
        this.IdDoCliente = IdDoCliente;
    }

    public ObterInformacoesDoProduto(): ProdutoDto{
        const dto: ProdutoDto = {
            Id: this.Id,
            Nome: this.Nome,
            DataDeCriacao: this.DataDeCriacao,
            ValorDeVendaKg: this.ValorDeVendaKg,
            CustoDeCompraKg: this.CustoDeCompraKg,
            Quantidade: this.Quantidade,
            IdDoCliente: this.IdDoCliente
        };
        return dto;
    }

    public AlterarValorDeVenda(novoValorDeVendaKg: number): void{
        this.ValorDeVendaKg = novoValorDeVendaKg;
    }

    public AlterarCustoDeCompra(novoCustoDeCompraKg: number): void{
        this.CustoDeCompraKg = novoCustoDeCompraKg;        
    }

    public AlterarQuantidade(novaQuantidade: number): void{
        this.Quantidade = novaQuantidade;
    }

}