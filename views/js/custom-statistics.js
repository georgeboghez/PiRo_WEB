var INSTITUTIONS = []
var COUNTRIES = []
var QUESTIONS_TRUST = {}
var QUESTIONS_FEELINGS = {}
var QUESTIONS_HOME_CONDITIONS = {}
var QUESTIONS_READING = {}
var QUESTIONS_AGREE = {}
var QUESTIONS_MATH = {}
var QUESTIONS_SCIENCE = {}

var csvData = "empty";

var keys = ``
var answers = ``
var label_array = []
var series_array = []
var series_array2 = []
var index = 0

var statistics_type_dropdown = `
  <label for="type">Statistics Type</label>
  <select id="type" onchange="changeStats()">
  <option value="select-option" selected>Select Statistics Type</option>
  <option value="specific-questions">Specific Questions</option>
  <option value="international">International</option>
  <option value="institutional">Institutional</option>
  <option value="random">Random</option>
  </select>`

const category_dropdown = `
  <label for="category">Category</label>
  <select id="category" onchange="pickCategory()">
  <option value="select-category" selected>Select Category</option>
  <option value="feelings">Feelings</option>
  <option value="trust">Trust</option>
  <option value="homecond">Home Conditions</option>
  <option value="reading">Reading</option>
  <option value="agreedisagree">Agree or Disagree</option>
  <option value="math">Mathematics</option>
  <option value="science">Sciences</option>
  </select>`

const rank_by_dropdown = `
  <label for="rank-by">Rank By</label>
  <select id="rank-by" onchange="compareInternational()">
  <option value="select-rank-by">Select Option</option>
  <option value="score">Score</option>
  <option value="tier">Tier</option>
  </select>`

var institutions_dropdown = `<label for="institution">Pick Institution</label>
  <select id="institution" onchange="pickInstitution()">
  <option value="select-institution" selected>Select Institution</option>`


var institutions_comparison_dropdown = `<label for="pick-institution2">Pick Institution #2</label>
  <select id="pick-institution2" onchange="pickQuestionForComparison()">
  <option value="select-institution2" selected>Select Institution #2</option>`

var countries_dropdown =
  `<label for="pick-country">Pick Country</label>
  <select id="pick-country" onchange="pickCountry()">
  <option value="select-country">Select Country</option>`


const question_dropdown_start = `<label for="pick-question">Question</label>
  <select id="pick-question" onchange="pickQuestion()">
  <option value="select-question">Select Question</option>`
const all_question_dropdown_start = `<label for="pick-question2">Question</label>
  <select id="pick-question2" onchange="pickQuestionFromAll()">
  <option value="select-question2">Select Question</option>`
const all_question_institutions_dropdown_start = `<label for="pick-question3">Question</label>
  <select id="pick-question3" onchange="pickQuestionForInstitutionComparison()">
  <option value="select-question3">Select Question</option>`
const question_dropdown_end = `</select>`

const institution_options_dropdown = `<label for="option-type">Statistics Options</label>
  <select id="option-type" onchange="chosenInstOption()">
  <option value="select-option2">Select Option</option>
  <option value="gender-option">Gender</option>
  <option value="questions-option">Questions</option>
  <option value="comparison-option">Comparison</option>
  </select>
  `

var generate_button = `<button class="button gen-button" onclick=""> Generate </button>`

var current_container_html = ''


function getData() {
  var xhttp = new XMLHttpRequest();
  xhttp.onreadystatechange = function() {
    if (this.readyState == 4 && this.status == 200) {
      let data = JSON.parse(this.response)
      COUNTRIES = data.countries
      for (var i = 0; i < COUNTRIES.length; i++) {
        countries_dropdown += `<option value="${COUNTRIES[i]}"> ${COUNTRIES[i]} </option>`;
      }
      countries_dropdown += `</select>`
    }
  };
  xhttp.open("GET", `/get-all-countries`, true);
  xhttp.send();

  var xhttp2 = new XMLHttpRequest();
  xhttp2.onreadystatechange = function() {
    if (this.readyState == 4 && this.status == 200) {
      let data = JSON.parse(this.response)
      INSTITUTIONS = data.institutions
      for (var i = 0; i < INSTITUTIONS.length; i++) {
        institutions_dropdown += `<option value="${INSTITUTIONS[i]}"> ${INSTITUTIONS[i]} </option>`;
      }
      institutions_dropdown += '</select>';


      for (var i = 0; i < INSTITUTIONS.length; i++) {
        institutions_comparison_dropdown += `<option value="${INSTITUTIONS[i]}"> ${INSTITUTIONS[i]} </option>`;
      }
      institutions_comparison_dropdown += `</select>`;
    }
  };
  xhttp2.open("GET", `/get-institutions`, true);
  xhttp2.send();

  var xhttp3 = new XMLHttpRequest();
  xhttp3.onreadystatechange = function() {
    if (this.readyState == 4 && this.status == 200) {
      let data = JSON.parse(this.response)
      QUESTIONS_TRUST = data.QUESTIONS_TRUST
      QUESTIONS_FEELINGS = data.QUESTIONS_FEELINGS
      QUESTIONS_HOME_CONDITIONS = data.QUESTIONS_HOME_CONDITIONS
      QUESTIONS_READING = data.QUESTIONS_READING
      QUESTIONS_AGREE = data.QUESTIONS_AGREE
      QUESTIONS_MATH = data.QUESTIONS_MATH
      QUESTIONS_SCIENCE = data.QUESTIONS_SCIENCE
    }
  };
  xhttp3.open("GET", `/get-questions-categorized`, true);
  xhttp3.send();
}


function generateEmptyChart() {
  csvData = "empty";
  var data = {
    labels: [1, 2, 3, 4],
    series: [
      []
    ]
  };

  new Chartist.Line('.ct-chart', data);
  document.getElementById("chart-title").innerHTML = "Empty Chart";
}

