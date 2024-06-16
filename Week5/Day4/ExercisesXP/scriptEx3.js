const red = document.getElementById("box");
const target = document.getElementById("target");


target.addEventListener('dragover', handleDragEnter);
target.addEventListener('dragenter', handleDragEnter);
target.addEventListener('dragleave', handleDragLeave);
target.addEventListener('drop', handleDrop);

function handleDragLeave(event){
    event.preventDefault();
    target.classList.remove('is-hovered');
}

function handleDragEnter(event){
    event.preventDefault();
    target.classList.add('is-hovered');
}

function handleDragEnter(event){
    target.classList.remove('is-hovered');
    target.append(red);
}

function handleDrop(){
    target.classList.remove('is-hovered');
    target.append(red);
}