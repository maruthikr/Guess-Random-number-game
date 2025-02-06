const minNum = 50;
const maxNum = 100;
const answer = Math.floor(Math.random() * (maxNum - minNum + 1)) + minNum;
console.log(answer);

let attempts = 0;
let guess;
let running = true;

while (running) {
  guess = window.prompt(`guess a number between ${minNum} - ${maxNum}`);
  guess =Number(guess);
  console.log(typeof guess, guess);
  if(isNaN(guess)) {
    window.alert("please enter a valid number")
  }else if(guess <minNum || guess>maxNum){
    window.alert("please enter a valid number")
  }else{
    attempts++;
    if(guess<answer){
        window.alert("too low! try again!")

    }else if(guess>answer){
        window.alert("too high! try again!")

    }else{
        window.alert(`correct! the answer was ${attempts} attempts`)
        running = false;

    }
  }
}