function changeFunc() {
  var selectBox = document.getElementById("type");
  var selectedValue = selectBox.options[selectBox.selectedIndex].value;
  alert(selectedValue);
  var xhttp = new XMLHttpRequest();
  xhttp.onreadystatechange = function() {
    if (this.readyState == 4 && this.status == 200) {
      document.getElementById("stats-chart").innerHTML = ''
      document.getElementById("demo").innerHTML = this.responseText;
    }
  };
  document.getElementById("stats-chart").innerHTML = '<img src="/assets/img/loading.gif"/>';
  xhttp.open("GET", "/chart-institutional", true);
  xhttp.send();
}

function changeStats() {
  var selectBox = document.getElementById("type");
  var selectedValue = selectBox.options[selectBox.selectedIndex].value;
  current_container_html = statistics_type_dropdown.replace(`value="${selectedValue}"`, `value="${selectedValue}" selected`)
  if (selectedValue === "select-option") {
    generateEmptyChart()
  } else if (selectedValue === "specific-questions") {
    current_container_html += category_dropdown
  } else if (selectedValue === "international") {
    current_container_html += rank_by_dropdown
  } else if (selectedValue === "institutional") {
    current_container_html += institutions_dropdown
  } else if (selectedValue === "random") {
    current_container_html += generate_button.replace('onclick=""', 'onclick="randomStats()"')
  }
  document.getElementById("stats").innerHTML = current_container_html;
}

function replaceInQuestion(value, QUESTIONS) {
  current_container_html = statistics_type_dropdown.replace('value="specific-questions"', 'value="specific-questions" selected')
  current_container_html += category_dropdown.replace(`value="${value}"`, `value="${value}" selected`)
  current_container_html += question_dropdown_start
  for (var key in QUESTIONS) {
    current_container_html += `<option value="${key}">${QUESTIONS[key]}</option>"`
  }
  current_container_html += question_dropdown_end
  document.getElementById("stats").innerHTML = current_container_html;
}

function pickCategory() {
  var categoryDropdown = document.getElementById("category");
  var selected_category = categoryDropdown.options[categoryDropdown.selectedIndex].value;

  if (selected_category === "feelings") {
    replaceInQuestion(selected_category, QUESTIONS_FEELINGS)
  } else if (selected_category === "trust") {
    replaceInQuestion(selected_category, QUESTIONS_TRUST)
  } else if (selected_category === "homecond") {
    replaceInQuestion(selected_category, QUESTIONS_HOME_CONDITIONS)
  } else if (selected_category === "agreedisagree") {
    replaceInQuestion(selected_category, QUESTIONS_AGREE)
  } else if (selected_category === "math") {
    replaceInQuestion(selected_category, QUESTIONS_MATH)
  } else if (selected_category === "science") {
    replaceInQuestion(selected_category, QUESTIONS_SCIENCE)
  } else if (selected_category === "reading") {
    replaceInQuestion(selected_category, QUESTIONS_READING)
  }
}

function pickQuestion() {
  let questionDropdown = document.getElementById("pick-question");
  let selectedQuestionId = questionDropdown.options[questionDropdown.selectedIndex].value;
  let selectedQuestion = questionDropdown.options[questionDropdown.selectedIndex].text;

  let question_selected = current_container_html.replace(`value="${selectedQuestionId}"`, `value="${selectedQuestionId}" selected`)
  if (selectedQuestionId != 'select-question') {
    question_selected += generate_button.replace(`onclick=""`, `onclick="generateByQuestion('${selectedQuestionId}', '${selectedQuestion}')"`)
  }
  document.getElementById("stats").innerHTML = question_selected;
}

function generateByQuestion(questionId, question) {
  if (!QUESTIONS_FEELINGS.hasOwnProperty(questionId) && !QUESTIONS_TRUST.hasOwnProperty(questionId) && !QUESTIONS_HOME_CONDITIONS.hasOwnProperty(questionId) && !QUESTIONS_AGREE.hasOwnProperty(questionId) && !QUESTIONS_MATH.hasOwnProperty(questionId) && !QUESTIONS_SCIENCE.hasOwnProperty(questionId) && !QUESTIONS_READING.hasOwnProperty(questionId)) {
    alert("No question selected!");
    return;
  }



  var xhttp = new XMLHttpRequest();
  xhttp.onreadystatechange = function() {
    if (this.readyState == 4 && this.status == 200) {
      document.getElementById("stats-chart").innerHTML = ''
      resultData = JSON.parse(this.responseText).results

      keys = ``
      answers = ``
      series_array = []
      label_array = []

      for (var key in resultData) {
        keys += key + ','
        answers += ',' + resultData[key]
        series_array.push(resultData[key])
        label_array.push(`${key} (${resultData[key]})`)
      }

      csvData = `Question,${keys}\n"${question}"${answers}`

      var data = {
        labels: label_array,
        series: [series_array]
      };
      var options = {
        seriesBarDistance: 5,
        showLabel: true
      };
      var chart = new Chartist.Bar('.ct-chart', data, options);
      document.getElementById("chart-title").innerHTML = question;
    }
  };

  document.getElementById("stats-chart").innerHTML = '<img src="/assets/img/loading.gif"/>';
  xhttp.open("GET", "/question-chart" + '?' + `questionId=${questionId}`, true);
  xhttp.send();
}

function compareInternational() {
  var selectBox = document.getElementById("rank-by");
  var selectedValue = selectBox.options[selectBox.selectedIndex].value;

  if (selectedValue != "select-rank-by") {
    current_container_html = statistics_type_dropdown.replace('value="international"', 'value="international" selected')
    current_container_html += rank_by_dropdown.replace(`value="${selectedValue}"`, `value="${selectedValue}" selected`)
    current_container_html += countries_dropdown
  } else {
    current_container_html = statistics_type_dropdown.replace('value="international"', 'value="international" selected')
    current_container_html += rank_by_dropdown
  }
  document.getElementById("stats").innerHTML = current_container_html;
}

