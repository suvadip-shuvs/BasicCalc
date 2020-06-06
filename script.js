function add(){
    //Write the code to add Saqib
    var num1 = parseInt(document.getElementById("num1").value);
    var num2 = parseInt(document.getElementById("num2").value);
    document.getElementById("result").innerHTML = num1 + num2;
}

function subtract(){
    //Write the code to subtract Moitreeye
}

//Supriyo & Pragati please add function like divide and multiplication
function multiply(){
    var num1= parseInt(document.getElementById("num1").value);
    var num2= parseInt(document.getElementById("num2").value);
    document.getElementById("result").innerHTML = num1*num2;
}

function divide(){
    var num1= parseInt(document.getElementById("num1").value);
    var num2= parseInt(document.getElementById("num2").value);

    if(num2==0)
    {    
     alert("Cannot divide a number by zero");
     document.getElementById("result").innerHTML= "Invalid Numbers";}
    else
      document.getElementById("result").innerHTML = num1/num2;
}