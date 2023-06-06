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
let colidiu = false;


function setup() {
  createCanvas(600, 400);
}

//draw() que vai acionando outras funções;
function draw() {
  background(0);
    
  mostraBolinha(); //chama a função que criamos lá embaixo para MOSTRAR A BOLINHA, ajudando a diminuir as coisas que estão dentro da nossa função <draw>
  velocidadeBolinha(); //chama a função que criamos lá embaixo para VELOCIDADE DA BOLINHA;
  colisaoBolinha(); //chama a função que criamos lá embaixo para verificação da COLISÃO DA BOLINHA COM AS BORDAS;
  mostraRaquete (); //chama a função que criamos para MOSTRAR A RAQUETE;
  movimentaMinhaRaquete(); //movimenta nossa raquete para cima e para baixo;
  //verificaColisaoRaquete(); //colisão da bolinha com a raquete e com as bordas;
  colisaoMinhaRaqueteBiblioteca(); //verificação de colisão utilizando a biblioteca de outra pessoa;
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

function movimentaMinhaRaquete() {
    if (keyIsDown(UP_ARROW)) {
        yRaquete -= 10;
    }
  
    if (keyIsDown(DOWN_ARROW)) {
        yRaquete += 10;
    }
}

function verificaColisaoRaquete() {
    if (xBolinha - raio < xRaquete + raqueteComprimento
        && yBolinha - raio < yRaquete + raqueteAltura
        && yBolinha + raio > yRaquete) {
        velocidadeXBolinha *= -1;
    }
}

function colisaoMinhaRaqueteBiblioteca() {
    colidiu = collideRectCircle(xRaquete, yRaquete, raqueteComprimento, raqueteAltura, xBolinha, yBolinha, raio);
    if (colidiu) {
        velocidadeXBolinha *= -1;
    }
}