function pickCountry() {
  var rankByDropdown = document.getElementById("rank-by");
  var selectedRankingOption = rankByDropdown.options[rankByDropdown.selectedIndex].value;
  var countryDropdown = document.getElementById("pick-country");
  var selectedCountry = countryDropdown.options[countryDropdown.selectedIndex].value;

  var country_selected = current_container_html.replace(`value="${selectedCountry}"`, `value="${selectedCountry}" selected`)
  if (selectedCountry != 'select-country') {
    country_selected += generate_button.replace(`onclick=""`, `onclick="generateCountryChart('${selectedRankingOption}', '${selectedCountry}')"`)
  }
  document.getElementById("stats").innerHTML = country_selected;
}

function generateCountryChart(rankingOption, country) {
  if (!COUNTRIES.includes(country)) {
    alert("No country selected!");
    return;
  }
  if (rankingOption != "score" && rankingOption != "tier") {
    alert("Invalid Ranking Option")
    return;
  }

  var xhttp = new XMLHttpRequest();
  xhttp.onreadystatechange = function() {
    if (this.readyState == 4 && this.status == 200) {
      document.getElementById("stats-chart").innerHTML = ''
      resultData = JSON.parse(this.responseText)

      var data = {

      }

      if (rankingOption == "score") {
        data["labels"] = [`Overall Score (${resultData["romania_result"]["AverageScore"]}, ${resultData["second_country_result"]["AverageScore"]})`, `Mathematics Score (${resultData["romania_result"]["MathematicsScore"]}, ${resultData["second_country_result"]["MathematicsScore"]})`, `Science Score (${resultData["romania_result"]["ScienceScore"]}, ${resultData["second_country_result"]["ScienceScore"]})`, `Reading Score (${resultData["romania_result"]["ReadingScore"]}, ${resultData["second_country_result"]["ReadingScore"]})`]
        data["series"] = [
          [resultData["romania_result"]["AverageScore"], resultData["romania_result"]["MathematicsScore"], resultData["romania_result"]["ScienceScore"], resultData["romania_result"]["ReadingScore"]],
          [resultData["second_country_result"]["AverageScore"], resultData["second_country_result"]["MathematicsScore"], resultData["second_country_result"]["ScienceScore"], resultData["second_country_result"]["ReadingScore"]]
        ]
        csvData = `Country,Overall Score,Mathematics Score,Science Score,Reading Score\n` +
          `"Romania",${resultData["romania_result"]["AverageScore"]},${resultData["romania_result"]["MathematicsScore"]},${resultData["romania_result"]["ScienceScore"]},${resultData["romania_result"]["ReadingScore"]}\n` +
          `"${country}",${resultData["second_country_result"]["AverageScore"]},${resultData["second_country_result"]["MathematicsScore"]},${resultData["second_country_result"]["ScienceScore"]},${resultData["second_country_result"]["ReadingScore"]}`
      } else {
        data["labels"] = [`Overall Ranking (${resultData["romania_result"]["AverageRanking"]}, ${resultData["second_country_result"]["AverageRanking"]})`, `Mathematics Ranking (${resultData["romania_result"]["MathematicsRanking"]}, ${resultData["second_country_result"]["MathematicsRanking"]})`, `Science Ranking (${resultData["romania_result"]["ScienceRanking"]}, ${resultData["second_country_result"]["ScienceRanking"]})`, `Reading Ranking (${resultData["romania_result"]["ReadingRanking"]}, ${resultData["second_country_result"]["ReadingRanking"]})`]
        data["series"] = [
          [78 - resultData["romania_result"]["AverageRanking"], 78 - resultData["romania_result"]["MathematicsRanking"], 78 - resultData["romania_result"]["ScienceRanking"], 78 - resultData["romania_result"]["ReadingRanking"]],
          [78 - resultData["second_country_result"]["AverageRanking"], 78 - resultData["second_country_result"]["MathematicsRanking"], 78 - resultData["second_country_result"]["ScienceRanking"], 78 - resultData["second_country_result"]["ReadingRanking"]]
        ]
        csvData = `Country,Overall Ranking,Mathematics Ranking,Science Ranking,Reading Ranking\n` +
          `"Romania",${resultData["romania_result"]["AverageRanking"]},${resultData["romania_result"]["MathematicsRanking"]},${resultData["romania_result"]["ScienceRanking"]},${resultData["romania_result"]["ReadingRanking"]}\n` +
          `"${country}",${resultData["second_country_result"]["AverageRanking"]},${resultData["second_country_result"]["MathematicsRanking"]},${resultData["second_country_result"]["ScienceRanking"]},${resultData["second_country_result"]["ReadingRanking"]}`
      }
      var options = {
        reverseData: true,
        horizontalBars: true,
        axisY: {
          offset: 70
        }
      };

      var xhttpApi = new XMLHttpRequest();
      xhttpApi.onreadystatechange = function() {
        if (this.readyState == 4 && this.status == 200) {
          let relevantData = JSON.parse(this.response)[1]
          for (let index in relevantData)
            if (relevantData[index].value !== null){
              document.getElementById("chart-title").innerHTML += ` (The percentage of GDP for ${country} allocated to Education in ${relevantData[index].date} is ${relevantData[index].value}% according to The World Bank)`
              break;
            }
        }
      };

      xhttpApi.open("GET", `https://api.worldbank.org/v2/country/${resultData["second_country_result"]["CountryIso2Code"]}/indicator/SE.XPD.TOTL.GD.ZS?format=json`, true);
      xhttpApi.send();

      var chart = new Chartist.Bar('.ct-chart', data, options);
      document.getElementById("chart-title").innerHTML = `Countries Romania and ${country} ranked by ${rankingOption}`;
    }

  };

  document.getElementById("stats-chart").innerHTML = '<img src="/assets/img/loading.gif"/>';
  xhttp.open("GET", "/country-chart" + '?' + `country=${country}&rankingOption=${rankingOption}`, true);
  xhttp.send();
}

