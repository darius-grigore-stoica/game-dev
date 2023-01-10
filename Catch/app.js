import Player from "./Player.js";
import Input from "./Input.js";
import Coin from "./Coin.js";

window.addEventListener('load', () => {
    //game setup
    const canvas = document.getElementById('my-canvas');
    const ctx = canvas.getContext('2d');
    canvas.width = 400;
    canvas.height = 600;

    //coins animation setup
    let coins = [];
    coins.push(new Coin(canvas.width, canvas.height));

    //initializing game entities
    const player = new Player(canvas.width, canvas.height);
    const input = new Input();
    
    //game instance
    let player_score = 0;
    let gameOver = false;
    let lastTime = 0;
    let timeToNewRect = 0;
    const rectInterval = 2000;

    function Animate(timestamp){
        let deltaTime = timestamp - lastTime;
        lastTime = timestamp;
        timeToNewRect += deltaTime;
        const onGameScoreNumber = document.getElementById("game-on-score-content");
        if (timeToNewRect > rectInterval){
            coins.push(new Coin(canvas.width, canvas.height));
            timeToNewRect = 0;
        }
        if (!gameOver){
            ctx.clearRect(0, 0, canvas.width, canvas.height);
            coins.forEach(coin => {
                coin.DrawCoin(ctx);
                coin.UpdateCoin();
                if(coin.x >= player.x && coin.y >= player.y)
                    if(coin.x + coin.width <= player.x + player.width){
                        player_score++;
                        onGameScoreNumber.textContent = player_score;
                        coins = coins.filter(object => object.x != coin.x);
                    }
                if(coin.y > canvas.height){
                    gameOver = true;
                }
            });
            player.DrawPlayer(ctx);
            player.UpdatePlayer(input);
            requestAnimationFrame(Animate);
        }
        else {
            const score = document.getElementById("score-content");
            const gameOverText = document.querySelector(".game-over");
            const onGameScore = document.querySelector(".game-on-score");
            onGameScore.style.display = 'none';
            score.textContent = player_score;
            gameOverText.style.display = 'block';
            canvas.style.display = 'none';
        }
    }
    Animate(0);
})