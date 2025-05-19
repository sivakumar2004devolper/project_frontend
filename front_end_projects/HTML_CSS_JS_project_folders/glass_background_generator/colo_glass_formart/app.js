let output_container = document.getElementById("output_container")
let output = document.getElementById("output")
function generate()
{
    let red = Math.floor(Math.random()*256)
    let blue = Math.floor(Math.random()*256)
    let green = Math.floor(Math.random()*256)
    let alpha =Math.random()*1
    let alpha1 = alpha.toFixed(5)
    output.innerHTML=`rgba(${red},${blue},${green},${alpha1})`
    output_container.style.background=`rgba(${red},${blue},${green},${alpha1})`
}