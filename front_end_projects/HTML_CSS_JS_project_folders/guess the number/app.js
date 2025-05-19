let timer = document.getElementById("timer")
let hint = document.getElementById("hint")
let chance = document.getElementById("count_chances")
let start = true
// countdown
let sec = 30
function count_down()
{
    sec--;
    timer.innerHTML="00 :"+sec;
    if(sec<10)
    {
        timer.innerHTML=`00 : 0${sec}`
    }
    if(sec<=0)
    {
        sec = 30
        check()
    }
}
let stop_time  = setInterval(count_down,1000)
// chance less and vaildate
count = 10
function check()
{
    count--
    chance.innerHTML="THE CHANCE IS :"+count
    if(count<=0)
    {
        count = 0
        chance.innerHTML="THE CHANCE IS :"+count
        sec = 0
        timer.innerHTML="00 :"+sec+"0";
        hint.innerHTML=" "
        clearInterval(stop_time)
    }
}
// ai number generator

let ai = Math.floor(Math.random()*50)
function validate()
{
   
    check()
    var user = Number(document.getElementById("input").value)
    console.log(user)
    if(user==0)
    {
        hint.innerHTML="THE USER CHOOSE THE VALUE IS ZERO"
    }
    if(user>ai)
        {
        hint.innerHTML="THE USER VALUE IS HIGH CHOOSE A LOW NUMBER"
    }
    else if(user<ai)
        {
        hint.innerHTML="THE USER VALUE IS LOW CHOOSE A HIGH NUMBER"
    }
    else
    {
        hint.innerHTML=`THE USER GUESS IS CORRECT THE AI THINK VALUE IS ${ai}`
        count = count+1
        chance.innerHTML="THE CHANCE IS :"+count
        sec = 0
        timer.innerHTML="00 :"+sec+"0";
        clearInterval(stop_time)
    }
    
}
console.table(ai)