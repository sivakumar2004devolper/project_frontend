let output = document.getElementById("output")
let body = document.querySelector("body")
function generate()
{
    let red = Math.floor(Math.random()*256)
    let green = Math.floor(Math.random()*256)
    let blue = Math.floor(Math.random()*256)
    output.innerHTML=`RGB(${red},${green},${blue})`
    body.style.backgroundColor =`RGB(${red},${green},${blue})`
}