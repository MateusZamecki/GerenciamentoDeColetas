import { Cliente } from "@src/Entidades/Cliente/Cliente";
import { Funcionario } from "@src/Entidades/Usuarios/Funcionario";
import { Coleta } from "../Coleta";
import { EtiquetaDeProduto } from "../EtiquetaDeProduto";
import { Produto } from "../Produto";

describe('Teste da coleta', () => {

    test('Deve criar uma coleta valida', () => {
        
        expect(() => {

            var funcionario = new Funcionario(1,'Funcionario','92006573039','email@teste.com',[],[]);
            var cliente = new Cliente(1,'Cliente');

            new Coleta(1,[],funcionario,cliente);

        }).not.toThrowError();

    });

    test('Deve adicionar um produto', () => {
        
        var funcionario = new Funcionario(1,'Funcionario','92006573039','email@teste.com',[],[]);
        var cliente = new Cliente(1,'Cliente');
        var etiqueta = new EtiquetaDeProduto(1,'Osso');
        var produto = new Produto(0,etiqueta, 0, 0.30 ,10);
        var outroProduto = new Produto(1,etiqueta, 0, 0.30 ,10);
        var coleta = new Coleta(1,[produto],funcionario,cliente);

        coleta.AdicionarProduto(outroProduto);

        expect(coleta.Produtos.length).toEqual(2);

    });

    test('Deve remover um produto', () => {
        
        var funcionario = new Funcionario(1,'Funcionario','92006573039','email@teste.com',[],[]);
        var cliente = new Cliente(1,'Cliente');
        var etiqueta = new EtiquetaDeProduto(1,'Osso');
        var produto = new Produto(0,etiqueta, 0, 0.30 ,10);
        var outroProduto = new Produto(1,etiqueta, 0, 0.30 ,10);
        var coleta = new Coleta(1,[produto,outroProduto],funcionario,cliente);

        coleta.RemoverProduto(produto.Id);

        expect(coleta.Produtos.length).toEqual(1);

    });

    test('Deve somar o valor dos produtos de uma coleta', () => {
        
        var funcionario = new Funcionario(1,'Funcionario','92006573039','email@teste.com',[],[]);
        var cliente = new Cliente(1,'Cliente');            
        var coleta = new Coleta(1,[],funcionario,cliente);
        var etiqueta = new EtiquetaDeProduto(1,'Osso');
        var produto = new Produto(0,etiqueta, 0, 0.30 ,10);

        coleta.AdicionarProduto(produto);

        expect(coleta.TotalProdutos).toEqual(3);

    });

    
    test('Deve subtrair o valor dos produtos de uma coleta ao remover um produto', () => {
        
        var funcionario = new Funcionario(1,'Funcionario','92006573039','email@teste.com',[],[]);
        var cliente = new Cliente(1,'Cliente');
        var etiqueta = new EtiquetaDeProduto(1,'Osso');
        var produto = new Produto(0,etiqueta, 0, 0.30 ,10);
        var outroProduto = new Produto(1,etiqueta, 0, 0.30 ,10);
        var coleta = new Coleta(1,[produto,outroProduto],funcionario,cliente);

        coleta.RemoverProduto(produto.Id);

        expect(coleta.TotalProdutos).toEqual(3);

    });

    test('Deve alterar o cliente', () => {
        
        var funcionario = new Funcionario(1,'Funcionario','92006573039','email@teste.com',[],[]);
        var cliente = new Cliente(1,'Cliente');
        var novoCliente = new Cliente(2,'Cliente novo');
        var etiqueta = new EtiquetaDeProduto(1,'Osso');
        var produto = new Produto(0,etiqueta, 0, 0.30 ,10);
        var coleta = new Coleta(1,[],funcionario,cliente);

        coleta.AlterarCliente(novoCliente);

        expect(coleta.Cliente).toEqual(novoCliente);

    });

    test('Deve alterar o funcionario', () => {
        
        var funcionario = new Funcionario(1,'Funcionario','92006573039','email@teste.com',[],[]);
        var novoFuncionario = new Funcionario(2,'Funcionario numero 2','92006573039','email@teste.com',[],[]);
        var cliente = new Cliente(1,'Cliente');
        var etiqueta = new EtiquetaDeProduto(1,'Osso');
        var produto = new Produto(0,etiqueta, 0, 0.30 ,10);
        var coleta = new Coleta(1,[],funcionario,cliente);

        coleta.AlterarFuncionario(novoFuncionario);

        expect(coleta.Funcionario).toEqual(novoFuncionario);

    });

});