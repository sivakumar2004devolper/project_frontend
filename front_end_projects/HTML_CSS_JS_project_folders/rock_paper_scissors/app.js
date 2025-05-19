// set the timer
let timming = document.getElementById("timing")
let sec = 30
let trans_point = 0;
function count_down()
{
    sec--
    timming.innerHTML="00 : "+sec
    if(sec<10)
    {
        timming.innerHTML="00 : 0"+sec
    }
    if(sec<=0)
    {
        sec=30
        timming.innerHTML="00 :"+sec
        trans_point++
        count_decrease()
    }
}
 let stop_count = setInterval(count_down,1000)
// chance count less
let chance = document.getElementById("chance")
let count = 10
function count_decrease()
{
    count--
    if(count<10)
    {
        chance.innerHTML="0"+count
    }
    if(count<=0)
    {
        count = 0
        chance.innerHTML ="0"+count
        timming.innerHTML="00 : 00"
        clearInterval(stop_count)
        user.style.backgroundImage="none"
        ai.style.backgroundImage="none"
        result.innerHTML = " "
        alert(`user_win_count : ${win_count}
               user_lose_count : ${lose_count}
               user_draw_count : ${draw_count}
               ai winning count : ${trans_point}`)
    }
    
}
// display the user content
let user = document.getElementById("user")
let ai = document.getElementById("ai")
let win_count = 0;
let lose_count = 0;
let draw_count = 0;
let user_state ;
function rock()
{
    count_decrease()
    user_state=0;
    user.style.backgroundImage="url('./game_image/rock.jpg')"
    if(count<=0)
    {
        user.style.backgroundImage="none"
        result.innerHTML=" "
    }
    rand()
}
function paper()
{
    count_decrease()
    user_state=1
    user.style.backgroundImage="url('./game_image/paper.jpg')"
    rand()
    if(count<=0)
    {
        user.style.backgroundImage="none"
        result.innerHTML=" "
    }
}
function scissors()
{
    count_decrease()
    user_state=2
    user.style.backgroundImage="url('./game_image/scissors.jpg')"
    rand()
    if(count<=0)
    {
        user.style.backgroundImage="none"
        result.innerHTML=" "
    }
}
// display the ai content
let result = document.getElementById("result")
function rand()
{
    let ai_gen = Math.floor(Math.random()*3)
    if(ai_gen==0)
    {
        ai.style.backgroundImage="url('./game_image/rock.jpg')"
    }
    else if(ai_gen==1)
    {
        ai.style.backgroundImage="url('./game_image/paper.jpg')"
    }
    else
    {
        ai.style.backgroundImage="url('./game_image/scissors.jpg')"
    }
    if((user_state==0 && ai_gen==0)||(user_state==1 && ai_gen==1)||(user_state==2 && ai_gen==2))
    {
        result.innerHTML = " GAME DRAW "
        draw_count++
    }
    else if((user_state==0 && ai_gen==2)||(user_state==1 && ai_gen==0)||(user_state==2 && ai_gen==1))
    {
        result.innerHTML = " USER CAN WIN THIS GAME"
        win_count++
    }
    else
    {
        result.innerHTML = "USER CAN LOSE THE GAME"
        lose_count++
    }
    if(count<=0)
    {
        ai.style.backgroundImage="none"
        result.innerHTML=" "
    }
}