function pickInstitution() {
  var institutionsDropdown = document.getElementById("institution");
  var selectedInstitution = institutionsDropdown.options[institutionsDropdown.selectedIndex].value;

  current_container_html = statistics_type_dropdown.replace('value="institutional"', 'value="institutional" selected')
  current_container_html += institutions_dropdown.replace(`value="${selectedInstitution}"`, `value="${selectedInstitution}" selected`)
  if (selectedInstitution != 'select-institution') {
    current_container_html += institution_options_dropdown
  }
  document.getElementById("stats").innerHTML = current_container_html;
}

function chosenInstOption() {
  var institutionsDropdown = document.getElementById("institution");
  var selectedInstitution = institutionsDropdown.options[institutionsDropdown.selectedIndex].value;
  var institutionsOptionDropdown = document.getElementById("option-type");
  var selectedInstitutionOption = institutionsOptionDropdown.options[institutionsOptionDropdown.selectedIndex].value;

  current_container_html = statistics_type_dropdown.replace('value="institutional"', 'value="institutional" selected')
  current_container_html += institutions_dropdown.replace(`value="${selectedInstitution}"`, `value="${selectedInstitution}" selected`)
  current_container_html += institution_options_dropdown.replace(`value="${selectedInstitutionOption}"`, `value="${selectedInstitutionOption}" selected`)
  if (selectedInstitutionOption === 'gender-option') {
    current_container_html += generate_button.replace(`onclick=""`, `onclick="generateGenderGraph('${selectedInstitution}')"`)
  } else if (selectedInstitutionOption === 'questions-option') {
    current_container_html += all_question_dropdown_start
    for (var key in QUESTIONS_FEELINGS) {
      current_container_html += `<option value="${key}">${QUESTIONS_FEELINGS[key]}</option>"`
    }
    for (var key in QUESTIONS_TRUST) {
      current_container_html += `<option value="${key}">${QUESTIONS_TRUST[key]}</option>"`
    }
    for (var key in QUESTIONS_HOME_CONDITIONS) {
      current_container_html += `<option value="${key}">${QUESTIONS_HOME_CONDITIONS[key]}</option>"`
    }
    for (var key in QUESTIONS_AGREE) {
      current_container_html += `<option value="${key}">${QUESTIONS_AGREE[key]}</option>"`
    }
    for (var key in QUESTIONS_MATH) {
      current_container_html += `<option value="${key}">${QUESTIONS_MATH[key]}</option>"`
    }
    for (var key in QUESTIONS_SCIENCE) {
      current_container_html += `<option value="${key}">${QUESTIONS_SCIENCE[key]}</option>"`
    }
    for (var key in QUESTIONS_READING) {
      current_container_html += `<option value="${key}">${QUESTIONS_READING[key]}</option>"`
    }
    current_container_html += question_dropdown_end
  } else if (selectedInstitutionOption === 'comparison-option') {
    current_container_html += institutions_comparison_dropdown
  }
  document.getElementById("stats").innerHTML = current_container_html;
}

function pickQuestionFromAll() {
  var institutionsDropdown = document.getElementById("institution");
  var selectedInstitution = institutionsDropdown.options[institutionsDropdown.selectedIndex].value;
  var institutionsOptionDropdown = document.getElementById("option-type");
  var selectedInstitutionOption = institutionsOptionDropdown.options[institutionsOptionDropdown.selectedIndex].value;
  var questionDropdown = document.getElementById("pick-question2");
  var selectedQuestionId = questionDropdown.options[questionDropdown.selectedIndex].value;
  var selectedQuestion = questionDropdown.options[questionDropdown.selectedIndex].text;

  var question_selected = current_container_html.replace(`value="${selectedQuestionId}"`, `value="${selectedQuestionId}" selected`).replace(`value="${selectedInstitution}"`, `value="${selectedInstitution}" selected`).replace(`value="${selectedInstitutionOption}"`, `value="${selectedInstitutionOption}" selected`)
  if (selectedQuestionId != 'select-question2') {
    question_selected += generate_button.replace(`onclick=""`, `onclick="generateInstitutionQuestionChart('${selectedInstitution}', '${selectedQuestionId}', '${selectedQuestion}')"`)
  }
  document.getElementById("stats").innerHTML = question_selected;
}

function pickQuestionForComparison() {
  var institutionsDropdown = document.getElementById("institution");
  var selectedInstitution = institutionsDropdown.options[institutionsDropdown.selectedIndex].value;
  var institutionsOptionDropdown = document.getElementById("option-type");
  var selectedInstitutionOption = institutionsOptionDropdown.options[institutionsOptionDropdown.selectedIndex].value;
  var institutionDropdown_2 = document.getElementById("pick-institution2");
  var selectedInstitution_2 = institutionDropdown_2.options[institutionDropdown_2.selectedIndex].value;

  current_container_html = statistics_type_dropdown.replace('value="institutional"', 'value="institutional" selected')
  current_container_html += institutions_dropdown.replace(`value="${selectedInstitution}"`, `value="${selectedInstitution}" selected`)
  current_container_html += institution_options_dropdown.replace(`value="${selectedInstitutionOption}"`, `value="${selectedInstitutionOption}" selected`)
  current_container_html += institutions_comparison_dropdown.replace(`value="${selectedInstitution_2}"`, `value="${selectedInstitution_2}" selected`)

  if (selectedInstitution_2 !== "select-institution2") {
    current_container_html += all_question_institutions_dropdown_start
    for (var key in QUESTIONS_FEELINGS) {
      current_container_html += `<option value="${key}">${QUESTIONS_FEELINGS[key]}</option>"`
    }
    for (var key in QUESTIONS_TRUST) {
      current_container_html += `<option value="${key}">${QUESTIONS_TRUST[key]}</option>"`
    }
    for (var key in QUESTIONS_HOME_CONDITIONS) {
      current_container_html += `<option value="${key}">${QUESTIONS_HOME_CONDITIONS[key]}</option>"`
    }
    for (var key in QUESTIONS_AGREE) {
      current_container_html += `<option value="${key}">${QUESTIONS_AGREE[key]}</option>"`
    }
    for (var key in QUESTIONS_MATH) {
      current_container_html += `<option value="${key}">${QUESTIONS_MATH[key]}</option>"`
    }
    for (var key in QUESTIONS_SCIENCE) {
      current_container_html += `<option value="${key}">${QUESTIONS_SCIENCE[key]}</option>"`
    }
    for (var key in QUESTIONS_READING) {
      current_container_html += `<option value="${key}">${QUESTIONS_READING[key]}</option>"`
    }
    current_container_html += question_dropdown_end
  }
  document.getElementById("stats").innerHTML = current_container_html;
}

