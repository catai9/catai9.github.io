var passcodes = [
    {
        code: "recruiter"
    },
    {
        code = "student"
    },
    {
        code = "family"
    }
]

function checkPasscode(){
    var code = document.getElementById("code").value

    for(i = 0; i < passcodes.length; i++){
        if(code = passcodes[i].code){
            alert("it worked");
            return;
        }
    }
    alert("Wrong code. Please try again.");
}