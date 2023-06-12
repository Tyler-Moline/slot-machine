startSlot.addEventListener("click", slotMachine);
addPlays.addEventListener("click", addToBalance);
let plays = 10;
let wins = 0;

function addToBalance() {
  let userAdd = Number(
    prompt(
      `You currently have ${plays} plays. how many would you like to add? (NUMBER ONLY)`
    )
  );
  plays += userAdd;
  console.clear();
}

function playTheSlot(min, max) {
  console.clear();
  let arr = [];
  for (var i = 0; i < 3; i++) {
    arr.push(Math.floor(Math.random() * max) + min);
  }
  if (arr[0] === arr[1] && arr[1] === arr[2]) {
    console.log(arr[0], arr[1], arr[2]);
    wins += 1;
    return "You win!";
  } else {
    console.log(`[${arr[0]} - ${arr[1]} - ${arr[2]}]`);
    return "You Lose!";
  }
}

function wait() {
  return new Promise((resolve, reject) => {
    resolve(playTheSlot(1, 3));
  });
}

function executeAsyncTask() {
  wait()
    .then((result) => {
      console.log(result);
      slotMachine();
    })
    .catch((error) => {
      console.error("error:", error);
    });
}

function slotMachine() {
  console.log(`Your play balance is ${plays} plays`);
  console.log(`You have won ${wins} games this time around`);
  let doYouWantToPlay = prompt("Want to play?");
  if (doYouWantToPlay === "y" && plays > 0) {
    plays -= 1;
    executeAsyncTask();
  } else {
    console.log("Thank you come again!");
  }
}