function pickQuestionForInstitutionComparison() {
  var institutionsDropdown = document.getElementById("institution");
  var selectedInstitution = institutionsDropdown.options[institutionsDropdown.selectedIndex].value;
  var institutionsOptionDropdown = document.getElementById("option-type");
  var selectedInstitutionOption = institutionsOptionDropdown.options[institutionsOptionDropdown.selectedIndex].value;
  var institutionDropdown_2 = document.getElementById("pick-institution2");
  var selectedInstitution_2 = institutionDropdown_2.options[institutionDropdown_2.selectedIndex].value;
  var questionDropdown = document.getElementById("pick-question3");
  var selectedQuestionId = questionDropdown.options[questionDropdown.selectedIndex].value;
  var selectedQuestion = questionDropdown.options[questionDropdown.selectedIndex].text;

  var question_selected = current_container_html.replace(`value="${selectedQuestionId}"`, `value="${selectedQuestionId}" selected`).replace(`value="${selectedInstitution}"`, `value="${selectedInstitution}" selected`).replace(`value="${selectedInstitutionOption}"`, `value="${selectedInstitutionOption}" selected`)
  if (selectedQuestionId != 'select-question3') {
    question_selected += generate_button.replace(`onclick=""`, `onclick="generateComparisonChart('${selectedInstitution}', '${selectedInstitution_2}', '${selectedQuestionId}', '${selectedQuestion}')"`)
  }
  document.getElementById("stats").innerHTML = question_selected;
}

function generateComparisonChart(institution1, institution2, questionId, question) {
  if (!QUESTIONS_FEELINGS.hasOwnProperty(questionId) && !QUESTIONS_TRUST.hasOwnProperty(questionId) && !QUESTIONS_HOME_CONDITIONS.hasOwnProperty(questionId) && !QUESTIONS_AGREE.hasOwnProperty(questionId) && !QUESTIONS_MATH.hasOwnProperty(questionId) && !QUESTIONS_SCIENCE.hasOwnProperty(questionId) && !QUESTIONS_READING.hasOwnProperty(questionId)) {
    alert("No question chosen!");
    return;
  }
  if (!INSTITUTIONS.includes(institution1) || !INSTITUTIONS.includes(institution2)) {
    alert("Invalid Institutions")
    return;
  }

  var xhttp = new XMLHttpRequest();
  xhttp.onreadystatechange = function() {
    if (this.readyState == 4 && this.status == 200) {
      document.getElementById("stats-chart").innerHTML = ''
      resultData = JSON.parse(this.responseText)

      keys = ``
      answers = ``
      var answers2 = ``
      series_array = []
      series_array2 = []
      label_array = []

      for (var key in resultData.resultsInstitution1) {
        keys += key + ','
        answers += ',' + resultData.resultsInstitution1[key]
        answers2 += ',' + resultData.resultsInstitution2[key]
        series_array.push(resultData.resultsInstitution1[key])
        series_array2.push(resultData.resultsInstitution2[key])
        label_array.push(key)
      }

      csvData = `questionId,Institution,${keys}\n"${question}",${institution1}${answers}\n${question},${institution2}${answers2}`

      var data = {
        labels: label_array,
        series: [
          series_array,
          series_array2
        ]
      };
      var options = {
        seriesBarDistance: 10
      };
      var chart = new Chartist.Bar('.ct-chart', data, options);
      document.getElementById("chart-title").innerHTML = `"${question}"
                Asked in institutions ${institution1} and ${institution2}`;
    }
  };

  document.getElementById("stats-chart").innerHTML = '<img src="/assets/img/loading.gif"/>';
  xhttp.open("GET", "/comparison-chart" + '?' + `institution1=${institution1}&institution2=${institution2}&questionId=${questionId}`, true);
  xhttp.send();
}

function generateInstitutionQuestionChart(institution, questionId, question) {
  if (!QUESTIONS_FEELINGS.hasOwnProperty(questionId) && !QUESTIONS_TRUST.hasOwnProperty(questionId) && !QUESTIONS_HOME_CONDITIONS.hasOwnProperty(questionId) && !QUESTIONS_AGREE.hasOwnProperty(questionId) && !QUESTIONS_MATH.hasOwnProperty(questionId) && !QUESTIONS_SCIENCE.hasOwnProperty(questionId) && !QUESTIONS_READING.hasOwnProperty(questionId)) {
    alert("No question chosen!");
    return;
  }
  if (!INSTITUTIONS.includes(institution)) {
    alert("Invalid Institution")
    return;
  }

  var xhttp = new XMLHttpRequest();
  xhttp.onreadystatechange = function() {
    if (this.readyState == 4 && this.status == 200) {
      document.getElementById("stats-chart").innerHTML = ''
      resultData = JSON.parse(this.responseText).results

      keys = ``
      answers = ``
      series_array = []
      label_array = []

      for (var key in resultData) {
        keys += key + ','
        answers += ',' + resultData[key]
        series_array.push(resultData[key])
        label_array.push(key)
      }
      csvData = `Question,Institution,${keys}\n"${question}",${institution}${answers}`
      var data = {
        series: series_array
      };

      var sum = function(a, b) {
        return a + b
      };
      index = 0;
      var chart = new Chartist.Pie('.ct-chart', data, {
        labelInterpolationFnc: function(value) {
          let x = Math.round(value / data.series.reduce(sum) * 100) + '% - ' + label_array[index++];
          if (index >= label_array.length)
            index = 0
          return x
        }
      });
      document.getElementById("chart-title").innerHTML = `"${question}" Asked in institution ${institution}`;
    }
  };
  document.getElementById("stats-chart").innerHTML = '<img src="/assets/img/loading.gif"/>';
  xhttp.open("GET", "/question-inst-chart" + '?' + `institutionID=${institution}&questionId=${questionId}`, true);
  xhttp.send();
}

