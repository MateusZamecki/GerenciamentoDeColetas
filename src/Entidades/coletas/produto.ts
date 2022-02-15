import { Entidade } from "../entidade";
import { ProdutoDto } from "./Dtos/ProdutoDto";
import { EtiquetaDeProduto } from "./EtiquetaDeProduto";

export class Produto extends Entidade{

    public PrecoDeVenda:number;
    public PrecoDeCompra:number;
    public Quantidade:number;
    public Etiqueta: EtiquetaDeProduto;
    public ValorTotalDaCompra: number;

    constructor(id:number, etiqueta: EtiquetaDeProduto, precoDeVenda:number = 0, precoDeCompra:number, quantidade:number) {
        super(id);
        this.ValidarDadosObrigatorios(etiqueta, precoDeCompra, quantidade, precoDeVenda);
        this.Quantidade = quantidade;
        this.Etiqueta = etiqueta;
        this.PrecoDeCompra = precoDeCompra;
        this.PrecoDeVenda = precoDeVenda;
        this.ValorTotalDaCompra = this.PrecoDeCompra * this.Quantidade;
    }

    private ValidarDadosObrigatorios(etiqueta: EtiquetaDeProduto, precoDeCompra:number, quantidade:number, precoDeVenda: number = Number.MAX_VALUE){
        if(etiqueta == null){
            throw new Error('Erro, nome do produto não encontrado');
        }
        if(precoDeCompra == null || precoDeCompra < 0){
            throw new Error('Preço de compra inválido');
        }
        if(quantidade == null || quantidade <= 0){
            throw new Error('Quantidade inválida');
        }
        if(precoDeVenda == null || (precoDeVenda < 0 && precoDeVenda != Number.MAX_VALUE)){
            throw new Error('Preço de venda inválido');
        }
    }

    public ObterInformacoesDoProduto(): ProdutoDto{
        const dto: ProdutoDto = {
            Id: this.Id,
            Etiqueta: this.Etiqueta,
            DataDeCriacao: this.DataDeCriacao,
            PrecoDeVenda: this.PrecoDeVenda,
            PrecoDeCompra: this.PrecoDeCompra,
            Quantidade: this.Quantidade
        };
        return dto;
    }

    public AlterarPrecoDeVenda(novoPrecoDeVenda: number): void{
        if(novoPrecoDeVenda == null || novoPrecoDeVenda < 0){
            throw new Error('Preço de venda inválido');
        }
        this.PrecoDeVenda = novoPrecoDeVenda;
    }

    public AlterarPrecoDeCompra(novoPrecoDeCompra: number): void{
        if(novoPrecoDeCompra == null || novoPrecoDeCompra < 0){
            throw new Error('Preço de compra inválido');
        }
        this.PrecoDeCompra = novoPrecoDeCompra;
    }

    public AlterarQuantidade(novaQuantidade: number): void{
        if(novaQuantidade == null || novaQuantidade < 0){
            throw new Error('Quantidade inválida');
        }
        this.Quantidade = novaQuantidade;
    }

    public AlterarEtiqueta(etiqueta: EtiquetaDeProduto): void{
        this.Etiqueta = etiqueta;
    }

}