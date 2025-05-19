let count = document.getElementById("count_output")
let img = document.getElementById("image_container")
let a = 0;
function inr()
{
  a++
  count.innerHTML=a;
  if(a>0)
  {
    img.style.background ='url("./profit.jpg") no-repeat center'
  }
  else if(a==0)
  {
    img.style.background='url("./normal.jpg") no-repeat center'
  }
  
}
function dcr()
{
  a--
  count.innerHTML=a;
  if(a<0)
  {
    img.style.background='url("./loss.jpg") no-repeat center '
  }
  else if(a==0)
  {
    img.style.background='url("./normal.jpg") no-repeat center'
  }
  else if(a<50 || a==1)
  {
    img.style.background='url("./netural.gif") no-repeat center'
  }
}
function ref()
{
  count.innerHTML="0"
  img.style.background='url("./normal.jpg") no-repeat center'

}