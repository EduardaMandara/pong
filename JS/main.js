//Variáveis da Bolinha
let xBolinha = 300;
let yBolinha = 200;
let diametro = 15; 
let raio = diametro / 2;
let minhaRaquete = 130;

//Velocidade da Bolinha
let velocidadeXBolinha = 6;
let velocidadeYBolinha = 6;

//Variáveis da Raquete
let xRaquete = 5;
let yRaquete = 150; 
let comprimentoRaquete = 10;
let alturaRaquete = 90; 


function setup() {
  createCanvas(600, 400);
}

function draw() {
  background(0);
    
  mostraBolinha(); //chama a função que criamos lá embaixo para MOSTRAR A BOLINHA, ajudando a diminuir as coisas que estão dentro da nossa função <draw>;
  
  velocidadeBolinha(); //chama a função que criamos lá embaixo para VELOCIDADE DA BOLINHA;
  
  colisaoBolinha(); //chama a função que criamos lá embaixo para verificação da COLISÃO DA BOLINHA COM AS BORDAS;
  
  mostraRaquete (); //chama a função que criamos para MOSTRAR A RAQUETE;
}

function mostraBolinha (){
  circle(xBolinha, yBolinha, diametro);
}

function mostraRaquete (){
  rect (xRaquete, yRaquete, comprimentoRaquete, alturaRaquete)
}

function velocidadeBolinha () {
  xBolinha += velocidadeXBolinha;
  yBolinha += velocidadeYBolinha;
}

function colisaoBolinha () {
  if (xBolinha + raio > width || xBolinha - raio < 0) { 
    velocidadeXBolinha *= -1
  } //Se Bolinha for maior que a borda ou menor que 0, alterar a velocidade para o lado contrário.

  if (yBolinha + raio > height || yBolinha - raio < 0) {
    velocidadeYBolinha *= -1
  }
}