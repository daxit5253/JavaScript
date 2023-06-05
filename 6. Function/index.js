
function add(){

    let a =prompt("Enter value of a");
    let b =prompt("Enter value of b");

    c=parseInt(a)+parseInt(b);

    document.write("Addition is "+c+ "<br>");

    let d= sub();
    document.write("Minus is "+d+ "<br>")
    
}

function sub(){

    let a =prompt("Enter value of a");
    let b =prompt("Enter value of b");

    c=parseInt(a)-parseInt(b);

    return c;
}

function mult(p,q){

    let m= p*q;
    document.write("multiple is "+m+ "<br>");


}






