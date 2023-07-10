txt=""

function getval(digit){
    txt= txt+digit;
    document.getElementById('result').value = txt;
}

function getAns(){
    let ans = eval(txt);
    document.getElementById('result').value = ans;
}

function getClear(){
    txt='';
    document.getElementById('result').value = txt;
}

function getClear(){
    txt='';
    document.getElementById('result').value = txt;
}

function getBack(){
    txt= txt.slice(0,-1);
    document.getElementById('result').value = txt;
}