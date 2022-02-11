import { Coleta } from "@src/Entidades/coletas/coleta";
import { Usuario } from "../usuario";
import { TipoDePermissao } from "../tipoDePermissao";

describe('teste de usuario', () => {

    test('deve retornar um usuario', () => {
      var data = new Date();
      var usuario = new Usuario(1,'Mateus',data,'123','12345678909',TipoDePermissao.Admin,[]);
      expect(usuario).toEqual(
        {
          id: 1,
          nome: 'Mateus',
          data: data,
          senha: '123',
          cpf: '12345678909',
          tipoDePermissao: TipoDePermissao.Admin,
          coletas: []
        });
    });

    test('nao deve ser possivel criar um usuario sem cpf', () => {
      var data = new Date();
      
      expect(() => {
        new Usuario(1,'Mateus',data,'123','',TipoDePermissao.Admin,[]);
      }).toThrowError('CPF inválido');
    });
});