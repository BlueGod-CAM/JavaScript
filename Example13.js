var a=parseInt(prompt("Input a:"));
var b=parseInt(prompt("Input b:"));
var c=parseInt(prompt("Input c:"));
var determinant,root1,root2;
determinant=(b*2)-(4*a*c);
if(determinant>0){
    root1=(-b+determinant)/2*a;
    root2=(-b-determinant)/2*a;
    document.write("Root1="+root1+"<br>");
    alert("Root2="+root2);
}
else if(determinant==0){
    root1=root2=(-b)/2*a;
    alert("Root1=Root2="+root1);
}
else{
    var real;
    var imagine;
    real=-b/(2*a);
    determinant=Math.sqrt(-determinant)/(2*a);
    document.write("Root1="+real+"+"+imagine+"i<br>");
    document.write("Root1="+real+"-"+imagine+"i<br>");
    
}
