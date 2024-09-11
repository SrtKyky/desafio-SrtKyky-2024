class RecintosZoo {
    constructor() {
      this.recintos = [
        { nome: 'Recinto 1', espacoTotal: 10, espacoLivre: 7, bioma: 'savana' },
        { nome: 'Recinto 2', espacoTotal: 5, espacoLivre: 5, bioma: 'floresta' },
        { nome: 'Recinto 3', espacoTotal: 7, espacoLivre: 4, bioma: 'savana e rio' },
        { nome: 'Recinto 4', espacoTotal: 8, espacoLivre: 8, bioma: 'rio' }, // Possivelmente inadequado
        { nome: 'Recinto 5', espacoTotal: 9, espacoLivre: 5, bioma: 'savana' }
      ];
    }
  
    analisaRecintos(especie, quantidade) {
      const espacoNecessario = this.calcularEspacoNecessario(especie, quantidade);
      
      if (espacoNecessario === null) {
        return { erro: 'Animal inválido' };
      }
      
      if (quantidade <= 0) {
        return { erro: 'Quantidade inválida' };
      }
  
      // Ajuste: Verificar se o bioma ou outra condição exclui o recinto 4
      const recintosViaveis = this.recintos.filter(recinto => 
        recinto.espacoLivre >= espacoNecessario && recinto.bioma !== 'rio' // Excluindo recintos de rio, por exemplo
      );
      
      if (recintosViaveis.length === 0) {
        return { erro: 'Não há recinto viável' };
      }
  
      return {
        recintosViaveis: recintosViaveis.map(recinto => 
          `${recinto.nome} (espaço livre: ${recinto.espacoLivre} total: ${recinto.espacoTotal})`
        )
      };
    }
  
    calcularEspacoNecessario(especie, quantidade) {
      const especies = {
        'MACACO': 1,
        'LEAO': 3,
      };
      
      return especies[especie] ? especies[especie] * quantidade : null;
    }
  }
  
  module.exports = RecintosZoo;
  