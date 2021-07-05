
window.onload = () => {
    const dino = document.getElementById("dino");
    const cactus = document.getElementById("cactus");
    
    function jump() {
      
        if (!dino.classList.contains("jump")) {
            dino.classList.add("jump");
            setTimeout(function () {
                dino.classList.remove("jump");
            }, 500);
        }
    }
    let isAlife = setInterval(function () {
      
        // get current dino Y position
        let dinoTop = parseInt(window.getComputedStyle(dino).getPropertyValue("top"));
        // get current cactus X position
        let cactusLeft = parseInt(window.getComputedStyle(cactus).getPropertyValue("left"));

        // delete collision
        if (cactusLeft < 50 && cactusLeft > 0 && dinoTop >= 140) {
            document.getElementById("GameOver").innerHTML = "Game Over!" ;
            document.getElementById("GameOver1").innerHTML = "Press the mouse to start again!" ;
            cactus.remove();
            
            //alert("Game Over");
        }
    }, 10);
    document.addEventListener("keydown", function () {
        jump();
    });
    document.addEventListener("mousedown" , function() {
    location.reload();
    });
  
}
