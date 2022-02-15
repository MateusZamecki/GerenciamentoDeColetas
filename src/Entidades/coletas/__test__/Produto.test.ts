import { Cliente } from "@src/Entidades/Cliente/Cliente";
import { Funcionario } from "@src/Entidades/Usuarios/Funcionario";
import { Coleta } from "../Coleta";
import { EtiquetaDeProduto } from "../EtiquetaDeProduto";
import { Produto } from "../Produto";

describe('Teste do produto', () => {

    test('Deve criar um produto valido', () => {
        
        expect(() => {

            var id = 0;
            var precoDeVenda = 0.5;
            var precoDeCompra = 0.6;
            var quantidade = 10;
            var etiqueta = new EtiquetaDeProduto(1,'Osso');

            new Produto(id,etiqueta, precoDeVenda, precoDeCompra ,quantidade);

        }).not.toThrowError();

    });

    test('Nao deve criar um produto com um preco de compra invalido', () => {
        
        expect(() => {

            var id = 0;
            var precoDeVenda = 0;
            var precoDeCompra = -1;
            var quantidade = 0;
            var etiqueta = new EtiquetaDeProduto(1,'Osso');

            new Produto(id,etiqueta, precoDeVenda, precoDeCompra ,quantidade);

        }).toThrowError('Preço de compra inválido');

        expect(() => {

            var id = 0;
            var precoDeVenda = 0;
            var precoDeCompra = -10;
            var quantidade = 10;
            var etiqueta = new EtiquetaDeProduto(1,'Osso');

            new Produto(id,etiqueta, precoDeVenda, precoDeCompra ,quantidade);

        }).toThrowError('Preço de compra inválido');

    });

    test('Nao deve criar um produto com a quantidade invalida', () => {

        expect(() => {

            var id = 0;
            var precoDeVenda = 0;
            var precoDeCompra = 0.30;
            var quantidade = -10;
            var etiqueta = new EtiquetaDeProduto(1,'Osso');

            new Produto(id,etiqueta, precoDeVenda, precoDeCompra ,quantidade);

        }).toThrowError('Quantidade inválida');

    });

    test('Deve conter o possuir um total da compra valido', () => {

        var id = 0;
        var precoDeVenda = 0;
        var precoDeCompra = 0.30;
        var quantidade = 10;
        var etiqueta = new EtiquetaDeProduto(1,'Osso');

        var produto = new Produto(id,etiqueta, precoDeVenda, precoDeCompra ,quantidade);

        expect(produto.ValorTotalDaCompra).toEqual(3);

    });

    test('Deve alterar o preco de compra', () => {

        var id = 0;
        var precoDeVenda = 0;
        var precoDeCompra = 0.30;
        var quantidade = 10;
        var etiqueta = new EtiquetaDeProduto(1,'Osso');
        var produto = new Produto(id,etiqueta, precoDeVenda, precoDeCompra ,quantidade);
        
        produto.AlterarPrecoDeCompra(0.9);

        expect(produto.PrecoDeCompra).toEqual(0.9);

    });

    test('Deve alterar o preco de venda', () => {

        var id = 0;
        var precoDeVenda = 0.8;
        var precoDeCompra = 0.30;
        var quantidade = 10;
        var etiqueta = new EtiquetaDeProduto(1,'Osso');
        var produto = new Produto(id,etiqueta, precoDeVenda, precoDeCompra ,quantidade);
        
        produto.AlterarPrecoDeVenda(0.9);

        expect(produto.PrecoDeVenda).toEqual(0.9);

    });

    test('Deve alterar a quantidade', () => {

        var id = 0;
        var precoDeVenda = 0.8;
        var precoDeCompra = 0.30;
        var quantidade = 10;
        var etiqueta = new EtiquetaDeProduto(1,'Osso');
        var produto = new Produto(id,etiqueta, precoDeVenda, precoDeCompra ,quantidade);
        
        produto.AlterarQuantidade(5);

        expect(produto.Quantidade).toEqual(5);

    });

    test('Deve alterar a etiqueta', () => {

        var id = 0;
        var precoDeVenda = 0.8;
        var precoDeCompra = 0.30;
        var quantidade = 10;
        var etiqueta = new EtiquetaDeProduto(1,'Osso');
        var outraEtiqueta = new EtiquetaDeProduto(1,'Oleo');
        var produto = new Produto(id,etiqueta, precoDeVenda, precoDeCompra ,quantidade);
        
        produto.AlterarEtiqueta(outraEtiqueta);

        expect(produto.Etiqueta).toEqual(outraEtiqueta);

    });

});
