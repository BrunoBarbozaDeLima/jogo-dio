# jogo-dio
 Desafio Classe de Heroi DIO

# Jogo de Aventura - Heróis e seus Ataques

Este projeto implementa uma classe genérica em JavaScript para representar um herói em um jogo de aventura. Cada herói possui um nome, idade e tipo (como guerreiro, mago, monge, ninja). Além disso, a classe inclui um método `atacar`, que exibe uma mensagem personalizada baseada no tipo do herói.

## Estrutura do Código

O código é composto por:

- **Classe `Heroi`**: Representa um herói no jogo.
  - Propriedades:
    - `nome`: O nome do herói.
    - `idade`: A idade do herói.
    - `tipo`: O tipo do herói, que pode ser "guerreiro", "mago", "monge" ou "ninja".
  - Método:
    - `atacar()`: Exibe uma mensagem de ataque específica para o tipo de herói.

### Código:

```javascript
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
