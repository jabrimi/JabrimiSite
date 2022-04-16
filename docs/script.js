// important!!!

var a = 0;
function ver_contactos() {
    const xhttp = new XMLHttpRequest();
    xhttp.onload = function() {
      document.getElementById("contactos").innerHTML =
      this.responseText;
    }
    xhttp.open("GET", "contact.html");
    xhttp.send();
  }


//JQuery
