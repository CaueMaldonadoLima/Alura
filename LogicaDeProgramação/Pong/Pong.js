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
let chanceDeErrar = 0;

//placar
let meusPontos = 0;
let pontosOponente = 0;

//sons do jogo
let raquetada;
let ponto;

function preload(){
  raquetada = loadSound("raquetada.mp3");
  ponto = loadSound("ponto.mp3");
}

function setup() {
  createCanvas(600,400);
}

function draw() {
  background(28,28,28);
  mostraBolinha();
  movimentaBolinha();
  verificaColisaoBorda();
  fill(color(65,105,225));
  mostraRaquete(xRaquete, yRaquete);
  fill(color(178,34,34));
  mostraRaquete(xRaqueteOponente, yRaqueteOponente);
  movimentaRaquetePlayer1();
  verificaColisaoRaquete();
  colisaoRaqueteBiblioteca(xRaquete,yRaquete);
  colisaoRaqueteBiblioteca(xRaqueteOponente,yRaqueteOponente);
  movimentaRaqueteOponente(); //contra o PC
  //movimentaRaquetePlayer2(); //multiplayer
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
function mostraRaquete(x, y, z){
  rect(x, y, comprimentoRaquete, alturaRaquete);
}

function movimentaRaquetePlayer1(){
  if(keyIsDown(87)){
    yRaquete -= 10;
  }
  if(keyIsDown(83)){
    yRaquete += 10;
  }
}

function verificaColisaoRaquete(){
  if(xBolinha - raioBolinha < xRaquete + comprimentoRaquete &&  yBolinha - raioBolinha < yRaquete + alturaRaquete && yBolinha + raioBolinha > yRaquete ){
    velocidadeXBolinha *= -1;
    raquetada.play();
  }
}

function colisaoRaqueteBiblioteca(x, y){
   colidiu = collideRectCircle(x, y, comprimentoRaquete, alturaRaquete, xBolinha, yBolinha, raioBolinha);
  if (colidiu){
    velocidadeXBolinha *= -1;
    raquetada.play();
  }
}

function movimentaRaqueteOponente(){
  velocidadeYOponente = yBolinha - yRaqueteOponente - comprimentoRaquete / 2 - 30;
  yRaqueteOponente += velocidadeYOponente + chanceDeErrar;
  calculaChanceDeErrar()
}

function movimentaRaquetePlayer2(){
  if(keyIsDown(UP_ARROW)){
    yRaqueteOponente -= 10;
  }
  if(keyIsDown(DOWN_ARROW)){
    yRaqueteOponente += 10;
  }
}

function mostraPlacar(){
  stroke(255);
  textAlign(CENTER);
  textSize(16);
  fill(color(65,105,225))
  rect(150, 10, 40, 20);
  fill(255);
  text(meusPontos, 170, 26);
  fill(color(178,34,34));
  rect(450, 10, 40, 20)
  fill(255);
  text(pontosOponente, 470, 26);
}

function marcaPonto(){
  if (xBolinha > 590){
    meusPontos += 1;
    ponto.play();
  }
  if (xBolinha < 10){
    pontosOponente += 1;
    ponto.play();
  }
}

function calculaChanceDeErrar() {
  if (pontosOponente >= meusPontos) {
    chanceDeErrar += 1;
    if (chanceDeErrar >= 39){
    chanceDeErrar = 40;
    }
  } else {
    chanceDeErrar -= 1;
    if (chanceDeErrar <= 35){
    chanceDeErrar = 35;
    }
  }
}


function bolinhaNaoFicaPresa(){
    if (xBolinha - raio < 0){
    xBolinha = 23;
    }
}
