// Aim Trainer
const canvas = document.getElementById("canvas");
const ctx = canvas.getContext("2d");
canvas.width = innerWidth;
canvas.height = innerHeight;
let Score = 0

function animate() {

  let randX = Math.random() * canvas.width + 100;
  let randY = Math.random() * canvas.height + 100;
  function SpawnTargets() {
  randX = Math.random() * canvas.width  ;
  randY = Math.random() * canvas.height ;

  if (randX < 100){ randX += 100
  }
else { randX -= 100}

if (randY < 100){ randY += 100
}
else { randY -= 100}






    ctx.fillStyle = "#FF0000";
    ctx.fillRect(0, 0, canvas.width, canvas.height);

    ctx.fillStyle = "blue";

    ctx.fillRect(randX, randY, 100, 100);

    ctx.font = "30px Tahoma";
    ctx.fillStyle = "white";
    ctx.fillText(`Score: ${Score}`, canvas.width / 2 - 65, 40);
  }

  addEventListener("click", Clicked);
  function Clicked(event) {
    let x = event.clientX;
    let y = event.clientY;
    if ((x > randX && x < randX + 100) && (y > randY && y < randY + 100)) {
ctx.clearRect(0, 0, canvas.width, canvas.height)
      SpawnTargets();
      Score += 10
      console.log(Score)
    }
  }

  SpawnTargets();

}

animate();

