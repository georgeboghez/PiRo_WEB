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

window.onclick = function(event) {
  if (!event.target.matches('.dropbtn')) {
    var dropdowns = document.getElementsByClassName("dropdown-content");

    var i;
    for (i = 0; i < dropdowns.length; i++) {
      var openDropdown = dropdowns[i];
      if (openDropdown.classList.contains('show')) {
        openDropdown.classList.remove('show');
      }
    }
  }
  if (!event.target.matches('#country-input')) {
    var countries = document.getElementById("dropdown-countries")
    if (countries.classList.contains('show')) {
      countries.classList.remove('show');
    }
  }
}

function showDropdown() {
  document.getElementById("myDropdown").classList.toggle("show");
}

function loadMap() {
  var xhttp = new XMLHttpRequest();
  xhttp.onreadystatechange = function() {
    if (this.readyState == 4 && this.status == 200) {
      let map = document.getElementById("map");
      map.innerHTML = this.responseText;
    }
  };
  xhttp.open("GET", "/assets/img/worldmap.svg", true);
  xhttp.send();
}

function loadSvg(svg_name, container_id) {
  var xhttp = new XMLHttpRequest();
  xhttp.onreadystatechange = function() {
    if (this.readyState == 4 && this.status == 200) {
      let img = document.getElementById(container_id);
      img.setAttribute("src", "data:image/svg+xml;base64," + btoa(unescape(encodeURIComponent(this.responseText))));
    }
  };
  xhttp.open("GET", `/assets/img/${svg_name}`, true);
  xhttp.send();
}

function goToStatistics(id) {
  testwindow = window.open("custom-statistics");
  testwindow.addEventListener('load', function(){
    testwindow.generateCountryChart('score', id);
  });
  // location.href = "custom-statistics"
}

function goToStatisticsRandom() {
  testwindow = window.open("custom-statistics");
  testwindow.addEventListener('load', function(){
    testwindow.randomStats();
  });
  // location.href = "custom-statistics"
}

function goToStatisticsInsitutional() {
  testwindow = window.open("custom-statistics");
  testwindow.addEventListener('load', function(){
    testwindow.generateGenderGraph("6.4200029E7");
  });
  // location.href = "custom-statistics"
}

function goToStatisticsQuestions() {
  testwindow = window.open("custom-statistics");
  testwindow.addEventListener('load', function(){
    testwindow.generateByQuestion("ST013Q01TA", "How many books are there in your home?");
  });
  // location.href = "custom-statistics"
}

function showContent() {
  document.getElementById("dropdown-countries").classList.toggle("show");
}

function filterFunction() {
  var input, filter, ul, li, a, i;
  input = document.getElementById("country-input");
  filter = input.value.toUpperCase();
  div = document.getElementById("dropdown-countries");
  a = div.getElementsByTagName("a");
  for (i = 0; i < a.length; i++) {
    txtValue = a[i].textContent || a[i].innerText;
    if (txtValue.toUpperCase().startsWith(filter)) {
      a[i].style.display = "";
    } else {
      a[i].style.display = "none";
    }
  }
}

function hoverCountry(htmlOfElement) {
  document.getElementById(htmlOfElement).style.fill = '#1b2653'
  document.getElementById(htmlOfElement).style.stroke = '#2a3e52'
}

function stopHovering(htmlOfElement) {
  document.getElementById(htmlOfElement).style.fill = '#fff'
  document.getElementById(htmlOfElement).style.stroke = '#D89909'
}

function loadDropdownCountries() {
  let countriesDropdownContent = document.getElementById("dropdown-countries")
  const COUNTRIES = ["China(Beijing,Shanghai,Jiangsu,Zhejiang)", "Singapore", "Macao", "Hong Kong,China", "Estonia", "Japan", "South Korea", "Canada", "Taiwan", "Finland", "Poland", "Ireland", "Slovenia", "United Kingdom", "New Zealand", "Netherlands", "Sweden", "Denmark", "Germany", "Belgium", "Australia", "Switzerland", "Norway", "Czechia", "United States", "France", "Portugal", "Austria", "Latvia", "Russia", "Iceland", "Lithuania", "Hungary", "Italy", "Luxembourg", "Belarus", "Croatia", "Slovakia", "Israel", "Turkey", "Ukraine", "Malta", "Greece", "Serbia", "Cyprus", "Chile", "United Arab Emirates", "Malaysia", "Romania", "Bulgaria", "Moldova", "Uruguay", "Brunei", "Montenegro", "Albania", "Jordan", "Mexico", "Costa Rica", "Qatar", "Thailand", "Colombia", "Kazakhstan", "Azerbaijan", "Bosnia and Herzegovina", "Peru", "Brazil", "North Macedonia", "Argentina", "Georgia", "Saudi Arabia", "Indonesia", "Lebanon", "Morocco", "Panama", "Kosovo", "Philippines", "Dominican Republic"]
  let content = ''
  for (var i = 0; i < COUNTRIES.length; i++) {
    content += `<a onclick="goToStatistics(this.innerHTML)" onmouseover="hoverCountry(this.innerHTML)" onmouseout="stopHovering(this.innerHTML)">${COUNTRIES[i]}</a>`
  }

  countriesDropdownContent.innerHTML = content
}

function loadPng(png_name, container_id) {
  var xhttp = new XMLHttpRequest();
  xhttp.onreadystatechange = function() {
    if (this.readyState == 4 && this.status == 200) {
      let img = document.getElementById(container_id);
      img.setAttribute("src", "data:image/png;base64," + btoa(unescape(encodeURIComponent(this.responseText))));
    }
  };
  xhttp.open("GET", `/assets/img/${png_name}`, true);
  xhttp.send();
}

function loadElements() {
  loadCharts();
  loadSvg("simple_worldmap.svg", "worldmap-img");
  loadSvg("questionmark.svg", "questionmark-img");
  loadSvg("school.svg", "institution-img");
  loadSvg("dice.svg", "random-img");
  // loadPng("george.png", "teofil-img");
  // loadPng("teofil.png", "george-img");
  // loadPng("radu.PNG", "radu-img");
  loadMap();
  loadDropdownCountries();
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
  xhr.send(JSON.stringify({ EmailAddress: email, FirstName: name, LastName: surname, EmailContent: content }));
}