const container = document.getElementById('container');
container.id = 'main';
container.className = 'container';


const input = 16;
const playAgain = document.getElementById('playAgain');
playAgain.addEventListener('click', ()=>{
        box.className= 'box';
        input = prompt("Grid Size?");
});



function makeGrid(num){ 
for(let i = 0; i<num;i++){
    let row = document.createElement('div');
    row.className = 'row';
    row.id = "row"+i;
    
    for(let j = 0;j<num;j++){
        const box = document.createElement('div');    
        box.className = 'box'
        box.id = row.id +'box' + j; 
        row.appendChild(box);

        box.addEventListener('mouseover',function(e){
            if(e.buttons ==1){
                e.target.className = 'box_hover';
            }
        });
        
        


    }
        
    container.appendChild(row);
}


}

makeGrid(30)



