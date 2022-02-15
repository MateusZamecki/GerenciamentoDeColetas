import { Coleta } from "../Coleta";
import { EtiquetaDeProduto } from "../EtiquetaDeProduto";

export interface ProdutoDto {
    Id: number;
    Etiqueta: EtiquetaDeProduto;
    DataDeCriacao: Date;
    PrecoDeVenda: number;
    PrecoDeCompra: number;
    Quantidade: number;
}