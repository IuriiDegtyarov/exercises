function startGame() {
  let secretNumber=Math.round(Math.random()*20);
  let number= prompt('Enter a number please', '')
  let counter =0;
  while(true){
    if(isNaN(number)||number ===null){
      number = prompt('Enter the number from 1 to 20, which, in your opinion, is secret', '');
    }
    else{
      ++counter;
        if(number < secretNumber){
          number = prompt('The entered number is less than the secret number. Enter a larger number.', '');
        }
        else if(number > secretNumber){
          number = prompt('The number entered is greater than the secret number. Please enter a smaller number.', '');
        }
        else {
          alert('Congratulations! You win! Number of attempts'+counter+' ! Secret number ' + secretNumber);
            break;
        }
     }
  }
}