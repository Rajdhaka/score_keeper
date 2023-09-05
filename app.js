const p1btn = document.querySelector('#p1btn');
const p2btn = document.querySelector('#p2btn');
const resetBtn = document.querySelector('#reset');
const winningScoreSelect = document.querySelector('#playto');
const p1Display = document.querySelector('#p1Display');
const p2Display = document.querySelector('#p2Display');


let p1Score = 0;
let isGameOver = false;
p1btn.addEventListener('click',function(){
    const winningScore = winningScoreSelect.value;
    if(!isGameOver){
        p1Score +=1;
        console.log(winningScore)
        if(p1Score === parseInt(winningScore)){
            isGameOver = true;
            p1Display.classList.add('has-text-success');
            p2Display.classList.add('has-text-danger');
            p1btn.disabled = true;
            p2btn.disabled = true;
        }
        p1Display.textContent = p1Score;
    }
   
})
let p2Score = 0;
p2btn.addEventListener('click',function(){
    const winningScore = winningScoreSelect.value;
    if(!isGameOver){
        p2Score +=1;
        if(p2Score === parseInt(winningScore)){
            isGameOver = true;
            p2Display.classList.add('has-text-success');
            p1Display.classList.add('has-text-danger');
            p1btn.disabled = true;
            p2btn.disabled = true;
        }
        p2Display.textContent = p2Score;
    }   
})
winningScoreSelect.addEventListener('change',function(){
    winningScore = parseInt(this.value);
    reset();
})


resetBtn.addEventListener('click',reset)

function reset(){
    isGameOver = false;
    p1Score = 0;
    p2Score = 0;
    p1Display.innerText= 0;
    p2Display.innerText = 0;
    p1Display.classList.remove('has-text-success','has-text-danger');
    p2Display.classList.remove('has-text-success','has-text-danger');
    p1btn.disabled = false;
    p2btn.disabled = false;
}