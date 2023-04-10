let xBolinha = 300;
let yBolinha = 200;
let diametro = 15; 
let minhaRaquete = 130;

let velocidadeXBolinha = 6;
let velocidadeYBolinha = 6;

function setup() {
  createCanvas(600, 400);
}

function draw() {
  background(0);
  circle(xBolinha, yBolinha, diametro);
  xBolinha += velocidadeXBolinha;
  yBolinha += velocidadeYBolinha;

  //Se o xBolinha for maior que a borda ou menor que 0, alterar a velocidade para o lado contrário.
  if (xBolinha > width || xBolinha < 0) { 
    velocidadeXBolinha *= -1
  }

  if (yBolinha > height || yBolinha< 0) {
    velocidadeYBolinha *= -1
  }
}

 
