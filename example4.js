function myFunction(){
    var txt="";
    var r=confirm("Press a button");
    if(r==true){
        txt="<b>You</b> pressed okay";
    }
    else{
        txt="<b>You</b> pressed Cancel";
    }
    document.getElementById("demo").innerHTML=txt;
}