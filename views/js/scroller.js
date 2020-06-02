var mybutton = document.getElementById("topbtn");
window.onscroll = function() { scrollFunction() };

function submitForm() {
  var email = document.getElementById("email").value;
  var name = document.getElementById("fname").value;
  var surname = document.getElementById("lname").value;
  var content = document.getElementById("subject").value;

  var xhr = new XMLHttpRequest();
  xhr.open("POST", '/sendMail', true);

  //Send the proper header information along with the request
  xhr.setRequestHeader("Content-Type", "application/json");

  xhr.onreadystatechange = function() { // Call a function when the state changes.
    if (this.readyState === XMLHttpRequest.DONE && this.status === 200) {
      document.getElementById("email-warning").innerHTML = this.responseText;
    }
  }
  xhr.send(JSON.stringify({ EmailAdress: email, FirstName: name, LastName: surname, EmailContent: content }));
}

function scrollFunction() {
  if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
    mybutton.style.display = "block";
  } else {
    mybutton.style.display = "none";
  }
}

function topFunction() {
  document.body.scrollTop = 0;
  document.documentElement.scrollTop = 0;
}
