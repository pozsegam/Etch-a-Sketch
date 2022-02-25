let color = 'black';
let click = false;

function makeBoard(size){
    if(size>100) alert("Max size is 100")
    let board = document.querySelector('.board');
    //le kell takaritani a kijelzot, mielott megvaltoztatjuk a tabla meretet
        board.style.gridTemplateRows = `repeat(${size},1fr)`;
    board.style.gridTemplateColumns = `repeat(${size},1fr)`;

    
    for(let i = 0;i<size*size;i++){
        let square = document.createElement('div'); 
        square.style.backgroundColor = 'white'; 
        square.addEventListener('mouseover',colorSquare);
        board.insertAdjacentElement('beforeend',square);
    }
}


makeBoard(64);

function changeBoardSize(input){
    resetBoard();
    makeBoard(input);
}

function colorSquare(){
    if(click){
        if(color ==='random'){
            this.style.backgroundColor = `hsl( ${Math.random() *360},100%, 50%)`
        }else{
            this.style.backgroundColor = color; 
        }
    }
}

function changeColor(choice){
    color = choice;
}

function resetBoard(){
    let board = document.querySelector('.board');
    let squares = board.querySelectorAll('div');
    squares.forEach((div)=>div.style.backgroundColor = 'white');
}


let board = document.querySelector('.board');
board.addEventListener('mousedown', ()=>{
        click = true;
})

board.addEventListener('mouseup', ()=>{
    click  = false;
})

