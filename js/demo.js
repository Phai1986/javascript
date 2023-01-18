const numVal = document.getElementById('numVal');
const submit = document.getElementById('submit');
const output = document.getElementById('result');

function calCal(){
    let result = '';
    let num = Number(numVal.value);

    if(num === 0) {
        output.innerHTML = 'ค่าเท่ากับศูนย์';
        return;
    }

    for (let i = 1; i <= 12;i++) {
        result += '<li>'+num+' x '+i+' = '+num*i+'</li>';
    }
    output.innerHTML = result;
    numVal.select();
}

submit.addEventListener('click', calCal);
numVal.addEventListener('keypress', function (e) {
    if (e.key === 'Enter') {
        calCal();
    }
});


const d = new Date();
document.getElementById("time").innerHTML = d.toUTCString();