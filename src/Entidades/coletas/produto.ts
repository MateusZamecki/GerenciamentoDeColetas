export class Produto extends Entidade{

    valorDeVendaKg:number;
    custoDeCompraKg:number;
    quantidade:number;

    constructor(id:number, nome:string, data:Date, valorDeVendaKg:number, custoDeCompraKg:number, quantidade:number) {
        super(id,nome,data);
        this.valorDeVendaKg = valorDeVendaKg;
        this.custoDeCompraKg = custoDeCompraKg;
        this.quantidade = quantidade;
    }
    
}