function generateGenderGraph(institution) {
  var xhttp = new XMLHttpRequest();
  xhttp.onreadystatechange = function() {
    if (this.readyState == 4 && this.status == 200) {
      document.getElementById("stats-chart").innerHTML = ''
      resultData = JSON.parse(this.responseText)
      var data = {
        series: [resultData['male'], resultData['female']]
      };

      var sum = function(a, b) {
        return a + b
      };

      csvData = `Institution,Male,Female\n` +
        `${institution},${resultData['male']},${resultData['female']}`

      new Chartist.Pie('.ct-chart', data, {
        labelInterpolationFnc: function(value) {
          if (value == resultData['male']) {
            return "" + Math.round(value / data.series.reduce(sum) * 100) + '% Male';
          } else {
            return "" + Math.round(value / data.series.reduce(sum) * 100) + '% Female';
          }
        }
      });

      document.getElementById("chart-title").innerHTML = "Gender chart for institution: " + institution;
    }
  };

  document.getElementById("stats-chart").innerHTML = '<img src="/assets/img/loading.gif"/>';
  xhttp.open("GET", "/gender-inst-chart" + '?' + `institutionID=${institution}`, true);
  xhttp.send();
}

function getAllQuestions() {
  var QUESTIONS = {}
  Object.keys(QUESTIONS_FEELINGS).forEach(key => {
    QUESTIONS[key] = QUESTIONS_FEELINGS[key];
  });
  Object.keys(QUESTIONS_TRUST).forEach(key => {
    QUESTIONS[key] = QUESTIONS_TRUST[key];
  });
  Object.keys(QUESTIONS_HOME_CONDITIONS).forEach(key => {
    QUESTIONS[key] = QUESTIONS_HOME_CONDITIONS[key];
  });
  Object.keys(QUESTIONS_AGREE).forEach(key => {
    QUESTIONS[key] = QUESTIONS_AGREE[key];
  });
  Object.keys(QUESTIONS_MATH).forEach(key => {
    QUESTIONS[key] = QUESTIONS_MATH[key];
  });
  Object.keys(QUESTIONS_SCIENCE).forEach(key => {
    QUESTIONS[key] = QUESTIONS_SCIENCE[key];
  });
  Object.keys(QUESTIONS_READING).forEach(key => {
    QUESTIONS[key] = QUESTIONS_READING[key];
  });
  return QUESTIONS
}

function randomStats() {
  var randomNumber = Math.floor(Math.random() * 6)

  if (randomNumber == 1) {
    let randomInstitution = INSTITUTIONS[Math.floor(Math.random() * INSTITUTIONS.length)]
    generateGenderGraph(randomInstitution);
  } else if (randomNumber == 2) {
    let randomInstitution = INSTITUTIONS[Math.floor(Math.random() * INSTITUTIONS.length)]
    let QUESTIONS = getAllQuestions()
    let questionIds = Object.keys(QUESTIONS);
    let randomQuestionId = questionIds[Math.floor(Math.random() * questionIds.length)];
    generateInstitutionQuestionChart(randomInstitution, randomQuestionId, QUESTIONS[randomQuestionId])
  } else if (randomNumber == 3) {
    let randomInstitution1 = INSTITUTIONS[Math.floor(Math.random() * INSTITUTIONS.length)]
    let randomInstitution2 = INSTITUTIONS[Math.floor(Math.random() * INSTITUTIONS.length)]
    let QUESTIONS = getAllQuestions()
    let questionIds = Object.keys(QUESTIONS);
    let randomQuestionId = questionIds[Math.floor(Math.random() * questionIds.length)];
    generateComparisonChart(randomInstitution1, randomInstitution2, randomQuestionId, QUESTIONS[randomQuestionId])
  } else if (randomNumber == 4) {
    rankingOptions = ["score", "tier"]
    generateCountryChart(rankingOptions[Math.floor(Math.random() * rankingOptions.length)], COUNTRIES[Math.floor(Math.random() * COUNTRIES.length)])
  } else if (randomNumber == 5) {
    let QUESTIONS = getAllQuestions()
    let questionIds = Object.keys(QUESTIONS);
    let randomQuestionId = questionIds[Math.floor(Math.random() * questionIds.length)];
    generateByQuestion(randomQuestionId, QUESTIONS[randomQuestionId])
  }

}

function returnSvgElements(title) {
  var words = title.split(' ');

  var svg_elements = '';
  var height = 100;

  svg_elements += `<text x="50%" y="${height}" dominant-baseline="middle" text-anchor="middle">`;
  var words_length = 0;
  for (var index in words) {
    words_length += words[index].length
    svg_elements += words[index] + ' ';
    if (words_length > 40) {
      svg_elements += '</text>';
      height += 25;
      svg_elements += `<text x="50%" y="${height}" dominant-baseline="middle" text-anchor="middle">`;
      words_length = 0;
    }
  }
  if (!svg_elements.endsWith('</text>'))
    svg_elements += '</text>'
  return svg_elements;
}

