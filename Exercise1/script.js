function Enter()
{
    var myInput1 = document.getElementById("inp1").value;
    var myInput2 = document.getElementById("inp2").value;
    if(myInput1 != myInput2)
    {
        document.querySelector("#result").innerText = "the passwords entered don't match";
        alert("the passwords entered don't match");
    }
    else if((myInput1.length && myInput2.length) < 8)
    {
        document.querySelector("#result").innerText = "the passwords are not at least 8 characters long";
        alert("the passwords are not at least 8 characters long");
    }
    else
    {
        alert("Success");
        document.querySelector("#result").innerText = "Success";
    }
}