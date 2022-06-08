class Player{
    constructor(personagem, x, y){
        this.vida = 3;
        this.vivo = true;
        this.pegouChave = false;
        this.sprite = createSprite(x,y);
        this.sprite.scale = 0.18
        this.sprite.setCollider("rectangle", 0, 0, 100,400)
        
        //animações
        this.sprite.addAnimation("parado", gatoParado);
        this.sprite.addAnimation("morto", gatoMorto);
        this.sprite.addAnimation("andando", gatoAndando);
        this.sprite.addAnimation("pulando", gatoPulando);
    }

    morrer(){
        this.vida -= 1;
        this.vivo = false;
        this.sprite.changeAnimation("morto")
        
        if(this.vida > 0){
            setTimeout(() => {
                player.sprite.x = 80
                player.sprite.y = 320
                this.vivo = true;
                this.sprite.changeAnimation("parado")
            }, 1000);
        }else{
            estadoJogo = "game over"
        }
    }

    display(){

        this.sprite.velocityY += 0.8 ;
        this.andar()
    }

    andar(){
        if(keyDown("d") || keyDown("right")){
            this.sprite.x += 3
            this.sprite.changeAnimation("andando")
            this.sprite.mirrorX(1)
        }
        else if(keyDown("a")|| keyDown("left")){
            this.sprite.x -= 3
            this.sprite.changeAnimation("andando")
            this.sprite.mirrorX(-1)
        }
        
        else if(keyDown("space")){
            this.sprite.velocityY = -12;
            this.sprite.changeAnimation("pulando")

        }else if(this.sprite.collide(jogo.colisores)){
            this.sprite.changeAnimation("parado")
        }
    }
}