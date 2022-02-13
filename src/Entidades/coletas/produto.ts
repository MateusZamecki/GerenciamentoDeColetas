import { Entidade } from "../entidade";
import { ProdutoDto } from "./Dtos/ProdutoDto";

export class Produto extends Entidade{

    private ValorDeVendaKg:number;
    private CustoDeCompraKg:number;
    private Quantidade:number;

    constructor(id:number, nome:string, data:Date, valorDeVendaKg:number, custoDeCompraKg:number, quantidade:number) {
        super(id,nome,data);
        this.ValorDeVendaKg = valorDeVendaKg;
        this.CustoDeCompraKg = custoDeCompraKg;
        this.Quantidade = quantidade;
    }

    public ObterInformacoesDoProduto(): ProdutoDto{
        const dto: ProdutoDto = {
            Id: this.Id,
            Nome: this.Nome,
            Data: this.Data,
            ValorDeVendaKg: this.ValorDeVendaKg,
            CustoDeCompraKg: this.CustoDeCompraKg,
            Quantidade: this.Quantidade
        };
        return dto;
    }

    public AlterarValorDeVenda(valorDeVendaKg: number): void{
        this.ValorDeVendaKg = valorDeVendaKg;        
    }

    public AlterarCustoDeCompra(custoDeCompraKg: number): void{
        this.CustoDeCompraKg = custoDeCompraKg;        
    }

    public AlterarQuantidade(quantidade: number): void{
        this.Quantidade = quantidade;
    }

}