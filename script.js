let music = new Audio("music.mp3")
let turnaudio = new Audio('ting.mp3')
let gameoveraudio = new Audio('gameover.mp3')

let turn = "X"
let gameover = false
// Function to change the turnaudio

const ChangeTurn = () => {
    return turn === 'X' ? '0' : 'X'
   

}

// Function to check for win
const checkWin = () => {

    const wins = [
        [0, 1, 2, 5, 5, 0],
        [3, 4, 5, 5, 15, 0],
        [6, 7, 8, 5, 25, 0],
        [0, 3, 6, -5, 15, 90],
        [1, 4, 7, 5, 15, 90],
        [2, 5, 8, 15, 15, 90],
        [0, 4, 8, 5, 15, 45],
        [2, 4, 6, 5, 15, -45]
    ]
    let boxtext = document.getElementsByClassName('boxtext');
  wins.forEach(element => {
        if ((boxtext[element[0]].innerText === boxtext[element[1]].innerText) && (boxtext[element[1]].innerText === boxtext[element[2]].innerText) && (boxtext[element[0]].innerText !== '')) {

            document.querySelector('.info').innerText = boxtext[element[0]].innerText + '  won'
            gameover = true
            gameoveraudio.play()

            document.querySelector('.imgbox').getElementsByTagName('img')[0].style.width = '250px'
            document.querySelector('.line').style.width = '20vw'

           document.querySelector('.line').style.transform = `translate(${[element[3]]}vw, ${[element[4]]}vw) rotate(${[element[5]]}deg)`


        }
    })
}

// Game Logic    

music.play()
const allboxes = document.getElementsByClassName('box')
Array.from(allboxes).forEach(element => {

    let boxtext = element.querySelector('.boxtext')
    element.addEventListener('click', () => {
        if (boxtext.innerText === '') {
            boxtext.innerText = turn;
            turn = ChangeTurn();
            turnaudio.play();
            checkWin();

            if (gameover === false) {
                document.getElementsByClassName('info')[0].innerText = 'Turn for ' + turn;
            }
         }
    })
})

// reset button to reset everything

const reset = document.getElementById('reset');
reset.addEventListener('click', () => {

    let boxtexts = document.querySelectorAll('.boxtext');
    gameover = false;
    turn = 'X'
    document.querySelector('.imgbox').getElementsByTagName('img')[0].style.width = '0'
    document.querySelector('.line').style.width = '0'
    document.querySelector('.info').innerText = 'Turn for X'




    Array.from(boxtexts).forEach((element) => {
        element.innerText = ''

    })

})