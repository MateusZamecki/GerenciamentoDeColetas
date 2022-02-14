import { Produto } from "../Produto";

describe('Teste do produto', () => {

    test('Deve criar um produto valido', () => {
        expect(() => {
            new Produto(0,'Produto', 0,0,0,1);
        }).not.toThrowError();
    });


});