function getSVG() {
  var svg = document.getElementById("stats-chart").getElementsByTagName("svg")[0];

  var serializer = new XMLSerializer();
  var source = serializer.serializeToString(svg);

  source = source.replace(/xmlns="http:\/\/www\.w3\.org\/2000\/xmlns\/"/g, '');
  var title = document.getElementById("chart-title").innerHTML


  var svg_elements = returnSvgElements(title);

  source = source.replace(/<g/, '<defs> <style type="text/css"> <![CDATA[ .ct-bar {fill: none; stroke-width: 10px;} .ct-series-a .ct-bar {stroke: #f1aa0b;} .ct-series-b .ct-bar {stroke: #db990a;} .ct-grid { stroke: rgba(0,0,0,.2); stroke-width: 1px; stroke-dasharray: 2px; background-color: white; color: #2a3e52; border-color: #2a3e52; margin: 0; padding: 0; min-width: fit-content; } .ct-label { font-size: .75rem; line-height: 1; } .ct-series-a .ct-slice-pie{fill:#d70206}     .ct-slice-pie{fill:#f05b4f}.ct-series-c .ct-bar,.ct-series-c .ct-line,.ct-series-c .ct-point,.ct-series-c .ct-slice-donut{stroke:#f4c63d}.ct-series-c .ct-area,.ct-series-c .ct-slice-donut-solid,.ct-series-c .ct-slice-pie{fill:#f4c63d}.ct-series-d .ct-bar,.ct-series-d .ct-line,.ct-series-d .ct-point,.ct-series-d .ct-slice-donut{stroke:#d17905}.ct-series-d .ct-area,.ct-series-d .ct-slice-donut-solid,.ct-series-d .ct-slice-pie{fill:#d17905}.ct-series-e .ct-bar,.ct-series-e .ct-line,.ct-series-e .ct-point,.ct-series-e .ct-slice-donut{stroke:#453d3f}.ct-series-e .ct-area,.ct-series-e .ct-slice-donut-solid,.ct-series-e .ct-slice-pie{fill:#453d3f}.ct-series-f .ct-bar,.ct-series-f .ct-line,.ct-series-f .ct-point,.ct-series-f .ct-slice-donut{stroke:#59922b}.ct-series-f .ct-area,.ct-series-f .ct-slice-donut-solid,.ct-series-f .ct-slice-pie{fill:#59922b}.ct-series-g .ct-bar,.ct-series-g .ct-line,.ct-series-g .ct-point,.ct-series-g .ct-slice-donut{stroke:#0544d3}.ct-series-g .ct-area,.ct-series-g .ct-slice-donut-solid,.ct-series-g .ct-slice-pie{fill:#0544d3}.ct-series-h .ct-bar,.ct-series-h .ct-line,.ct-series-h .ct-point,.ct-series-h .ct-slice-donut{stroke:#6b0392}.ct-series-h .ct-area,.ct-series-h .ct-slice-donut-solid,.ct-series-h .ct-slice-pie{fill:#6b0392}.ct-series-i .ct-bar,.ct-series-i .ct-line,.ct-series-i .ct-point,.ct-series-i .ct-slice-donut{stroke:#f05b4f}.ct-series-i .ct-area,.ct-series-i .ct-slice-donut-solid,.ct-series-i .ct-slice-pie{fill:#f05b4f}.ct-series-j .ct-bar,.ct-series-j .ct-line,.ct-series-j .ct-point,.ct-series-j .ct-slice-donut{stroke:#dda458}.ct-series-j .ct-area,.ct-series-j .ct-slice-donut-solid,.ct-series-j .ct-slice-pie{fill:#dda458}.ct-series-k .ct-bar,.ct-series-k .ct-line,.ct-series-k .ct-point,.ct-series-k .ct-slice-donut{stroke:#eacf7d}.ct-series-k .ct-area,.ct-series-k .ct-slice-donut-solid,.ct-series-k .ct-slice-pie{fill:#eacf7d}.ct-series-l .ct-bar,.ct-series-l .ct-line,.ct-series-l .ct-point,.ct-series-l .ct-slice-donut{stroke:#86797d}.ct-series-l .ct-area,.ct-series-l .ct-slice-donut-solid,.ct-series-l .ct-slice-pie{fill:#86797d}.ct-series-m .ct-bar,.ct-series-m .ct-line,.ct-series-m .ct-point,.ct-series-m .ct-slice-donut{stroke:#b2c326}.ct-series-m .ct-area,.ct-series-m .ct-slice-donut-solid,.ct-series-m .ct-slice-pie{fill:#b2c326}.ct-series-n .ct-bar,.ct-series-n .ct-line,.ct-series-n .ct-point,.ct-series-n .ct-slice-donut{stroke:#6188e2}.ct-series-n .ct-area,.ct-series-n .ct-slice-donut-solid,.ct-series-n .ct-slice-pie{fill:#6188e2}.ct-series-o .ct-bar,.ct-series-o .ct-line,.ct-series-o .ct-point,.ct-series-o .ct-slice-donut{stroke:#a748ca}.ct-series-o .ct-area,.ct-series-o .ct-slice-donut-solid,.ct-series-o .ct-slice-pie{fill:#a748ca}.ct-square{display:block;position:relative;width:100%}.ct-square:before{display:block;float:left;content:"";width:0;height:0;padding-bottom:100%}.ct-square:after{display:table}.ct-square>svg{display:block;position:absolute;top:0;left:0}.ct-minor-second{display:block;position:relative;width:100%}.ct-minor-second:before{display:block;float:left;content:"";width:0;height:0;padding-bottom:93.75%}.ct-minor-second:after{display:table}.ct-minor-second>svg{display:block;position:absolute;top:0;left:0}.ct-major-second{display:block;position:relative;width:100%}.ct-major-second:before{display:block;float:left;content:"";width:0;height:0;padding-bottom:88.8888888889%}.ct-major-second:after{display:table}.ct-major-second>svg{display:block;position:absolute;top:0;left:0}.ct-minor-third{display:block;position:relative;width:100%}.ct-minor-third:before{display:block;float:left;content:"";width:0;height:0;padding-bottom:83.3333333333%}.ct-minor-third:after{display:table}.ct-minor-third>svg{display:block;position:absolute;top:0;left:0}.ct-major-third{display:block;position:relative;width:100%}.ct-major-third:before{display:block;float:left;content:"";width:0;height:0;padding-bottom:80%}.ct-major-third:after{display:table}.ct-major-third>svg{display:block;position:absolute;top:0;left:0}.ct-perfect-fourth{display:block;position:relative;width:100%}.ct-perfect-fourth:before{display:block;float:left;content:"";width:0;height:0;padding-bottom:75%}.ct-perfect-fourth:after{display:table}.ct-perfect-fourth>svg{display:block;position:absolute;top:0;left:0}.ct-perfect-fifth{display:block;position:relative;width:100%}.ct-perfect-fifth:before{display:block;float:left;content:"";width:0;height:0;padding-bottom:66.6666666667%}.ct-perfect-fifth:after{display:table}.ct-perfect-fifth>svg{display:block;position:absolute;top:0;left:0}.ct-minor-sixth{display:block;position:relative;width:100%}.ct-minor-sixth:before{display:block;float:left;content:"";width:0;height:0;padding-bottom:62.5%}.ct-minor-sixth:after{display:table}.ct-minor-sixth>svg{display:block;position:absolute;top:0;left:0}.ct-golden-section{display:block;position:relative;width:100%}.ct-golden-section:before{display:block;float:left;content:"";width:0;height:0;padding-bottom:61.804697157%}.ct-golden-section:after{content:"";display:table;clear:both}.ct-golden-section>svg{display:block;position:absolute;top:0;left:0}.ct-major-sixth{display:block;position:relative;width:100%}.ct-major-sixth:before{display:block;float:left;content:"";width:0;height:0;padding-bottom:60%}.ct-major-sixth:after{display:table}.ct-major-sixth>svg{display:block;position:absolute;top:0;left:0}.ct-minor-seventh{display:block;position:relative;width:100%}.ct-minor-seventh:before{display:block;float:left;content:"";width:0;height:0;padding-bottom:56.25%}.ct-minor-seventh:after{display:table}.ct-minor-seventh>svg{display:block;position:absolute;top:0;left:0}.ct-major-seventh{display:block;position:relative;width:100%}.ct-major-seventh:before{display:block;float:left;content:"";width:0;height:0;padding-bottom:53.3333333333%}.ct-major-seventh:after{display:table}.ct-major-seventh>svg{display:block;position:absolute;top:0;left:0}.ct-octave{display:block;position:relative;width:100%}.ct-octave:before{display:block;float:left;content:"";width:0;height:0;padding-bottom:50%}.ct-octave:after{display:table}.ct-octave>svg{display:block;position:absolute;top:0;left:0}.ct-major-tenth{display:block;position:relative;width:100%}.ct-major-tenth:before{display:block;float:left;content:"";width:0;height:0;padding-bottom:40%}.ct-major-tenth:after{display:table}.ct-major-tenth>svg{display:block;position:absolute;top:0;left:0}.ct-major-eleventh{display:block;position:relative;width:100%}.ct-major-eleventh:before{display:block;float:left;content:"";width:0;height:0;padding-bottom:37.5%}.ct-major-eleventh:after{display:table}.ct-major-eleventh>svg{display:block;position:absolute;top:0;left:0}.ct-major-twelfth{display:block;position:relative;width:100%}.ct-major-twelfth:before{display:block;float:left;content:"";width:0;height:0;padding-bottom:33.3333333333%}.ct-major-twelfth:after{display:table}.ct-major-twelfth>svg{display:block;position:absolute;top:0;left:0}.ct-double-octave{display:block;position:relative;width:100%}.ct-double-octave:before{display:block;float:left;content:"";width:0;height:0;padding-bottom:25%}.ct-double-octave:after{display:table}.ct-double-octave>svg{display:block;position:absolute;top:0;left:0} ]]> </style> </defs><g');
  source = source.replace(/<\/svg/, `<svg width="585" height = "200" x="50" y="400" font-family="sans-serif" font-size="20px" fill="black" xmlns="http://www.w3.org/2000/svg">${svg_elements}</svg></svg`);

  source = '<?xml version="1.0" standalone="no"?>\r\n' + source;
  return source;
}

