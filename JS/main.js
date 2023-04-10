let xBolinha = 300;
let yBolinha = 200;
let diametro = 15; 
let raio = diametro / 2;
let minhaRaquete = 130;

let velocidadeXBolinha = 3;
let velocidadeYBolinha = 3;

function setup() {
  createCanvas(600, 400);
}

function draw() {
  background(0);
  circle(xBolinha, yBolinha, diametro);
  xBolinha += velocidadeXBolinha;
  yBolinha += velocidadeYBolinha;

  //Se Bolinha for maior que a borda ou menor que 0, alterar a velocidade para o lado contrário.
  if (xBolinha + raio > width || xBolinha - raio < 0) { 
    velocidadeXBolinha *= -1
  }

  if (yBolinha + raio > height || yBolinha - raio < 0) {
    velocidadeYBolinha *= -1
  }
}
