// Aim Trainer
const canvas = document.getElementById("canvas");
const ctx = canvas.getContext("2d");
canvas.width = innerWidth - 15;
canvas.height = innerHeight - 4;
let Score = 0;
let time = 0;
let timesClicked = 0;
let ClickedBox = 0;
let accuracy = 0;

ctx.fillStyle = "blue";
ctx.fillRect(0, 0, canvas.width, canvas.height);
ctx.font = "30px Tahoma";
ctx.fillStyle = "white";
ctx.fillText(`Press Space to Start`, canvas.width / 2 - 65, 70);

document.addEventListener("keydown", keydownHandler1);
function keydownHandler1(event) {
  console.log(event);
  if (event.code == "Space") {
    animate();
  }
}

function animate() {
  accuracy = 0;
  time = 0;
  Score = 0;
  timesClicked = 0;
  ClickedBox = 0;

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
    //Background
    ctx.fillStyle = "#FF0000";
    ctx.fillRect(0, 0, canvas.width, canvas.height);
    //Square
    ctx.fillStyle = "blue";
    ctx.fillRect(randX, randY, 35, 35);
    //Text
    ctx.font = "30px Tahoma";
    ctx.fillStyle = "white";
    ctx.fillText(`Score: ${Score}`, canvas.width / 2 - 65, 40);
    ctx.fillStyle = "white";
    ctx.fillText(`Time: ${20 - time}`, canvas.width / 2 - 65, 70);
  }

  myInterval = setInterval(Timer, 1000);

  function Timer() {
    accuracy = Math.round((ClickedBox / timesClicked) * 100);
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
      ctx.fillText(`Score: ${Score}`, canvas.width / 2 - 65, 130);
      if (accuracy > 0) {
        ctx.fillText(`${accuracy}% Accuracy`, canvas.width / 2 - 65, 100);
        accuracy = 0;
      } else {
        ctx.fillText(`0% Accuracy`, canvas.width / 2 - 65, 100);
        accuracy = 0;
      }
      randX = -10000000;
      randY = -1000000;
      clearInterval(myInterval);
    }
  }

  document.addEventListener("click", Clicked);
  function Clicked(event) {
    let x = event.clientX;
    let y = event.clientY;
    if (x > randX && x < randX + 100 && y > randY && y < randY + 100) {
      ctx.clearRect(0, 0, canvas.width, canvas.height);
      Score += 1;
      SpawnTargets();
      timesClicked += 1;
      ClickedBox += 1;
    } else {
      timesClicked += 1;
    }
    console.log(timesClicked);
    console.log(ClickedBox);
  }

  document.addEventListener("keydown", keydownHandler);

  function keydownHandler(event) {
    if (time >= 20) {
      if (event.code == "Space") {
        clearInterval(myInterval);
        animate();
      }
    }
  }
  SpawnTargets();
}
