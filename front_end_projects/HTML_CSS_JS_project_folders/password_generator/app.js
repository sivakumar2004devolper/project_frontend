let password_combination = [0,1,2,3,4,5,6,7,8,9,'a','b','c','d','e','f','g','h','i','j','k','l','m','n','o','p','q','r','s','t','u','v','w','x','y','z','A','B','C','D','E','F','G','H','I','J','K','L','M','N','O','P','Q','R','S','T','U','V','W','X','Y','Z','/','*','-','+','.','"','>','<',':',';','?','/','|','}','{',']','[','=','_',')','(','&','^','%','$','#','@','!','`','~'];
function random()
{
    let rand = Math.floor(Math.random()*password_combination.length)
    return password_combination[rand]
}
function generate()
{
    let password_size = document.getElementById("size").value
    let output = document.getElementById("output")
    var password_store = '';
    if(password_size == "8")
    {
        for (let i = 1; i < 9; i++) 
        {
            password_store+=random();
        }    
        output.value=password_store;
        console.log("fail")
    }
    else if(password_size == "16")
    {
        for (let i = 1; i < 17; i++)
        {
            password_store+=random();
        }
        output.value=password_store;    
    }
    else if(password_size == "24")
    {
        for (let i = 1; i < 25; i++)
        {
            password_store+=random();
        }
        output.value=password_store;    
    }
    else if(password_size == "32")
    {
        for (let i = 1; i < 33; i++)
        {
            password_store+=random();
        }
        output.value=password_store;    
    }
}
function refresh()
{
    output.value=' '
    document.getElementById("size").value ="8"      
}




