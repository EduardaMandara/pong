let xBolinha = 300;
let yBolinha = 200;
let diametro = 10; 
let minhaRaquete = 130;

let velocidadeXBolinha = 7;
let velocidadeYBolinha = 7;

function setup() {
  createCanvas(600, 400);
}

function draw() {
  background(0);
  circle(xBolinha, yBolinha, diametro);
  xBolinha += velocidadeXBolinha;
  yBolinha += velocidadeYBolinha;
}

if (xBolinha >= 150) {
    velocidadeXBolinha : 6
} 
