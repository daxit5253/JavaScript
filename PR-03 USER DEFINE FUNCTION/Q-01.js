
function calc(){

    a=prompt("enter value of a");
    b=prompt("enter value of b");

    c=parseInt(a)+parseInt(b);
    d=parseInt(a)-parseInt(b);
    e=parseInt(a)*parseInt(b);
    f=parseInt(a)/parseInt(b);

    document.write("Addition is "+c+"<br>");
    document.write("Subtraction is "+d+"<br>");
    document.write("Multiply is "+e+"<br>");
    document.write("Division is "+f+"<br>");

}

function add(){

    let a =prompt("Enter value of a");
    let b =prompt("Enter value of b");

    c=parseInt(a)+parseInt(b);
    document.write("Addition is "+c+ "<br>");  
}

function sub(){

    let a =prompt("Enter value of a");
    let b =prompt("Enter value of b");

    c=parseInt(a)-parseInt(b);
    document.write("Subtraction is "+c+ "<br>");  
    
}

function mult(){

    let a =prompt("Enter value of a");
    let b =prompt("Enter value of b");

    c=parseInt(a)*parseInt(b);
    document.write("Multiple is "+c+ "<br>");  
    
}

function div(){

    let a =prompt("Enter value of a");
    let b =prompt("Enter value of b");

    c=parseInt(a)/parseInt(b);
    document.write("Division is "+c+ "<br>");  
    
}