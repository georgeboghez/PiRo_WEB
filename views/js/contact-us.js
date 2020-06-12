var mybutton = document.getElementById("topbtn");
window.onscroll = function() { scrollFunction() };

function generateCaptcha() {
  var xhr = new XMLHttpRequest();
  xhr.onreadystatechange = function() { // Call a function when the state changes.
    if (this.readyState === XMLHttpRequest.DONE && this.status === 200) {
      let img = document.getElementById("captcha");
      img.setAttribute("src", "data:image/svg+xml;base64," + btoa(unescape(encodeURIComponent(this.responseText))));
      img.setAttribute("alt", "Captcha Text")
      let container = document.getElementById("captcha-container");
      container.innerHTML = `<input type="text" id="captcha-text" name="captcha-text" placeholder="Insert captcha text...">`
      container = document.getElementById("captcha-btn-container");
      container.innerHTML = `<button class="button submit-btn" onclick="submitForm()">Submit</button>`
      let btn = document.getElementById("submit-button");
      btn.innerHTML = "Retry"
    }
  }
  xhr.open("GET", '/captcha', true);
  xhr.send();
}

function submitForm() {
  var email = document.getElementById("email").value;
  var name = document.getElementById("fname").value;
  var surname = document.getElementById("lname").value;
  var content = document.getElementById("subject").value;
  var captcha_text = document.getElementById("captcha-text").value;

  var xhr = new XMLHttpRequest();
  xhr.onreadystatechange = function() {
    if (this.readyState === XMLHttpRequest.DONE && (this.status === 201 || this.status === 418)) {
      let email_warning_div = document.getElementById("email-warning")
      email_warning_div.innerHTML = this.responseText
    }
  }
  xhr.open("POST", '/sendMail' + '?' + `EmailAddress=${email}&FirstName=${name}&LastName=${surname}&EmailContent=${content}&CaptchaText=${captcha_text}`, true);
  xhr.send();
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
