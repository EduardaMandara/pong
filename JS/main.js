//Variáveis da Bolinha
let xBolinha = 300;
let yBolinha = 200;
let diametro = 15; 
let raio = diametro / 2;
let minhaRaquete = 130;

//Velocidade da Bolinha
let velocidadeXBolinha = 6;
let velocidadeYBolinha = 6;

function setup() {
  createCanvas(600, 400);
}

function draw() {
  background(0);
  
  mostraBolinha(); //chama a função que criamos lá embaixo para mostrar a bolinha, ajudando a diminuir as coisas que estão dentro da nossa função <draw>;
  
  velocidadeBolinha(); //chama a função que criamos lá embaixo para velocidade da bolinha, ajudando a diminuir as coisas que estão dentro da nossa função <draw>;
  
  colisaoBolinha(); //chama a função que criamos lá embaixo para verificação da colisão da bolinha com as bordas, ajudando a diminuir as coisas que estão dentro da nossa função <draw>;
}

function mostraBolinha (){
  circle(xBolinha, yBolinha, diametro);
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