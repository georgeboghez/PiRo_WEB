function loadCharts() {
  var data = {
    // A labels array that can contain any sort of values
    labels: ["CN (1)", "SG (2)", "MO (3)", "HK (4)", "EE (5)", "JP (6)", "KR (7)", "CA (8)", "TW (9)", "FI (10)"],
    // Our series array that contains series objects or in this case series data arrays
    series: [
      [578.7, 0, 0, 0, 0, 0, 0, 0, 0, 0],
      [0, 556.3, 0, 0, 0, 0, 0, 0, 0, 0],
      [0, 0, 542.3, 0, 0, 0, 0, 0, 0, 0],
      [0, 0, 0, 530.7, 0, 0, 0, 0, 0, 0],
      [0, 0, 0, 0, 525.3, 0, 0, 0, 0, 0],
      [0, 0, 0, 0, 0, 520.0, 0, 0, 0, 0],
      [0, 0, 0, 0, 0, 0, 519.7, 0, 0, 0],
      [0, 0, 0, 0, 0, 0, 0, 516.7, 0, 0],
      [0, 0, 0, 0, 0, 0, 0, 0, 516.7, 0],
      [0, 0, 0, 0, 0, 0, 0, 0, 0, 516.3]
    ]
  };

  var options = {
    high: 578.7,
    low: 300,
    seriesBarDistance: 1
  };

  // Create a new line chart object where as first parameter we pass in a selector
  // that is resolving to our chart container element. The Second parameter
  // is the actual data object.
  new Chartist.Bar('.ct-chart', data, options);

  //This is the empty chart.
  data = {
    // A labels array that can contain any sort of values
    labels: ["CY (45)", "CL (46)", "AE (47)", "MY (48)", "RO (49)", "BG (50)", "MD (51)", "UY (52)", "BN (53)", "ME (54)"],
    // Our series array that contains series objects or in this case series data arrays
    series: [
      [438.0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
      [0, 437.7, 0, 0, 0, 0, 0, 0, 0, 0],
      [0, 0, 433.7, 0, 0, 0, 0, 0, 0, 0],
      [0, 0, 0, 431.0, 0, 0, 0, 0, 0, 0],
      [0, 0, 0, 0, 428.0, 0, 0, 0, 0, 0],
      [0, 0, 0, 0, 0, 426.7, 0, 0, 0, 0],
      [0, 0, 0, 0, 0, 0, 424.3, 0, 0, 0],
      [0, 0, 0, 0, 0, 0, 0, 423.7, 0, 0],
      [0, 0, 0, 0, 0, 0, 0, 0, 423.0, 0],
      [0, 0, 0, 0, 0, 0, 0, 0, 0, 422.0]
    ]
  };

  // Create a new line chart object where as first parameter we pass in a selector
  // that is resolving to our chart container element. The Second parameter
  // is the actual data object.
  new Chartist.Bar('.ct-chart2', data, options);

  data = {
    // A labels array that can contain any sort of values
    labels: ["AR (68)", "GE (69)", "SA (70)", "ID (71)", "LB (72)", "MA (73)", "PA (74)", "XK (75)", "PH (76)", "DO (77)"],
    // Our series array that contains series objects or in this case series data arrays
    series: [
      [395.0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
      [0, 387.0, 0, 0, 0, 0, 0, 0, 0, 0],
      [0, 0, 386.0, 0, 0, 0, 0, 0, 0, 0],
      [0, 0, 0, 382.0, 0, 0, 0, 0, 0, 0],
      [0, 0, 0, 0, 376.7, 0, 0, 0, 0, 0],
      [0, 0, 0, 0, 0, 368.0, 0, 0, 0, 0],
      [0, 0, 0, 0, 0, 0, 365.0, 0, 0, 0],
      [0, 0, 0, 0, 0, 0, 0, 361.3, 0, 0],
      [0, 0, 0, 0, 0, 0, 0, 0, 350.0, 0],
      [0, 0, 0, 0, 0, 0, 0, 0, 0, 334.3]
    ]
  };

  // Create a new line chart object where as first parameter we pass in a selector
  // that is resolving to our chart container element. The Second parameter
  // is the actual data object.
  new Chartist.Bar('.ct-chart3', data, options);
}

function loadMap() {
  var xhttp = new XMLHttpRequest();
  xhttp.onreadystatechange = function() {
    if (this.readyState == 4 && this.status == 200) {
      document.getElementById("map").innerHTML = this.responseText;
    }
  };
  xhttp.open("GET", "/assets/img/worldmap.svg", true);
  xhttp.send();
}

function loadImg(img_name, container_id) {
  var xhttp = new XMLHttpRequest();
  xhttp.onreadystatechange = function() {
    if (this.readyState == 4 && this.status == 200) {
      let img = document.getElementById(container_id);
      img.setAttribute("src", "data:image/svg+xml;base64," + btoa(unescape(encodeURIComponent(this.responseText))));
    }
  };
  xhttp.open("GET", `/assets/img/${img_name}`, true);
  xhttp.send();
}

function goToStatistics(id) {
  location.href = "custom-statistics"
}

function loadElements() {
  loadCharts();
  loadImg("simple_worldmap.svg", "worldmap-img");
  loadImg("questionmark.svg", "questionmark-img");
  loadImg("school.svg", "institution-img");
  loadImg("dice.svg", "random-img");
  loadMap();
}

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