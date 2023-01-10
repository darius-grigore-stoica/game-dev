export default class Coin {
    constructor(gameWidth, gameHeight) {
        //position props
        this.gameWidth = gameWidth;
        this.gameHeight = gameHeight;
        this.width = 20;
        this.height = 20;
        this.x = Math.random() * (this.gameWidth - this.width);
        this.y = Math.random() * 300 - 400;
        //animation props
        this.speed = Math.random() * 0.6 + 1.2;
        this.angle = 0;
        this.angleSpeed = Math.random() * 0.2;
        this.curve = Math.random() * 2 - 1;
    }

    UpdateCoin() {
        this.y += this.speed;
        this.x += this.curve * Math.sin(this.angle)
        this.angle += this.angleSpeed;
        if(this.x < 0){
            this.x = 0
        }
        if(this.x > this.gameWidth - this.width){
            this.x = this.gameWidth - this.width;
        }
    }

    DrawCoin(context) {
        context.fillStyle = 'yellow';
        context.fillRect(this.x, this.y, this.width, this.height);
    }
}