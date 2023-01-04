//variaveis da bolinha
let diametroBolinha = 20;
let raioBolinha = diametroBolinha / 2;
let xBolinha = 300;
let yBolinha = 200;

//velocidade da bolinha
let velocidadeXBolinha = 6;
let velocidadeYBolinha = 6;

//variaveis da raquete
let comprimentoRaquete = 10;
let alturaRaquete = 90;
let xRaquete = 5;
let yRaquete = 150;

function setup() {
  createCanvas(600,400);
}

function draw() {
  background(0);
  mostraBolinha();
  movimentaBolinha();
  verificaColisaoBorda();
  mostraRaquete();
  movimentaRaquete();
  verificaColisaoRaquete();
}

function mostraBolinha(){
  circle(xBolinha, yBolinha, diametroBolinha);
}

function movimentaBolinha(){
  xBolinha += velocidadeXBolinha;
  yBolinha += velocidadeYBolinha;
}

function verificaColisaoBorda(){
  if (xBolinha + raioBolinha > width || xBolinha - raioBolinha < 0){
    velocidadeXBolinha *= -1;
  }
  if (yBolinha + raioBolinha >  height || yBolinha - raioBolinha < 0){
    velocidadeYBolinha *= -1;
  }
}

function mostraRaquete(){
  rect(xRaquete, yRaquete, comprimentoRaquete, alturaRaquete);
}

function movimentaRaquete(){
  if(keyIsDown(UP_ARROW)){
    yRaquete -= 10;
  }
  if(keyIsDown(DOWN_ARROW)){
    yRaquete += 10;
  }
}

function verificaColisaoRaquete(){
  if(xBolinha - raioBolinha < xRaquete + comprimentoRaquete &&  yBolinha - raioBolinha < yRaquete + alturaRaquete && yBolinha + raioBolinha > yRaquete ){
    velocidadeXBolinha *= -1;
  }
}
