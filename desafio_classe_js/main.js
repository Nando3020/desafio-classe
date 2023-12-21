class heroi{
   constructor(tipo,ataque){
      
       this.tipo = tipo;
       this.ataque = ataque
   }

  attack(){
      console.log(`O ${this.tipo} atacou usando ${this.ataque}`);
  }
  
};


let guerreiro = new heroi("guerreiro","espada");
let mago = new heroi("mago","magia");
let monge = new heroi("monge","artes marcias");
let ninja = new heroi("ninja","shuriken");


console.log(guerreiro.attack());