const container = document.getElementById('container');
container.id = 'main';
container.className = 'container';

for(let i = 0; i<16;i++){
    let row = document.createElement('div');
    row.className = 'row';
    row.id = "row"+i;
    
    for(let j = 0;j<16;j++){
        let box = document.createElement('div');    
        box.className = 'box'
        row.appendChild(box);
    }
        
    container.appendChild(row);
}

const row = document.getElementById('row1');
row.addEventListener('mouseover',function(e){
    e.target.id.className = 'box_hover';
    console.log(e.target.id)
});



