export default class Player {
    constructor(gameWidth, gameHeight) {
        this.gameWidth = gameWidth;
        this.gameHeight = gameHeight
        this.spriteWidth= 273;
        this.spriteHeight = 282;
        this.width = this.spriteWidth * 0.3;
        this.height = this.spriteHeight * 0.3;
        this.image = new Image();
        this.image.src = 'skeleton.png';
        this.x = ((this.gameWidth - this.width) * 0.5);
        this.y = (this.gameHeight - this.height);
        this.speed = 0;

    }

    UpdatePlayer(input) {
        this.x += this.speed;
        if(input.keys.indexOf("ArrowLeft") > -1){
            this.speed = -7;
        } else if (input.keys.indexOf("ArrowRight") > -1){
            this.speed = 7;
        } else {
            this.speed = 0;
        }
        if (this.x < 0) 
            this.x = 0;
        if (this.x > this.gameWidth - this.width)
            this.x = this.gameWidth - this.width;
    }

    DrawPlayer(context){
        context.fillStyle = 'black';
        context.drawImage(this.image, 0, 0, this.spriteWidth, this.spriteHeight, this.x, this.y, this.width, this.height);
    }

}