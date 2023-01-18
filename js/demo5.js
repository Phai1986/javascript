const input = document.querySelector('.textBox');
const result = document.querySelector('#result');
const sent = document.querySelector('.sent');
let box = '';

function remove(event) {
    event.target.parentNode.remove();
}
function createBox(e) {
    let fontStyle = ['Prompt','Rubik Bubbles','Sevillana'];

    if (input.value) {
        const boxtext = document.createElement('div');
        boxtext.classList.add('boxtext');

        const close = document.createElement('button');
        close.classList.add('close');
        close.innerHTML = 'X';

        const h2 = document.createElement('h2');
        h2.innerHTML = input.value;
        h2.style.fontFamily = fontStyle[Math.floor(Math.random() *3)];

        boxtext.append(close, h2);
        result.append(boxtext);

        close.addEventListener('click',remove);
    }else {
        alert('Please input a valid');
        input.focus();
    }
}

sent.addEventListener('click', createBox);