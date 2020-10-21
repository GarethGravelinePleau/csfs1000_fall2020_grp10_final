function pasuser(form)
{
    if (form.userName.value=="hello") 
{
    if (form.Password.value=="hello") {
        location="editgallery.html"
    } else {
        alert("Invalid Password")
    }
    } else { alert("Invalid UserID")
}
}
