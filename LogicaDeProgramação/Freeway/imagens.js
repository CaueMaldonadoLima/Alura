//código dos sons e imagens
let imagemDaEstrada;
let imagemDoCarro;
let imagemDoCarro2;
let imagemDoCarro3;
let imagemDoAtor;

let somDaColisao;
let somDoPonto;
let somDaTrilha;

function preload(){
  imagemDaEstrada = loadImage("imagens/estrada.png");
  imagemDoCarro = loadImage("imagens/carro-1.png");
  imagemDoCarro2 = loadImage("imagens/carro-2.png");
  imagemDoCarro3 = loadImage("imagens/carro-3.png");
  imagemCarros = [imagemDoCarro, imagemDoCarro2, imagemDoCarro3, imagemDoCarro, imagemDoCarro2, imagemDoCarro3];
  imagemDoAtor = loadImage("imagens/ator-1.png");
  somDaColisao = loadSound("sons/colidiu.mp3");
  somDoPonto = loadSound("sons/pontos.wav");
  somDaTrilha = loadSound("sons/trilha.mp3");
}
