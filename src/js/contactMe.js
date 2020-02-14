function erase()
{
	document.getElementById("full_name").value = "";
	document.getElementById("message").value = "";
	document.getElementById("email").value = "";
	document.getElementById("object").value = "";
}

function send()
{
    Email.send({
        SecureToken : 'AIzaSyBiDIthp8humL_OdV_etcku6OSyzqHjXUM',
        To : "davidepollicino2015@gmail.com",
        From : "davidepollicino2015@gmail.com",
        Subject : "This is the subject",
        Body : "And this is the body"
    }).then(
      message => alert(message)
    );
}