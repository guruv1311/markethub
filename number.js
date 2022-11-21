const m=Math.ceil(Math.random() * 100);
ma=10;
function guess()
{
    if(ma>0)
    {
        check();
    }
    else{
        reset();
    }
}
function check()
{
    const r = document.getElementById("r").value;
    const result=document.getElementById("result");
    if(r==m)
    {
        result.innerHTML= "You are guessed";
    }
    else if(r>m)
    {
        result.innerHTML= "You are guessed to low";
        reduce();
    }
    else if(r<m){
        result.innerHTML= "You are guessed ";
        reduce();
    }
}
function reduce()
{
    ma--;
    document.getElementById("ma").innerHTML = "0"+ma;
}
function reset(){
    ma=10;
    document.getElementById("ma").innerHTML= ma;
    document.getElementById("result").innerHTML ="Guess a number!";
    m=Math.ceil(Math.random() * 100);
}