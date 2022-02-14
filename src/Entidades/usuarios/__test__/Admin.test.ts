import { Coleta } from "@src/Entidades/Coletas/Coleta";
import { Usuario } from "../Usuario";
import { TipoDePermissao } from "../TipoDePermissao";
import { Admin } from "../Admin";

describe('Teste do admin', () => {

    test('Deve criar um admin valido', () => {
      
      expect(() => {

        new Admin(1,'Mateus','06760952162','email@.com');

      }).not.toThrowError();

    });

    test('Nao deve ser possivel criar um admin com cpf invalido', () => {

      expect(() => {

        new Admin(1,'Mateus','06760952162','email@.com');

      }).toThrowError('O CPF informado está inválido');

      expect(() => {

        new Admin(1,'Mateus','06760952162','email@.com');

      }).toThrowError('Não é possivel criar um usuário com o CPF vazio');

    });

    test('Nao deve ser possivel criar um admin sem as informacoes obrigatorias', () => {

      expect(() => {

        new Admin(1,'Mateus','06760952162','email@.com');

      }).toThrowError('Não é possível criar um usuário sem email');

    });

    test('Deve alterar o nome do funcionario', () => {

      var admin = new Admin(1,'Mateus','06760952162','email@.com');

      admin.AlterarNome('Mateus Zamecki');

      expect(admin.Nome).toEqual('Mateus Zamecki');
    });

});