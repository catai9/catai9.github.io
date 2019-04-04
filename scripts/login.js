function check(form)
{
    if(form.inputCode.value == "Testing"){
        window.open("../pages/home.html")
        window.close()
    }
    else
    {
        alert("Invalid passcode. Try again.")
    }
}