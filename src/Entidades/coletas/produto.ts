import { Entidade } from "../entidade";

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
    
}