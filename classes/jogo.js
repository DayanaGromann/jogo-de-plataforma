class Jogo{
    constructor(){
        this.colisores = null;
        this.serras = null;
        this.barris = null
        this.colisoresMortais = null;
    }

    criarColisores(mapa){
        var tamanho = height/8

        if(mapa){
            for(linha = 0; linha < mapa.length; linha++){
                for(coluna = 0; coluna < mapa[linha].length; coluna++){
                    switch(mapa[linha][coluna]){
                        
                        case 1: 
                            var acido = createSprite(coluna*tamanho, linha*tamanho, tamanho, 20)
                            acido.visible = false;
                            this.colisoresMortais.add(acido)
                            break;

                    
                        case 3: 
                            var spike = createSprite(coluna*tamanho, linha*tamanho, tamanho, 20)
                            spike.visible = false;
                            this.colisoresMortais.add(spike)
                            break;

                        case 4: 
                            var sprite = createSprite(coluna*tamanho, linha*tamanho-30, tamanho, 20)
                            this.colisores.add(sprite)
                            break;

                    
                        case 6: 
                           
                            var sprite = createSprite(coluna*tamanho, linha*tamanho-30, tamanho, 20)
                            this.colisores.add(sprite)
                            break;

                        case 7: 
                            
                            var sprite = createSprite(coluna*tamanho, linha*tamanho-30, tamanho, 20)
                            this.colisores.add(sprite)
                            break;

                        case 8: 
                            var sprite = createSprite(coluna*tamanho, linha*tamanho-30, tamanho, 10)
                            sprite.visible = false;
                            this.colisores.add(sprite)
                            break;
                        case 9: 
                            var serra = createSprite(coluna*tamanho, linha*tamanho-30)
                            serra.scale = 0.2;
                            serra.addImage(serraImg)
                            serra.setCollider("circle", 0,0,170)
                            serra.rotationSpeed = 5
                            this.colisoresMortais.add(serra)
                            

                            var caixa = createSprite(coluna*tamanho, linha*tamanho)
                            caixa.addImage(tile5)
                            caixa.scale = 0.3
                            this.serras.add(serra)
                            
                        break;

                        case 10: 
                            porta.x = coluna*tamanho
                            porta.y = linha*tamanho
                            
                            
                            dog = createSprite(coluna*tamanho, linha*tamanho)
                            dog.addAnimation("pulando", dogFeliz)
                            dog.scale = 0.2
                            dog.visible = false;
                        break

                        case 11: 
                            var barril = createSprite(coluna*tamanho, linha*tamanho+5)
                            barril.addImage("barril verde", barrilVerde)
                            barril.scale = 0.30
                            this.barris.add(barril)
                        default: break;
                         
                        
                    }
                }
            
            }

            this.colisores.setVisibleEach(false)
        }
    }

    desenharMapa(mapa){

        var tamanho = height/8

        if(mapa){
            for(linha = 0; linha < mapa.length; linha++){
                for(coluna = 0; coluna < mapa[linha].length; coluna++){
                    imagem = BGtile1
                switch(mapa[linha][coluna]){
                    case 0: 
                    break;

                    case 1: 
                        image(BGtile1,coluna*tamanho, linha*tamanho, tamanho,tamanho)
                        imagem = acid1;
                        break;

                    case 2: 
                        imagem = acid2;
                        break;
                    
                    case 3: 
                        image(BGtile1,coluna*tamanho, linha*tamanho, tamanho,tamanho)
                        imagem = spike;
                        break;

                    case 4: 
                        imagem = tile2;
                      
                        break;

                    case 5: 
                        imagem = tile5;
                        break;

                    case 6: 
                        imagem = tile1;
                        
                        break;

                    case 7: 
                        imagem = tile3;
                        
                        break;

                    case 8: 
                        image(BGtile1,coluna*tamanho, linha*tamanho, tamanho,tamanho)
                        
                        imagem = tile14;
                        break;

                    case 9: 
                        break;
                    ;
                }
                    
                image(imagem, coluna*tamanho, linha*tamanho, tamanho,tamanho)
                    
                }
            }
        }
    }


    iniciar(){
        estadoJogo = "fase1";

        this.colisores = new Group();
        this.serras = new Group();
        this.colisoresMortais = new Group()
       this.barris = new Group()
        player = new Player("gato",80,320);
    }

    gameOver(){
        console.log("gameOver")
        player.sprite.setVelocity(0,0)
    }

    primeiraFase(){
        this.desenharMapa(mapa1) //chamar no setup
        player.display()
        drawSprites()
    }

    segundaFase(){
        this.desenharMapa(mapa2)
    }

    terceiraFase(){
        this.desenharMapa(mapa3)
    }
}