function downloadSVG() {
  source = getSVG();

  var url = "data:image/svg+xml;charset=utf-8," + encodeURIComponent(source);

  var link = document.createElement("a");

  link.download = name;
  link.href = url;
  link.click();
}

function downloadPNG() {
  var svg = document.getElementById("stats-chart").getElementsByTagName("svg")[0];
  var svgData = getSVG();
  var canvas = document.createElement("canvas");
  var svgSize = svg.getBoundingClientRect();
  canvas.width = svgSize.width * 3.5;
  canvas.height = svgSize.height * 3.5;
  canvas.style.width = svgSize.width;
  canvas.style.height = svgSize.height;
  var ctx = canvas.getContext("2d");
  ctx.scale(3, 3);
  ctx.fillStyle = 'white';
  ctx.fillRect(0, 0, canvas.width, canvas.height);
  var img = document.createElement("img");
  img.setAttribute("src", "data:image/svg+xml;base64," + btoa(unescape(encodeURIComponent(svgData))));
  img.onload = function() {
    ctx.drawImage(img, 0, 0);
    var canvasdata = canvas.toDataURL("image/png", 1);

    var a = document.createElement("a");
    a.download = "download_img" + ".png";
    a.href = canvasdata;
    document.body.appendChild(a);
    a.click();
  }
}

function downloadCSV() {
  if (csvData == "empty") {
    alert("No chart generated!");
    return;
  }
  var downloadLink = document.createElement("a");
  var blob = new Blob(["\ufeff", csvData]);
  var url = URL.createObjectURL(blob);
  downloadLink.href = url;
  downloadLink.download = "chart-data.csv";

  downloadLink.click();
}