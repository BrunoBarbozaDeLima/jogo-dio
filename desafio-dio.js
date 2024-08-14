// Classe Heroi que representa um herói de uma aventura
class Heroi {
    // Construtor da classe que inicializa as propriedades nome, idade e tipo
    constructor(nome, idade, tipo) {
      this.nome = nome;
      this.idade = idade;
      this.tipo = tipo;
    }
  
    // Método atacar que exibe a mensagem correspondente ao tipo do herói
    atacar() {
      let ataque;
  
      // Estrutura de decisão para determinar o ataque baseado no tipo do herói
      switch (this.tipo.toLowerCase()) {
        case 'mago':
          ataque = 'usou magia';
          break;
        case 'guerreiro':
          ataque = 'usou espada';
          break;
        case 'monge':
          ataque = 'usou artes marciais';
          break;
        case 'ninja':
          ataque = 'usou shuriken';
          break;
        default:
          ataque = 'fez um ataque desconhecido';
      }
  
      // Exibe a mensagem do ataque
      console.log(`O ${this.tipo} atacou usando ${ataque}`);
    }
  }
  
  // Exemplos de uso:
  
  // Criando diferentes heróis
  const mago = new Heroi('Gandalf', 1000, 'Mago');
  const guerreiro = new Heroi('Conan', 30, 'Guerreiro');
  const monge = new Heroi('Bruce Lee', 32, 'Monge');
  const ninja = new Heroi('Naruto', 20, 'Ninja');
  
  // Chamando o método atacar para cada herói
  mago.atacar();         // Saída: O Mago atacou usando magia
  guerreiro.atacar();    // Saída: O Guerreiro atacou usando espada
  monge.atacar();        // Saída: O Monge atacou usando artes marciais
  ninja.atacar();        // Saída: O Ninja atacou usando shuriken
  