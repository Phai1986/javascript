let outPut = document.querySelector('h1');
let indexKey = 0;

function keyUp(event) {
    if(event.key === 'ArrowRight') {
        indexKey++;
    } else if(event.key === 'ArrowLeft') {
        indexKey--;
    }
    outPut.innerHTML = indexKey;
}

addEventListener('keyup',keyUp);