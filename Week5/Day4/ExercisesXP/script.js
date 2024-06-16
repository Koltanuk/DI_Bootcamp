
setTimeout(alertHello, 2000);

setTimeout(addParragraph, 2000);

const interval = setInterval(addParragraph,2000);

function alertHello(){
    alert('Hello World');
}


function addParragraph(){
    const p = document.createElement('p');
    p.textContent = 'Hello World';
    const cont = document.getElementById('container');
    if(cont.children.length <5){
    cont.appendChild(p);
    }
    else{
        clearParagraphInterval()
    }
}

const button = document.getElementById('clear');
button.addEventListener('click', clearParagraphInterval);

function clearParagraphInterval(){
    clearInterval(interval);
}