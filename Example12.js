var c=prompt("Input the character:");
var isUpper=(c=='A'||c=='E'||c=='I'||c=='O'||c=='U');
var isLower=(c=='a'||c=='e'||c=='i'||c=='o'||c=='u');

if(isLower||isUpper){
    document.write(c+" is a vowel.")
}
else{
    document.write(c+" is a consonant.");
}