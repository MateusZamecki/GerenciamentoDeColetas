import { Coleta } from "@src/Entidades/Coletas/Coleta";
import { Usuario } from "../Usuario";
import { TipoDePermissao } from "../TipoDePermissao";
import { Funcionario } from "../Funcionario";
import { Cliente } from "@src/Entidades/Cliente/Cliente";
import { Veiculo } from "@src/Entidades/Coletas/Veiculo";

describe('Teste do funcionario', () => {

    test('Deve adicionar uma coleta',() => {

      var funcionario = new Funcionario(1, 'Mateus','92006573039','email@teste.com',[],[]);
      var cliente = new Cliente(1,'Cliente');
      var coleta = new Coleta(1,[],funcionario,cliente);

      funcionario.AdicionarColeta(coleta);

      expect(funcionario.Coletas).not.toBeNull();
      expect(funcionario.Coletas).toContain(coleta);

    });

    test('Deve remover uma coleta',() => {

      var funcionario = new Funcionario(1, 'Mateus','92006573039','email@teste.com',[],[]);
      var cliente = new Cliente(1,'Cliente');
      var coleta = new Coleta(1,[],funcionario,cliente);
      funcionario.AdicionarColeta(coleta);

      funcionario.RemoverColeta(coleta.Id);

      expect(funcionario.Coletas).not.toContain(coleta);

    });

    test('Deve adicionar um veiculo',() => {

      var funcionario = new Funcionario(1, 'Mateus','92006573039','email@teste.com',[],[]);
      var veiculo = new Veiculo(1,'Caminhao', 1000,funcionario);

      funcionario.AdicionarVeiculo(veiculo);

      expect(funcionario.Veiculos).not.toBeNull();
      expect(funcionario.Veiculos).toContain(veiculo);

    });

    test('Deve remover um veiculo',() => {

      var funcionario = new Funcionario(1, 'Mateus','92006573039','email@teste.com',[],[]);
      var veiculo = new Veiculo(1,'Caminhao', 1000,funcionario);
      funcionario.AdicionarVeiculo(veiculo);

      funcionario.RemoverVeiculo(veiculo.Id);

      expect(funcionario.Veiculos).not.toContain(veiculo);

    });

});