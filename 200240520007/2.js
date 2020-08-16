function validate()
{
    let username = document.getElementById("user").value;
    let password = document.getElementById("pass").value;
    let email = document.getElementById("email").value;

    let messages=[]

    if(username.value === "" || username.value == null)
    {
        messages.push("please fill required ");
    }
    

}

function reset()
{

}