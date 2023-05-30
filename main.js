// Aim Trainer
const canvas = document.getElementById("canvas");
const ctx = canvas.getContext("2d");
canvas.width = innerWidth;
canvas.height = innerHeight;

function animate() {
  ctx.fillStyle = "#FF0000";
  ctx.fillRect(0, 0, canvas.width, canvas.height);
  let randX = Math.random() * canvas.width;
  let randY = Math.random() * canvas.height;

  function SpawnTargets() {
    ctx.fillStyle = "blue";

    ctx.fillRect(randX, randY, 100, 100);
    console.log("drawn");
  }

  addEventListener("click", Clicked);
  function Clicked(event) {
    let x = event.clientX;
    let y = event.clientY;
    if (x > randX && x < randX + 100) {
      SpawnTargets();
    }
  }

  SpawnTargets();
}

animate();
