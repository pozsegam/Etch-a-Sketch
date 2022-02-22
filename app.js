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
        box.id = row.id +'box' + j; 
        row.appendChild(box);

        box.addEventListener('mouseover',()=>{
            box.className = 'box_hover';
        });
    }
        
    container.appendChild(row);
}




