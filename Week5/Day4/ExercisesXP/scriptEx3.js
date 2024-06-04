const red = document.getElementById("box");
const yellow = document.getElementById("target");


yellow.addEventListener('dragover', handleDragEnter);
yellow.addEventListener('dragenter', handleDragEnter);
yellow.addEventListener('dragleave', handleDragLeave);
yellow.addEventListener('drop', handleDrop);

function handleDragLeave(event){
    event.preventDefault();
    yellow.classList.remove('is-hovered');
}

function handleDragEnter(event){
    event.preventDefault();
    yellow.classList.add('is-hovered');
}

function handleDragEnter(event){
    yellow.classList.remove('is-hovered');
    yellow.append(red);
}

function handleDrop(){
    yellow.classList.remove('is-hovered');
    yellow.append(red);
}