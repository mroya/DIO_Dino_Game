const dino = document.getElementById("dino");
const cactus = document.getElementById("cactus");
const background = document.querySelector("background");

function jump() {
    if(dino.classList != "jump")
    dino.classList.add("jump");

    setTimeout(function () {
        dino.classList.remove("jump");
    }, 300);
}

let isAlive = setInterval(function (){
    // dino Y posição atual 
    let dinoTop = parseInt(window.getComputedStyle(dino).getPropertyValue("top"));
    
    // cactus X posição atual
    let cactusLeft = parseInt(window.getComputedStyle(cactus).getPropertyValue("left"));
    
    // detect collision
    if(cactusLeft < 50 && cactusLeft > 0 && dinoTop >= 140){
        alert("Game_Over!!");
    }
    console.log(dinoTop);
}, 10)

document.addEventListener("keydown", function (event){
    jump();
});
