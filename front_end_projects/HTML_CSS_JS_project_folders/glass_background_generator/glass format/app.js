let output_container = document.getElementById("output_container")
let output = document.getElementById("output")
function generate()
{
    let red = 255
    let blue = 255
    let green = 255
    let alpha =Math.random()*1
    let alpha1 = alpha.toFixed(2)
    output.innerHTML=`rgba(${red},${blue},${green},${alpha1})`
    output_container.style.background=`rgba(${red},${blue},${green},${alpha1})`
}