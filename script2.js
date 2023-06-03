
// Guess the  random Number  :

let inputValue = document.querySelector('input')
let update = document.getElementsByClassName('guess')
let count = document.getElementsByClassName('counts')
let highscore = document.getElementsByClassName('highscore')
let again = document.getElementsByClassName('again')
let randomNumber = parseInt(Math.random() * 100 + 1);
console.log(randomNumber);
let chances = 100;
function checkNumber(){
    console.log(inputValue.value);
    if(randomNumber > inputValue.value)
    {
      update[0].innerHTML = 'Your guess is low'
      chances--
      count[0].innerHTML = `💯 Chances:${chances}`
    }

    else if(randomNumber < inputValue.value)
    {
      update[0].innerHTML = 'Your guess is high'
      chances--
      count[0].innerHTML = `💯 Chances:${chances}` 
    }

    else
    {
        update[0].innerHTML = 'Your guess is Correct'
        chances--
        highscore[0].innerHTML = `🥇 Highscore:${chances}`
    }
}

function playagain(){
    document.body.style.backgroundColor = 'hotpink'
    document.getElementById('name').value = ""
    document.querySelector('#chance').innerHTML = '💯 Chances: 100' 
    document.querySelector('#score').innerHTML = '🥇 Highscore: 0'
    document.querySelector('#Start').innerHTML = 'Start Guessing..!'
}
