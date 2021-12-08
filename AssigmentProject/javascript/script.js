function submitFunc()
{
    const fname = document.getElementById('fname').value;
    const lname = document.getElementById('lname').value;
    const snum = document.getElementById('Snum').value;
    const email = document.getElementById('Semail').value;
    if(fname == '' || lname == '' || Snum == '')
    {
        alert("Please fill the Personal Information completely!")
    }
    else
    {
        alert(
           "Name : " + fname + " " + lname + " " +
            "\n And Student Number : " + snum + " " +
             "\n And Email : "+ email
             )
        
    }
}

function resetFunc()
{
    const fname = document.getElementById('fname').value;
    const lname = document.getElementById('lname').value;
    const snum = document.getElementById('Snum').value;
    const email = document.getElementById('Semail').value;
    if(fname == '' || lname == '' || Snum == '')
    {
        alert("There's nothing to reset\n")
    }
    else
    {
        document.getElementById('fname').value = "";
        document.getElementById('lname').value = "";
        document.getElementById('Snum').value = "";
        document.getElementById('Semail').value = "";
        alert("Everything got reset now")
    }
}
