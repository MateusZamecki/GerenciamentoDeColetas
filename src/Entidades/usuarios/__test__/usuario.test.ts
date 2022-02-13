import { Coleta } from "@src/Entidades/Coletas/Coleta";
import { Usuario } from "../Usuario";
import { TipoDePermissao } from "../TipoDePermissao";

describe('Teste de usuario', () => {

    test('Deve criar um usuario', () => {

      const data = new Date();
      const usuario = new Usuario(1,'Mateus',data,'123','12345678909',TipoDePermissao.Admin,[]);

      expect(usuario).toEqual(
        {
          Id: 1,
          Nome: 'Mateus',
          Data: data,
          Senha: '123',
          Cpf: '12345678909',
          TipoDePermissao: TipoDePermissao.Admin,
          Coletas: []
        });

    });

    test('Nao deve ser possivel criar um usuario sem cpf ou igual a zero', () => {

      const data = new Date();

      expect(() => {

        new Usuario(1,'Mateus',data,'123','',TipoDePermissao.Admin,[]);

      }).toThrowError('Não é possivel criar um usuário com o CPF vazio');
      
    });

    test('Nao deve ser possivel criar um usuario com cpf invalido', () => {

      const data = new Date();

      expect(() => {

        new Usuario(1,'Mateus',data,'123','12345678908',TipoDePermissao.Admin,[]);

      }).toThrowError('O CPF informado está inválido');

    });

    test('Nao deve ser possivel criar um usuario sem as informacoes obrigatorias', () => {

      const data = new Date();
      const nome = '';
      const senha = '';
      const id = 0;

      expect(() => {

        new Usuario(1,nome,data,'123','12345678909',TipoDePermissao.Admin,[]);

      }).toThrowError('Não é possível criar um usuário sem as informações necessárias');

      expect(() => {

        new Usuario(1,'Mateus',data,senha,'12345678909',TipoDePermissao.Admin,[]);

      }).toThrowError('Não é possível criar um usuário sem as informações necessárias');

      expect(() => {

        new Usuario(id,'Mateus',data,'123','12345678909',TipoDePermissao.Admin,[]);

      }).toThrowError('Não é possível criar um usuário sem as informações necessárias');

    });

    test('Deve alterar o tipo da permissao', () => {

      const data = new Date();
      var usuario = new Usuario(1,'Mateus',data,'123','12345678909',TipoDePermissao.Admin,[]);
      let tipoDePermissao = TipoDePermissao.Funcionario

      usuario.AlterarPemissao(tipoDePermissao);

      expect(usuario).toEqual(
        {
          Id: 1,
          Nome: 'Mateus',
          Data: data,
          Senha: '123',
          Cpf: '12345678909',
          TipoDePermissao: TipoDePermissao.Funcionario,
          Coletas: []
        });

    });

    test('Deve alterar o nome do usuario', () => {

      const data = new Date();
      var usuario = new Usuario(1,'Mateus',data,'123','12345678909',TipoDePermissao.Admin,[]);

      usuario.AlterarNome('Mateus Zamecki');

      expect(usuario).toEqual(
        {
          Id: 1,
          Nome: 'Mateus Zamecki',
          Data: data,
          Senha: '123',
          Cpf: '12345678909',
          TipoDePermissao: TipoDePermissao.Admin,
          Coletas: []
        });

    });

    test('Deve alterar a data de criação do usuario', () => {

      const data = new Date();
      var usuario = new Usuario(1,'Mateus',data,'123','12345678909',TipoDePermissao.Admin,[]);
      const outraData = new Date(1990, 3, 28);

      usuario.AlterarData(outraData);

      expect(usuario).toEqual(
        {
          Id: 1,
          Nome: 'Mateus',
          Data: outraData,
          Senha: '123',
          Cpf: '12345678909',
          TipoDePermissao: TipoDePermissao.Admin,
          Coletas: []
        });

    });

    test('Deve alterar a data de criação do usuario', () => {

      const data = new Date();
      var usuario = new Usuario(1,'Mateus',data,'123','12345678909',TipoDePermissao.Admin,[]);
      const outraData = new Date(1990, 3, 28);

      var informacoesDoUsuario = usuario.ObterInformacoesDoUsuario();

      expect(usuario).toEqual(informacoesDoUsuario);

    });

});