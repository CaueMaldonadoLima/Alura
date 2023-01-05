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
let colidiu = false;

//variaveis da raquete openente
let xRaqueteOponente = 585;
let yRaqueteOponente = 150;
let velocidadeYOponente;

//placar
let meusPontos = 0;
let pontosOponente = 0;

function setup() {
  createCanvas(600,400);
}

function draw() {
  background(0);
  mostraBolinha();
  movimentaBolinha();
  verificaColisaoBorda();
  mostraRaquete(xRaquete, yRaquete);
  mostraRaquete(xRaqueteOponente, yRaqueteOponente);
  movimentaRaquete();
  verificaColisaoRaquete();
  colisaoRaqueteBiblioteca(xRaquete,yRaquete);
  colisaoRaqueteBiblioteca(xRaqueteOponente,yRaqueteOponente);
  movimentaRaqueteOponente();
  mostraPlacar();
  marcaPonto();
}

//funcoes da bolinha
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

//funcoes da raquete
function mostraRaquete(x, y){
  rect(x, y, comprimentoRaquete, alturaRaquete);
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

function colisaoRaqueteBiblioteca(x, y){
   colidiu = collideRectCircle(x, y, comprimentoRaquete, alturaRaquete, xBolinha, yBolinha, raioBolinha);
  if (colidiu){
    velocidadeXBolinha *= -1;
  }
}

function movimentaRaqueteOponente(){
  velocidadeYOponente = yBolinha - yRaqueteOponente - comprimentoRaquete / 2 - 30;
  yRaqueteOponente += velocidadeYOponente;
}

function mostraPlacar(){
  fill(255);
  text(meusPontos, 278, 26);
  text(pontosOponente, 321, 26);
}

function marcaPonto(){
  if (xBolinha > 590){
    meusPontos += 1;
  }
  if (xBolinha < 10){
    pontosOponente += 1;
  }
}
