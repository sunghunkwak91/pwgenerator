//for pw display
const pwDisplay = document.getElementById('result');

//for same length value
const pwRange = document.getElementById('pwrange');
const pwLength = document.getElementById('pwlength');

//for options
const upper = document.getElementById('upper');
const lower = document.getElementById('lower');
const num = document.getElementById('num');
const sym = document.getElementById('sym');

//for generate button
const btn = document.getElementById('btn');

//make same length value (Range, input value) 
pwRange.addEventListener('input', makeSameValue)
pwLength.addEventListener('input', makeSameValue)

function makeSameValue(x){
    value = x.target.value;
    pwRange.value = value;
    pwLength.value = value;
}

//generate random number(For Upper letter, +65)
// console.log(Math.floor(Math.random() * 26) + 65);

function randomUpper() {
    return String.fromCharCode(Math.floor(Math.random() * 26) + 65);
}

function randomLower() {
    return String.fromCharCode(Math.floor(Math.random() * 26) + 97);
}

function randomNum() {
    return String.fromCharCode(Math.floor(Math.random() * 10) + 48);
}

function randomSym() {
    return String.fromCharCode(Math.floor(Math.random() * 15) + 33);
}


btn.addEventListener("click", finalPW)


function finalPW(){

    len = pwLength.value;
    password = "";

    for(let i = 0; i < len; i++){
        const x = randomPW();
        password += x;
    }

    pwDisplay.innerText = password;
    
}


function randomPW(){

    const result = [];

    if(upper.checked){
        result.push(randomUpper());
    }

    if(lower.checked){
        result.push(randomLower());
    }

    if(num.checked){
        result.push(randomNum());
    }

    if(sym.checked){
        result.push(randomSym());
    }

    if(result.length === 0) return "";

    return result[Math.floor(Math.random() * result.length)];
}


