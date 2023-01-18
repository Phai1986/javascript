const menuMain = document.querySelector('#menus');
const menus = document.querySelectorAll('#menus li');
const content = document.createElement('h1');
content.classList.add('content-demo4');
content.innerHTML = menus[0].innerHTML;
menuMain.after(content);

function activeMenus(e) {
    menus.forEach((menu) => {
        menu.classList.remove('active');
    });
    e.target.classList.add('active');
    content.innerHTML = e.target.innerHTML;

    let fontStyle = ['Prompt','Rubik Bubbles','Sevillana'];
    let randomColorBG = '#'+Math.floor(Math.random() * 0xFFFFFF).toString(16).padStart(6, 0).toUpperCase();
    let randomColorText = '#'+Math.floor(Math.random() * 0xFFFFFF).toString(16).padStart(6, 0).toUpperCase();

    document.body.style.backgroundColor = randomColorBG;
    content.style.fontFamily = fontStyle[Math.floor(Math.random()*3)]; 
    content.style.color = randomColorText;
    document.title = e.target.innerHTML;
}
menus.forEach((menu) => {
    menu.addEventListener('click', activeMenus);
});



const btToggle = document.querySelector('.btToggle');

function toggleAnimate() {
    content.classList.toggle('animate');
}
btToggle.addEventListener('click', toggleAnimate);
