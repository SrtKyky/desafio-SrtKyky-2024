const RecintosZoo = require('./recintos-zoo');

// Teste para verificar se encontra recintos viáveis para 2 macacos
test('Deve encontrar recintos viáveis para 2 macacos', () => {
  const zoo = new RecintosZoo();
  const resultado = zoo.analisaRecintos('MACACO', 2);
  
  expect(resultado.recintosViaveis).toEqual([
    'Recinto 1 (espaço livre: 7 total: 10)',
    'Recinto 2 (espaço livre: 5 total: 5)',
    'Recinto 3 (espaço livre: 4 total: 7)',
    'Recinto 5 (espaço livre: 5 total: 9)',
  ]);
});

// Teste para verificar o erro para espécie inválida
test('Deve retornar erro para espécie inválida', () => {
  const zoo = new RecintosZoo();
  const resultado = zoo.analisaRecintos('UNICORNIO', 1);
  expect(resultado.erro).toBe('Animal inválido');
});

// Teste para verificar o erro para quantidade inválida
test('Deve retornar erro para quantidade inválida', () => {
  const zoo = new RecintosZoo();
  const resultado = zoo.analisaRecintos('MACACO', 0);
  expect(resultado.erro).toBe('Quantidade inválida');
});

// Teste para verificar erro quando não há recinto viável
test('Deve retornar erro quando não há recinto viável', () => {
  const zoo = new RecintosZoo();
  const resultado = zoo.analisaRecintos('LEAO', 2);
  
  expect(resultado.erro).toBe('Não há recinto viável');
});
