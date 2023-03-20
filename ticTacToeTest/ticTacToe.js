const boxes = document.querySelectorAll('.box');
const message = document.querySelector('#message');
const resetBtn = document.querySelector('#reset');
const submitBtn = document.querySelector('#submit');
let turn = 'X';
var player1;
var player2;

submitBtn.addEventListener('click', () => {
    player1 = document.getElementById("firstPlayer").value;
    player2 = document.getElementById("secondPlayer").value;
    document.getElementById("firstPlayer").value='';
    document.getElementById("secondPlayer").value='';
    document.getElementById("message").innerHTML="It's " + player1 +"'s turn.";
  });

boxes.forEach(box => {
  box.addEventListener('click', () => {
    if (!box.textContent) {
      box.textContent = turn;
      checkWin();
      turn = turn === 'X' ? 'O' : 'X';

      if(turn=='X'){
        message.textContent = player1 +"'s turn.";
      }if(turn=='O'){
        message.textContent = player2 +"'s turn";
    }
    }
  });
});

function checkWin() {
  const winCombos = [
    [0, 1, 2],
    [3, 4, 5],
    [6, 7, 8],
    [0, 3, 6],
    [1, 4, 7],
    [2, 5, 8],
    [0, 4, 8],
    [2, 4, 6]
  ];

  winCombos.forEach(combo => {
    const [a, b, c] = combo;
    if (boxes[a].textContent && boxes[a].textContent === boxes[b].textContent && boxes[a].textContent === boxes[c].textContent) {
    //   message.textContent = `Congratulation ${turn} wins!`;
    if(turn=='X'){
      alert(player1 + " Wins");}
      else{
        alert(player2 +" Wins");
      }
      boxes.forEach(box => {
        box.textContent = '';
      });

      boxes.forEach(box => {
        box.removeEventListener('click', () => {});
      });
    } else if ([...boxes].every(box => box.textContent)) {
      alert("It's a tie!");
      boxes.forEach(box => {
        box.textContent = '';
      });
    }
  });
}



resetBtn.addEventListener('click', () => {
  boxes.forEach(box => {
    box.textContent = '';
  });
  message.textContent = '';
  turn = 'X';
  message.textContent = player1 +"'s turn.";

});


// *************Popup************

var close = document.getElementsByClassName("closebtn");
var i;

for (i = 0; i < close.length; i++) {
  close[i].onclick = function(){
    var div = this.parentElement;
    div.style.opacity = "0";
    setTimeout(function(){ div.style.display = "none"; }, 600);
  }
}