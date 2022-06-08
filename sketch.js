var estadoJogo = 0
var colisores;
var tile1,tile2, tile3,tile4,tile5,tile6,tile7,tile8,tile9,tile10,tile11,tile12,tile13,tile14;
var BGtile1;
var acid1, acid2,spike, serraImg, barrilVermelho, barrilVerde, portaTrancada, portaDestrancada, portaAberta, chaveImg;
var player, porta, chave, dog;
var linha, coluna;
var imagem;
var gatoParado, gatoMorto, gatoPulando, gatoAndando, dogFeliz;
var jogo = new Jogo();

function preload(){
  BGtile1 = loadImage("./assets/BGTile3.png")
  tile1 = loadImage("./assets/Tile1.png")
  tile2 = loadImage("./assets//Tile2.png")
  tile3 = loadImage("./assets/Tile3.png")
  acid1 = loadImage("assets/Acid (1).png")
  acid2 = loadImage("assets/Acid (2).png")
  spike = loadImage("assets/Spike.png")
  tile5 = loadImage("assets/Tile5.png")
  tile14 = loadImage("assets/Tile14 (2).png")
  fundo = loadImage("assets/fundo.png")
  serraImg = loadImage("assets/Saw.png")

  gatoParado = loadAnimation("assets/Idle1.png", "assets/Idle10.png")
  gatoMorto = loadImage("assets/Dead1.png")
  gatoAndando = loadAnimation("assets/Walk1.png","assets/Walk10.png")
  gatoPulando = loadAnimation("assets/Jump1.png", "assets/Jump8.png")

  portaTrancada = loadImage("assets/DoorLocked.png")
  portaDestrancada = loadImage("assets/DoorUnlocked.png")
  portaAberta = loadImage("assets/DoorOpen.png")

  barrilVerde = loadImage("assets/Barrel (2).png")
  chaveImg = loadImage("assets/chave.png")
  dogFeliz = loadAnimation("assets/dog1.png", "assets/dog8.png")
}

function setup() {
  createCanvas(windowWidth,windowHeight);
  imageMode(CENTER);
  rectMode(CENTER)
  
  

  chave = createSprite(0,400)
  chave.addImage(chaveImg)
  chave.scale = 0.2
 
  jogo.iniciar()
  

  porta = createSprite(width, height)
  porta.scale = 0.20
  porta.addImage("trancada", portaTrancada)
  porta.addImage("destrancada", portaDestrancada)
  porta.addImage("porta aberta", portaAberta)

  jogo.criarColisores(mapa1)
}

function draw() {
  background("#1E1F29")
  camera.x = player.sprite.x+600

  console.log("chave "+ player.pegouChave)

  switch(estadoJogo){
    case "fase1": jogo.primeiraFase();
    break;
    case "fase2": jogo.segundaFase();
    break;
    case "fase3": jogo.terceiraFase();
    break;
    case "game over": jogo.gameOver();
    break;
    default: null;
  }

  if(player.sprite.isTouching(jogo.colisoresMortais) && player.vivo == true){
    player.morrer()  
  }

  if(player.sprite.isTouching(chave)){
    player.pegouChave = true;
    porta.changeImage("destrancada")    
  }


  if(player.pegouChave){
    chave.y = player.sprite.y+15;
    chave.x = player.sprite.x + 25

    if(player.sprite.isTouching(porta)){
      porta.changeImage("porta aberta")
      dog.visible = true
    } 
  }
  player.sprite.displace(jogo.barris)

  for(var i = 0; i < jogo.barris.length; i++){
    jogo.barris[i]. velocityY += 0.5 
  }
  jogo.barris.collide(jogo.colisores)
  player.sprite.collide(jogo.colisores)
  
  

  drawSprites();
}

