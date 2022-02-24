
function makeBoard(size){
    if(size>100) alert("Max size is 100")
    let board = document.querySelector('.board');
    //le kell takaritani a kijelzot, mielott megvaltoztatjuk a tabla meretet
    let squares = board.querySelectorAll('div');
    squares.forEach((div)=>div.remove())

    board.style.gridTemplateRows = `repeat(${size},1fr)`;
    board.style.gridTemplateColumns = `repeat(${size},1fr)`;

    
    for(let i = 0;i<size*size;i++){
        let square = document.createElement('div'); 
        square.style.backgroundColor = 'white'; 
        square.addEventListener('mouseover',colorSquare);
        board.insertAdjacentElement('beforeend',square);
    }
}


makeBoard(16);

function changeBoardSize(input){
    makeBoard(input);
}

function colorSquare(){
    this.style.backgroundColor = 'black'; 
}

function clearBoard(){
    //TODO
}
