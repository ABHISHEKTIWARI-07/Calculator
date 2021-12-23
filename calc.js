

/* Javascript code goes here */


var arr = [];

function del(){
    
    arr.splice(-1,1);//cut last digit 
    total();//sends the value to p after cutting last degit
}
function ac(){
   alert("all calculation will be deleted")
 document.getElementById("all").innerHTML="";
  arr = new Array ;//clear Array along with p
}
function aper(){
    var b1 = "%";
    arr.push(b1);
    total();
}
function ak() {
   var info = document.getElementById("all");
  info.innerHTML="Hi guys this is my new web project. @Abhishek Tiwari";
  
}
function a1(){
    var b1 = "1";
    arr.push(b1);
    total();
}
function a2(){
    var b1 = "2";
    arr.push(b1)
    total();
}
function a3(){
    var b1 = "3";
    arr.push(b1);
    total();
}
function a4(){
    var b1 = "4";
    arr.push(b1);
    total();
}
function a5(){
    var b1 = "5";
    arr.push(b1);
    total();
}
function a6(){
    var b1 = "6";
    arr.push(b1);
    total();
}
function a7(){
    var b1 = "7";
    arr.push(b1);
    total();
}
function a8(){
    var b1 = "8";
    arr.push(b1);
    total();
}
function a9(){
    var b1 = "9";
    arr.push(b1);
    total();
}
function a0(){
    var b1 = "0";
    arr.push(b1);
    total();
}
function dot(){
    var b1 = ".";
    arr.push(b1);
    total();
}
function add(){
    var b1 = "+";
    arr.push(b1);
    total();
}
function multiply(){
    var b1 = "*";
    arr.push(b1);
    total();
}
function divide(){
    var b1 = "/";
    arr.push(b1);
    total();
}
function subtract(){
    var b1 = "-";
    arr.push(b1);
    total();
}

function total(){
    x = (arr.toString()).replace(/,/g,"");
    document.getElementById("all").innerHTML= x;
    // convert Array in string and replace the , with empty "" 
    document.body.classList.remove("b");
}

function equal(){
    p = eval(x);//calculates the string
    document.getElementById("all").innerHTML= x+"=" + p;//sends the value of eval function 
    
    arr = new Array ;//creates new Array 
   // arr.push(p);//return the valueOf p
    document.body.classList.add("b");
}
