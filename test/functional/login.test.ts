describe('testes funcionais', () => {
  it('deve retornar um usuario', async () => {
    const { body, status } = await global.testRequest.get('/login');
    expect(status).toBe(200);
    expect(body).toEqual([
      {
        nome: 'Mateus',
        senha: '123',
        permissoes: true,
      },
    ]);
  });
});
