let body = document.querySelector("body")
//let output = document.getElementById("output")
let hex_code_combination = [0,1,2,3,4,5,6,7,8,9,'A','b','D','E','F']
function hex_code_random_generate()
{
    let hex_code_random = Math.floor(Math.random()*hex_code_combination.length)
    return hex_code_combination[hex_code_random]
}
function generate()
{
    let intial = "#"
    for(let i=0 ;i<6;i++)
    {
        intial = intial+hex_code_random_generate()
    }
    body.style.background = intial
    output.innerHTML= intial
}