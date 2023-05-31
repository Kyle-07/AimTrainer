// Aim Trainer
const canvas = document.getElementById("canvas");
const ctx = canvas.getContext("2d");
canvas.width = innerWidth;
canvas.height = innerHeight;
let Score = 0;
let time = 0;

function animate() {
  let randX = Math.random() * canvas.width + 100;
  let randY = Math.random() * canvas.height + 100;

  function SpawnTargets() {
    randX = Math.random() * canvas.width;
    randY = Math.random() * canvas.height;

    if (randX < 100) {
      randX += 100;
    } else {
      randX -= 100;
    }

    if (randY < 100) {
      randY += 100;
    } else {
      randY -= 100;
    }

    ctx.fillStyle = "#FF0000";
    ctx.fillRect(0, 0, canvas.width, canvas.height);

    ctx.fillStyle = "blue";
    ctx.fillRect(randX, randY, 100, 100);

    ctx.font = "30px Tahoma";
    ctx.fillStyle = "white";
    console.log(Score);
    ctx.fillText(`Score: ${Score}`, canvas.width / 2 - 65, 40);

    ctx.fillStyle = "white";
    ctx.fillText(`Time: ${20 - time}`, canvas.width / 2 - 65, 70);

    console.log("hello");
  }

  addEventListener("click", Clicked);
  function Clicked(event) {
    let x = event.clientX;
    let y = event.clientY;
    if (x > randX && x < randX + 100 && y > randY && y < randY + 100) {
      ctx.clearRect(0, 0, canvas.width, canvas.height);
      Score += 10;
      SpawnTargets();
    }
  }
  setInterval(Timer, 1000);
  function Timer() {
    if (time < 20) {
      time += 1;
      ctx.fillText(`Time: ${20 - time}`, canvas.width / 2 - 65, 70);
      ctx.fillStyle = "#FF0000";
      ctx.fillRect(canvas.width / 2 - 2 - 65, 45, 130, 30);
      ctx.fillStyle = "white";
      ctx.fillText(`Time: ${20 - time}`, canvas.width / 2 - 65, 70);
    } else {
      ctx.clearRect(0, 0, canvas.width, canvas.height);
      ctx.fillStyle = "blue";
      ctx.fillRect(0, 0, canvas.width, canvas.height);
      ctx.fillStyle = "white";
      ctx.fillText(`Press Space to Restart`, canvas.width / 2 - 65, 70);
      randX = -10000000;
      randY = -1000000;
    }
  }
  SpawnTargets();
}
animate();
