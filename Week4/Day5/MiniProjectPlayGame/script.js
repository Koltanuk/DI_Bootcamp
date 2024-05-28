function playTheGame(){
    let wantToPlay = confirm('Do you want to play the game?');

    if(!wantToPlay){
        alert('No problem, Goodbye');
        return;
    }

    let userNumber;
    let computerNumber = Math.floor(Math.random() * 11);
    console.log(computerNumber);

    let flag = false;

    while(!flag){
        
        userNumber = prompt("Enter a number between 0 and 10:");
        if (isNaN(userNumber)|| userNumber=="" || userNumber==null) {
            alert("Sorry Not a number, Goodbye");
            break;
        } else {
            userNumber = Number(userNumber);
            if (userNumber < 0 || userNumber > 10) {
                alert("Sorry it’s not a good number, Goodbye");
                break;
            } else {
                flag = compareNumbers(userNumber, computerNumber);
            }
        }

    }
    
}

function compareNumbers(userNumber,computerNumber){
    if (userNumber == computerNumber) {
        alert("WINNER");
        return true;
    } else if (userNumber > computerNumber) {
        alert("Your number is bigger than the computer’s, guess again:");
        return false;
    } else {
        alert("Your number is smaller than the computer’s, guess again:");
        return false;
    }
}

