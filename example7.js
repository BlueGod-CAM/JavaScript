function myFunction()
{
    var score1,score2,score3,score4,score5;
    score1=parseFloat(prompt("Input the score:"));
    score2=parseFloat(prompt("Input the score:"));
    score3=parseFloat(prompt("Input the score:"));
    score4=parseFloat(prompt("Input the score:"));
    score5=parseFloat(prompt("Input the score:"));
    var total;
    total=score1+score2+score3+score4+score5;
    var average;
    average=total/5;
    document.write("Score1="+score1+"<br>");
    document.write("Score2="+score2+"<br>");
    document.write("Score3="+score3+"<br>");
    document.write("Score4="+score4+"<br>");
    document.write("Score5="+score5+"<br>");
    document.write("Total="+total+"<br>");
    document.write("Average="+average);
    
}