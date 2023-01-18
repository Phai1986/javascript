const demo3 = document.createElement('div');
demo3.classList = 'demo3';

const h1 = document.createElement('h1');
h1.classList = 'text-child';
h1.setAttribute('data-text-before', 'Good Day!!!');
h1.setAttribute('data-text-after', 'Happy New Years 2023');
h1.innerHTML = h1.dataset.textBefore;

document.body.append(demo3);
demo3.append(h1);

function toggleText() {
    h1.classList.toggle('red');
    if(h1.innerHTML === h1.dataset.textBefore) {
        h1.innerHTML = h1.dataset.textAfter;
        document.title = h1.dataset.textAfter;
    }else {
        h1.innerHTML = h1.dataset.textBefore;
        document.title = h1.dataset.textBefore;
    }
}

addEventListener('click', toggleText);

