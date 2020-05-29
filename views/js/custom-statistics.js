var csvData;

function changeFunc() {
  var selectBox = document.getElementById("type");
  var selectedValue = selectBox.options[selectBox.selectedIndex].value;
  alert(selectedValue);
  var xhttp = new XMLHttpRequest();
  xhttp.onreadystatechange = function () {
    if (this.readyState == 4 && this.status == 200) {
      document.getElementById("demo").innerHTML = this.responseText;
    }
  };
  xhttp.open("GET", "/chart-institutional", true);
  xhttp.send();
}

function myFunction() {
  document.getElementById("myDropdown").classList.toggle("show");
}

function changeStats() {
  const INSTITUTIONS = ["6.4200029E7", "6.4200103E7", "6.4200031E7", "6.4200146E7", "6.4200116E7", "6.4200056E7", "6.4200139E7", "6.4200147E7", "6.4200161E7", "6.4200054E7", "6.4200145E7", "6.4200156E7", "6.4200073E7", "6.4200153E7", "6.4200059E7", "6.4200039E7", "6.4200081E7", "6.4200128E7", "6.4200131E7", "6.420013E7", "6.4200046E7", "6.4200157E7", "6.4200094E7", "6.4200134E7", "6.4200165E7", "6.4200015E7", "6.4200011E7", "6.4200126E7", "6.4200155E7", "6.42001E7", "6.4200078E7", "6.4200089E7", "6.4200104E7", "6.4200044E7", "6.4200079E7", "6.4200047E7", "6.420002E7", "6.4200049E7", "6.4200057E7", "6.4200119E7", "6.4200167E7", "6.4200061E7", "6.4200151E7", "6.4200032E7", "6.4200042E7", "6.4200082E7", "6.4200088E7", "6.4200037E7", "6.4200109E7", "6.4200023E7", "6.4200006E7", "6.4200117E7", "6.4200115E7", "6.4200028E7", "6.4200137E7", "6.4200008E7", "6.4200083E7", "6.4200012E7", "6.4200005E7", "6.4200123E7", "6.4200038E7", "6.4200068E7", "6.420001E7", "6.4200098E7", "6.420011E7", "6.4200036E7", "6.4200135E7", "6.4200018E7", "6.4200076E7", "6.4200105E7", "6.420015E7", "6.4200169E7", "6.4200097E7", "6.4200106E7", "6.4200051E7", "6.4200136E7", "6.4200065E7", "6.4200168E7", "6.4200112E7", "6.4200102E7", "6.4200052E7", "6.4200113E7", "6.4200085E7", "6.4200062E7", "6.4200013E7", "6.4200162E7", "6.420004E7", "6.4200053E7", "6.4200164E7", "6.4200108E7", "6.4200121E7", "6.420016E7", "6.4200021E7", "6.4200093E7", "6.4200019E7", "6.4200086E7", "6.4200154E7", "6.4200127E7", "6.4200149E7", "6.4200152E7", "6.4200141E7", "6.4200118E7", "6.4200072E7", "6.4200144E7", "6.4200092E7", "6.4200017E7", "6.4200101E7", "6.420012E7", "6.4200009E7", "6.4200014E7", "6.4200171E7", "6.420009E7", "6.4200129E7", "6.4200071E7", "6.4200026E7", "6.4200045E7", "6.4200035E7", "6.4200069E7", "6.4200075E7", "6.4200099E7", "6.4200022E7", "6.4200064E7", "6.4200024E7", "6.4200058E7", "6.4200041E7", "6.4200034E7", "6.4200159E7", "6.4200091E7", "6.4200025E7", "6.4200166E7", "6.4200143E7", "6.420003E7", "6.420005E7", "6.4200033E7", "6.4200063E7", "6.4200084E7", "6.4200138E7", "6.4200124E7", "6.4200114E7", "6.420014E7", "6.420008E7"]

  const COUNTRIES = ["China(Beijing,Shanghai,Jiangsu,Zhejiang)", "Singapore", "Macao", "Hong Kong,China", "Estonia", "Japan", "South Korea", "Canada", "Taiwan", "Finland", "Poland", "Ireland", "Slovenia", "United Kingdom",
  "New Zealand",
  "Netherlands",
  "Sweden",
  "Denmark",
  "Germany",
  "Belgium",
  "Australia",
  "Switzerland",
  "Norway",
  "Czechia",
  "United States",
  "France",
  "Portugal",
  "Austria",
  "Latvia",
  "Russia",
  "Iceland",
  "Lithuania",
  "Hungary",
  "Italy",
  "Luxembourg",
  "Belarus",
  "Croatia",
  "Slovakia",
  "Israel",
  "Turkey",
  "Ukraine",
  "Malta",
  "Greece",
  "Serbia",
  "Cyprus",
  "Chile",
  "United Arab Emirates",
  "Malaysia",
  "Romania",
  "Bulgaria",
  "Moldova",
  "Uruguay",
  "Brunei",
  "Montenegro",
  "Albania",
  "Jordan",
  "Mexico",
  "Costa Rica",
  "Qatar",
  "Thailand",
  "Colombia",
  "Kazakhstan",
  "Azerbaijan",
  "Bosnia and Herzegovina",
  "Peru",
  "Brazil",
  "North Macedonia",
  "Argentina",
  "Georgia",
  "Saudi Arabia",
  "Indonesia",
  "Lebanon",
  "Morocco",
  "Panama",
  "Kosovo",
  "Philippines",
  "Dominican Republic"]

  let nothing_selected = `
  <label for="type">Statistics Type</label>
  <select id="type" onchange="changeStats()">
  <option value="select-option" selected>Select Statistics Type</option>
  <option value="specific-questions">Specific Questions</option>
  <option value="international">International</option>
  <option value="institutional">Institutional</option>
  <option value="random">Random</option>
  </select>`;

  let random_selected = `
  <label for="type">Statistics Type</label>
  <select id="type" onchange="changeStats()">
  <option value="select-option">Select Statistics Type</option>
  <option value="specific-questions">Specific Questions</option>
  <option value="international">International</option>
  <option value="institutional">Institutional</option>
  <option value="random" selected>Random</option>
  </select>
  <button class="button gen-button" onclick="randomStats()"> Generate </button>
  </div>`;


  let international_selected = `
  <label for="type">Statistics Type</label>
  <select id="type" onchange="changeStats()">
  <option value="select-option">Select Statistics Type</option>
  <option value="specific-questions">Specific Questions</option>
  <option value="international" selected>International</option>
  <option value="institutional">Institutional</option>
  <option value="random">Random</option>
  </select>
  <label for="pick-country">Pick Country</label>
  <select id="pick-country" onchange="compareInternational()">
  <option value="select-country">Select Country</option>`

  for (var i = 0; i < COUNTRIES.length; i++) {
    international_selected += '<option value = "' + COUNTRIES[i] + '">' + COUNTRIES[i] + '</option>';
  }

  international_selected += `</select>`;

  let specific_questions_selected = `
  <label for="type">Statistics Type</label>
  <select id="type" onchange="changeStats()">
  <option value="select-option">Select Statistics Type</option>
  <option value="specific-questions" selected>Specific Questions</option>
  <option value="international">International</option>
  <option value="institutional">Institutional</option>
  <option value="random">Random</option>
  </select>
  <label for="category">Category</label>
  <select id="category" onchange="pickCategory()">
  <option value="select-category">Select Category</option>
  <option value="feelings">Feelings</option>
  <option value="trust">Trust</option>
  </select>`;

  var institutional_selected = `
  <label for="type">Statistics Type</label>
  <select id="type" onchange="changeStats()">
  <option value="select-option">Select Statistics Type</option>
  <option value="specific-questions">Specific Questions</option>
  <option value="international">International</option>
  <option value="institutional" selected>Institutional</option>
  <option value="random">Random</option>
  </select>
  <label for="institution">Pick Institution</label>
  <select id="institution" onchange="pickInstitution()">
  <option value="select-Institution" selected>Select Institution</option>
  `

  for (var i = 0; i < INSTITUTIONS.length; i++) {
    institutional_selected += '<option value = "' + INSTITUTIONS[i] + '">' + INSTITUTIONS[i] + '</option>';
  }
  institutional_selected += '</select>';

  var institution_chosen = `
  <label for="type">Statistics Type</label>
  <select id="type" onchange="changeStats()">
  <option value="select-option">Select Statistics Type</option>
  <option value="specific-questions">Specific Questions</option>
  <option value="international">International</option>
  <option value="institutional" selected>Institutional</option>
  <option value="random">Random</option>
  </select>
  <label for="institution">Pick Institution</label>
  <select id="institution" onchange="pickInstitution()">
  <option value="select-Institution">Select Institution</option>
  `

  for (var i = 0; i < INSTITUTIONS.length; i++) {
    institution_chosen += '<option value = "' + INSTITUTIONS[i] + '">' + INSTITUTIONS[i] + '</option>';
  }
  institution_chosen += '</select>'

  var selectBox = document.getElementById("type");
  var selectedValue = selectBox.options[selectBox.selectedIndex].value;

  if (selectedValue === "random") {
    document.getElementById("stats").innerHTML = random_selected;
  } else if (selectedValue === "international") {
    document.getElementById("stats").innerHTML = international_selected;
  } else if (selectedValue === "specific-questions") {
    document.getElementById("stats").innerHTML = specific_questions_selected;
  } else if (selectedValue === "institutional") {
    document.getElementById("stats").innerHTML = institutional_selected;
  } else if (selectedValue === "select-option") {
    var data = {
                // A labels array that can contain any sort of values
                labels: [1, 2, 3, 4],
                // Our series array that contains series objects or in this case series data arrays
                series: [
                []
                ]
            };

            // Create a new line chart object where as first parameter we pass in a selector
            // that is resolving to our chart container element. The Second parameter
            // is the actual data object.
            new Chartist.Line('.ct-chart', data);
            document.getElementById("stats").innerHTML = nothing_selected;
            document.getElementById("chart-title").innerHTML = "Empty Chart";
        }
    }

    function compareInternational() {
      const COUNTRIES = ["China(Beijing,Shanghai,Jiangsu,Zhejiang)", "Singapore", "Macao", "Hong Kong,China", "Estonia", "Japan", "South Korea", "Canada", "Taiwan", "Finland", "Poland", "Ireland", "Slovenia", "United Kingdom",
      "New Zealand",
      "Netherlands",
      "Sweden",
      "Denmark",
      "Germany",
      "Belgium",
      "Australia",
      "Switzerland",
      "Norway",
      "Czechia",
      "United States",
      "France",
      "Portugal",
      "Austria",
      "Latvia",
      "Russia",
      "Iceland",
      "Lithuania",
      "Hungary",
      "Italy",
      "Luxembourg",
      "Belarus",
      "Croatia",
      "Slovakia",
      "Israel",
      "Turkey",
      "Ukraine",
      "Malta",
      "Greece",
      "Serbia",
      "Cyprus",
      "Chile",
      "United Arab Emirates",
      "Malaysia",
      "Romania",
      "Bulgaria",
      "Moldova",
      "Uruguay",
      "Brunei",
      "Montenegro",
      "Albania",
      "Jordan",
      "Mexico",
      "Costa Rica",
      "Qatar",
      "Thailand",
      "Colombia",
      "Kazakhstan",
      "Azerbaijan",
      "Bosnia and Herzegovina",
      "Peru",
      "Brazil",
      "North Macedonia",
      "Argentina",
      "Georgia",
      "Saudi Arabia",
      "Indonesia",
      "Lebanon",
      "Morocco",
      "Panama",
      "Kosovo",
      "Philippines",
      "Dominican Republic"]

      var selectBox = document.getElementById("pick-country");
      var country = selectBox.options[selectBox.selectedIndex].value;

      let nothing_selected = `
  <label for="type">Statistics Type</label>
  <select id="type" onchange="changeStats()">
  <option value="select-option">Select Statistics Type</option>
  <option value="specific-questions">Specific Questions</option>
  <option value="international" selected>International</option>
  <option value="institutional">Institutional</option>
  <option value="random">Random</option>
  </select>
  <label for="pick-country">Pick Country</label>
  <select id="pick-country" onchange="compareInternational()">
  <option value="select-country">Select Country</option>`

  for (var i = 0; i < COUNTRIES.length; i++) {
    nothing_selected += '<option value = "' + COUNTRIES[i] + '">' + COUNTRIES[i] + '</option>';
  }

  nothing_selected += `</select>`;

      let international_selected = `
      <label for="type">Statistics Type</label>
      <select id="type" onchange="changeStats()">
      <option value="select-option">Select Statistics Type</option>
      <option value="specific-questions">Specific Questions</option>
      <option value="international" selected>International</option>
      <option value="institutional">Institutional</option>
      <option value="random">Random</option>
      </select>
      <label for="pick-country">Pick Country</label>
      <select id="pick-country" onchange="compareInternational()">
      <option value="select-country">Select Country</option>`

      for (var i = 0; i < COUNTRIES.length; i++) {
        if(country == COUNTRIES[i]) {
          international_selected += '<option value = "' + COUNTRIES[i] + '" selected>' + COUNTRIES[i] + '</option>';
        }
        else {
          international_selected += '<option value = "' + COUNTRIES[i] + '">' + COUNTRIES[i] + '</option>';
        }
      }

      international_selected += `</select>
      <label for="rank-by">Rank By</label>
      <select id="rank-by">
      <option value="select-rank-by">Select Option</option>
      <option value="score">Score</option>
      <option value="tier">Tier</option>
      </select>
      <button class="button gen-button" onclick="generateCountryChart()"> Generate </button>
      `;

      if(country!="select-country") {
        document.getElementById("stats").innerHTML = international_selected;
      } else {
        document.getElementById("stats").innerHTML = nothing_selected;
      }
    }

    function generateCountryChart() {
      var selectBox = document.getElementById("pick-country");
      var country = selectBox.options[selectBox.selectedIndex].value;

      var selectBox2 = document.getElementById("rank-by");
      var rankingOption = selectBox2.options[selectBox2.selectedIndex].value;

      var xhttp = new XMLHttpRequest();
      xhttp.onreadystatechange = function () {
        if (this.readyState == 4 && this.status == 200) {
          resultData = JSON.parse(this.responseText)

          var data = {

          }

          if(rankingOption == "score") {
            data["labels"] = [`Overall Score (${resultData["romania_result"]["AverageScore"]}, ${resultData["second_country_result"]["AverageScore"]})`, `Mathematics Score (${resultData["romania_result"]["MathematicsScore"]}, ${resultData["second_country_result"]["MathematicsScore"]})`, `Science Score (${resultData["romania_result"]["ScienceScore"]}, ${resultData["second_country_result"]["ScienceScore"]})`, `Reading Score (${resultData["romania_result"]["ReadingScore"]}, ${resultData["second_country_result"]["ReadingScore"]}, )`
            ]
            data["series"] = [
            [resultData["romania_result"]["AverageScore"], resultData["romania_result"]["MathematicsScore"], resultData["romania_result"]["ScienceScore"], resultData["romania_result"]["ReadingScore"]
            ],
            [resultData["second_country_result"]["AverageScore"], resultData["second_country_result"]["MathematicsScore"], resultData["second_country_result"]["ScienceScore"], resultData["second_country_result"]["ReadingScore"]
            ]
            ]
            csvData = `Country,Overall Score,Mathematics Score,Science Score,Reading Score\n` +
                      `Romania,${resultData["romania_result"]["AverageScore"]},${resultData["romania_result"]["MathematicsScore"]},${resultData["romania_result"]["ScienceScore"]},${resultData["romania_result"]["ReadingScore"]}\n` +
                      `${country},${resultData["second_country_result"]["AverageScore"]},${resultData["second_country_result"]["MathematicsScore"]},${resultData["second_country_result"]["ScienceScore"]},${resultData["second_country_result"]["ReadingScore"]}`
            //downloadCSV();
          }
          else {
            data["labels"] = [`Overall Ranking (${resultData["romania_result"]["AverageRanking"]}, ${resultData["second_country_result"]["AverageRanking"]})`, `Mathematics Ranking (${resultData["romania_result"]["MathematicsRanking"]}, ${resultData["second_country_result"]["MathematicsRanking"]})`, `Science Ranking (${resultData["romania_result"]["ScienceRanking"]}, ${resultData["second_country_result"]["ScienceRanking"]})`, `Reading Ranking (${resultData["romania_result"]["ReadingRanking"]}, ${resultData["second_country_result"]["ReadingRanking"]}, )`
            ]
            data["series"] = [
            [resultData["romania_result"]["AverageRanking"], resultData["romania_result"]["MathematicsRanking"], resultData["romania_result"]["ScienceRanking"], resultData["romania_result"]["ReadingRanking"]
            ],
            [resultData["second_country_result"]["AverageRanking"], resultData["second_country_result"]["MathematicsRanking"], resultData["second_country_result"]["ScienceRanking"], resultData["second_country_result"]["ReadingRanking"]
            ]
            ]
            csvData = `Country,Overall Ranking,Mathematics Ranking,Science Ranking,Reading Ranking\n` +
                      `Romania,${resultData["romania_result"]["AverageRanking"]},${resultData["romania_result"]["MathematicsRanking"]},${resultData["romania_result"]["ScienceRanking"]},${resultData["romania_result"]["ReadingRanking"]}\n` +
                      `${country},${resultData["second_country_result"]["AverageRanking"]},${resultData["second_country_result"]["MathematicsRanking"]},${resultData["second_country_result"]["ScienceRanking"]},${resultData["second_country_result"]["ReadingRanking"]}`
            //downloadCSV();
          }
          var options = {
            reverseData: true,
        horizontalBars: true,
        axisY: {
            offset: 70
        }
          };
          var chart = new Chartist.Bar('.ct-chart', data, options);
                // //document.getElementById("chart-title").innerHTML = JSON.stringify(Questions[selectedValue]);
                document.getElementById("chart-title").innerHTML = `Countries Romania and ${country} ranked by ${rankingOption}`;
            }

      };


        xhttp.open("POST", "/country-chart", true);
        xhttp.send(JSON.stringify({country: country, rankingOption: rankingOption}));
    }

    function pickInstitution() {
      const INSTITUTIONS = ["6.4200029E7", "6.4200103E7", "6.4200031E7", "6.4200146E7", "6.4200116E7", "6.4200056E7", "6.4200139E7", "6.4200147E7", "6.4200161E7", "6.4200054E7", "6.4200145E7", "6.4200156E7", "6.4200073E7", "6.4200153E7", "6.4200059E7", "6.4200039E7", "6.4200081E7", "6.4200128E7", "6.4200131E7", "6.420013E7", "6.4200046E7", "6.4200157E7", "6.4200094E7", "6.4200134E7", "6.4200165E7", "6.4200015E7", "6.4200011E7", "6.4200126E7", "6.4200155E7", "6.42001E7", "6.4200078E7", "6.4200089E7", "6.4200104E7", "6.4200044E7", "6.4200079E7", "6.4200047E7", "6.420002E7", "6.4200049E7", "6.4200057E7", "6.4200119E7", "6.4200167E7", "6.4200061E7", "6.4200151E7", "6.4200032E7", "6.4200042E7", "6.4200082E7", "6.4200088E7", "6.4200037E7", "6.4200109E7", "6.4200023E7", "6.4200006E7", "6.4200117E7", "6.4200115E7", "6.4200028E7", "6.4200137E7", "6.4200008E7", "6.4200083E7", "6.4200012E7", "6.4200005E7", "6.4200123E7", "6.4200038E7", "6.4200068E7", "6.420001E7", "6.4200098E7", "6.420011E7", "6.4200036E7", "6.4200135E7", "6.4200018E7", "6.4200076E7", "6.4200105E7", "6.420015E7", "6.4200169E7", "6.4200097E7", "6.4200106E7", "6.4200051E7", "6.4200136E7", "6.4200065E7", "6.4200168E7", "6.4200112E7", "6.4200102E7", "6.4200052E7", "6.4200113E7", "6.4200085E7", "6.4200062E7", "6.4200013E7", "6.4200162E7", "6.420004E7", "6.4200053E7", "6.4200164E7", "6.4200108E7", "6.4200121E7", "6.420016E7", "6.4200021E7", "6.4200093E7", "6.4200019E7", "6.4200086E7", "6.4200154E7", "6.4200127E7", "6.4200149E7", "6.4200152E7", "6.4200141E7", "6.4200118E7", "6.4200072E7", "6.4200144E7", "6.4200092E7", "6.4200017E7", "6.4200101E7", "6.420012E7", "6.4200009E7", "6.4200014E7", "6.4200171E7", "6.420009E7", "6.4200129E7", "6.4200071E7", "6.4200026E7", "6.4200045E7", "6.4200035E7", "6.4200069E7", "6.4200075E7", "6.4200099E7", "6.4200022E7", "6.4200064E7", "6.4200024E7", "6.4200058E7", "6.4200041E7", "6.4200034E7", "6.4200159E7", "6.4200091E7", "6.4200025E7", "6.4200166E7", "6.4200143E7", "6.420003E7", "6.420005E7", "6.4200033E7", "6.4200063E7", "6.4200084E7", "6.4200138E7", "6.4200124E7", "6.4200114E7", "6.420014E7", "6.420008E7"]

      var institution_chosen = `
      <label for="type">Statistics Type</label>
      <select id="type" onchange="changeStats()">
      <option value="select-option">Select Statistics Type</option>
      <option value="specific-questions">Specific Questions</option>
      <option value="international">International</option>
      <option value="institutional" selected>Institutional</option>
      <option value="random">Random</option>
      </select>
      <label for="institution">Pick Institution</label>
      <select id="institution" onchange="pickInstitution()">
      <option value="select-Institution">Select Institution</option>
      `
      var selectBox2 = document.getElementById("institution");
      var selectedValue2 = selectBox2.options[selectBox2.selectedIndex].value;
      var selectBoxInst = selectBox2.options[selectBox2.selectedIndex].text;
      for (var i = 0; i < INSTITUTIONS.length; i++) {
        if (INSTITUTIONS[i] == selectBoxInst) {
          institution_chosen += '<option value = "' + INSTITUTIONS[i] + '" selected>' + INSTITUTIONS[i] + '</option>';
        } else {
          institution_chosen += '<option value = "' + INSTITUTIONS[i] + '">' + INSTITUTIONS[i] + '</option>';
        }
      }
      institution_chosen += '</select>' + `
      <label for="option-type">Statistics Options</label>
      <select id="option-type" onchange="chosenInstOption()">
      <option value="select-option2">Select Option</option>
      <option value="gender-option">Gender</option>
      <option value="questions-option">Questions</option>
      <option value="comparison-option">Comparison</option>
      </select>
      `
      document.getElementById("stats").innerHTML = institution_chosen;
    }

    function chosenInstOption() {
      const INSTITUTIONS = ["6.4200029E7", "6.4200103E7", "6.4200031E7", "6.4200146E7", "6.4200116E7", "6.4200056E7", "6.4200139E7", "6.4200147E7", "6.4200161E7", "6.4200054E7", "6.4200145E7", "6.4200156E7", "6.4200073E7", "6.4200153E7", "6.4200059E7", "6.4200039E7", "6.4200081E7", "6.4200128E7", "6.4200131E7", "6.420013E7", "6.4200046E7", "6.4200157E7", "6.4200094E7", "6.4200134E7", "6.4200165E7", "6.4200015E7", "6.4200011E7", "6.4200126E7", "6.4200155E7", "6.42001E7", "6.4200078E7", "6.4200089E7", "6.4200104E7", "6.4200044E7", "6.4200079E7", "6.4200047E7", "6.420002E7", "6.4200049E7", "6.4200057E7", "6.4200119E7", "6.4200167E7", "6.4200061E7", "6.4200151E7", "6.4200032E7", "6.4200042E7", "6.4200082E7", "6.4200088E7", "6.4200037E7", "6.4200109E7", "6.4200023E7", "6.4200006E7", "6.4200117E7", "6.4200115E7", "6.4200028E7", "6.4200137E7", "6.4200008E7", "6.4200083E7", "6.4200012E7", "6.4200005E7", "6.4200123E7", "6.4200038E7", "6.4200068E7", "6.420001E7", "6.4200098E7", "6.420011E7", "6.4200036E7", "6.4200135E7", "6.4200018E7", "6.4200076E7", "6.4200105E7", "6.420015E7", "6.4200169E7", "6.4200097E7", "6.4200106E7", "6.4200051E7", "6.4200136E7", "6.4200065E7", "6.4200168E7", "6.4200112E7", "6.4200102E7", "6.4200052E7", "6.4200113E7", "6.4200085E7", "6.4200062E7", "6.4200013E7", "6.4200162E7", "6.420004E7", "6.4200053E7", "6.4200164E7", "6.4200108E7", "6.4200121E7", "6.420016E7", "6.4200021E7", "6.4200093E7", "6.4200019E7", "6.4200086E7", "6.4200154E7", "6.4200127E7", "6.4200149E7", "6.4200152E7", "6.4200141E7", "6.4200118E7", "6.4200072E7", "6.4200144E7", "6.4200092E7", "6.4200017E7", "6.4200101E7", "6.420012E7", "6.4200009E7", "6.4200014E7", "6.4200171E7", "6.420009E7", "6.4200129E7", "6.4200071E7", "6.4200026E7", "6.4200045E7", "6.4200035E7", "6.4200069E7", "6.4200075E7", "6.4200099E7", "6.4200022E7", "6.4200064E7", "6.4200024E7", "6.4200058E7", "6.4200041E7", "6.4200034E7", "6.4200159E7", "6.4200091E7", "6.4200025E7", "6.4200166E7", "6.4200143E7", "6.420003E7", "6.420005E7", "6.4200033E7", "6.4200063E7", "6.4200084E7", "6.4200138E7", "6.4200124E7", "6.4200114E7", "6.420014E7", "6.420008E7"]

      const Questions = {
        "ST123Q02NA": "Thinking about 2018: My parents support my educational efforts and achievements.",
        "ST123Q03NA": "Thinking about 2018: My parents support me when I am facing difficulties at school.",
        "ST123Q04NA": "Thinking about 2018: My parents encourage me to be confident.",
        "ST186Q10HA": "Thinking about yourself and how you normally feel: how often do you feel as described below? Miserable",
        "ST186Q09HA": "Thinking about yourself and how you normally feel: how often do you feel as described below? Proud",
        "ST186Q08HA": "Thinking about yourself and how you normally feel: how often do you feel as described below? Sad",
        "ST186Q07HA": "Thinking about yourself and how you normally feel: how often do you feel as described below? Lively",
        "ST186Q06HA": "Thinking about yourself and how you normally feel: how often do you feel as described below? Scared",
        "ST186Q05HA": "Thinking about yourself and how you normally feel: how often do you feel as described below? Happy",
        "ST186Q03HA": "Thinking about yourself and how you normally feel: how often do you feel as described below? Cheerful",
        "ST186Q02HA": "Thinking about yourself and how you normally feel: how often do you feel as described below? Afraid",
        "ST186Q01HA": "Thinking about yourself and how you normally feel: how often do you feel as described below? Joyful"
      }

      var gender_chosen = `
      <label for="type">Statistics Type</label>
      <select id="type" onchange="changeStats()">
      <option value="select-option">Select Statistics Type</option>
      <option value="specific-questions">Specific Questions</option>
      <option value="international">International</option>
      <option value="institutional" selected>Institutional</option>
      <option value="random">Random</option>
      </select>
      <label for="institution">Pick Institution</label>
      <select id="institution" onchange="pickInstitution()">
      <option value="select-Institution">Select Institution</option>
      `;

      var selectBox2 = document.getElementById("institution");
      var selectedValue2 = selectBox2.options[selectBox2.selectedIndex].value;
      var selectBoxInst = selectBox2.options[selectBox2.selectedIndex].text;
      for (var i = 0; i < INSTITUTIONS.length; i++) {
        if (INSTITUTIONS[i] == selectBoxInst) {
          gender_chosen += '<option value = "' + INSTITUTIONS[i] + '" selected>' + INSTITUTIONS[i] + '</option>';
        } else {
          gender_chosen += '<option value = "' + INSTITUTIONS[i] + '">' + INSTITUTIONS[i] + '</option>';
        }
      }
      gender_chosen += '</select>' + `
      <label for="option-type">Statistics Options</label>
      <select id="option-type" onchange="chosenInstOption()">
      <option value="select-option2">Select Option</option>
      <option value="gender-option" selected>Gender</option>
      <option value="questions-option">Questions</option>
      <option value="comparison-option">Comparison</option>
      </select>
      <button class="button gen-button" onclick="generateGenderGraph()"> Generate </button>`;

      var questions_chosen = `
      <label for="type">Statistics Type</label>
      <select id="type" onchange="changeStats()">
      <option value="select-option">Select Statistics Type</option>
      <option value="specific-questions">Specific Questions</option>
      <option value="international">International</option>
      <option value="institutional" selected>Institutional</option>
      <option value="random">Random</option>
      </select>
      <label for="institution">Pick Institution</label>
      <select id="institution" onchange="pickInstitution()">
      <option value="select-Institution">Select Institution</option>
      `;


      var selectBox2 = document.getElementById("institution");
      var selectedValue2 = selectBox2.options[selectBox2.selectedIndex].value;
      var selectBoxInst = selectBox2.options[selectBox2.selectedIndex].text;
        // var selectBoxQuestions = document.getElementById("all-questions");
        // var selectBoxQuest = selectBoxQuestions.options[selectBoxQuestions.selectedIndes].text;
        for (var i = 0; i < INSTITUTIONS.length; i++) {
          if (INSTITUTIONS[i] == selectBoxInst) {
            questions_chosen += '<option value = "' + INSTITUTIONS[i] + '" selected>' + INSTITUTIONS[i] + '</option>';
          } else {
            questions_chosen += '<option value = "' + INSTITUTIONS[i] + '">' + INSTITUTIONS[i] + '</option>';
          }
        }
        questions_chosen += '</select>' + `
        <label for="option-type">Statistics Options</label>
        <select id="option-type" onchange="chosenInstOption()">
        <option value="select-option2">Select Option</option>
        <option value="gender-option">Gender</option>
        <option value="questions-option" selected>Questions</option>
        <option value="comparison-option">Comparison</option>
        </select>
        <label for="all-questions">Questions</label>
        <select id="all-questions">
        <option value="select-question" selected>Select Question</option>`
        for (question in Questions) {
          questions_chosen += '<option value = "' + question + '">' + Questions[question] + '</option>';
        }
        questions_chosen += `</select>
        <button class="button gen-button" onclick="chooseInstQuestions()"> Generate </button>
        </div>
        `;

        var comparison_chosen = `
        <label for="type">Statistics Type</label>
        <select id="type" onchange="changeStats()">
        <option value="select-option">Select Statistics Type</option>
        <option value="specific-questions">Specific Questions</option>
        <option value="international">International</option>
        <option value="institutional" selected>Institutional</option>
        <option value="random">Random</option>
        </select>
        <label for="institution">Pick Institution</label>
        <select id="institution" onchange="pickInstitution()">
        <option value="select-Institution">Select Institution</option>
        `;


        var selectBox2 = document.getElementById("institution");
        var selectedValue2 = selectBox2.options[selectBox2.selectedIndex].value;
        var selectBoxInst = selectBox2.options[selectBox2.selectedIndex].text;
        // var selectBoxQuestions = document.getElementById("all-questions");
        // var selectBoxQuest = selectBoxQuestions.options[selectBoxQuestions.selectedIndes].text;
        for (var i = 0; i < INSTITUTIONS.length; i++) {
          if (INSTITUTIONS[i] == selectBoxInst) {
            comparison_chosen += '<option value = "' + INSTITUTIONS[i] + '" selected>' + INSTITUTIONS[i] + '</option>';
          } else {
            comparison_chosen += '<option value = "' + INSTITUTIONS[i] + '">' + INSTITUTIONS[i] + '</option>';
          }
        }
        comparison_chosen += '</select>' + `
        <label for="option-type">Statistics Options</label>
        <select id="option-type" onchange="chosenInstOption()">
        <option value="select-option2">Select Option</option>
        <option value="gender-option">Gender</option>
        <option value="questions-option" >Questions</option>
        <option value="comparison-option" selected>Comparison</option>
        </select>
        <label for="pick-institution2">Pick Institution #2</label>
        <select id="pick-institution2" onchange="pickQuestionForComparison()">
        <option value="select-option2" selected>Select Institution #2</option>`
        for (var i = 0; i < INSTITUTIONS.length; i++) {
          comparison_chosen += '<option value = "' + INSTITUTIONS[i] + '">' + INSTITUTIONS[i] + '</option>';
        }
        comparison_chosen += `</select>
        `;

        var selectBox = document.getElementById("option-type");
        var selectedValue = selectBox.options[selectBox.selectedIndex].value;
        if (selectedValue == "questions-option") {
          document.getElementById("stats").innerHTML = questions_chosen;
        } else if (selectedValue == "gender-option") {
          document.getElementById("stats").innerHTML = gender_chosen;
        } else if (selectedValue == "comparison-option") {
          document.getElementById("stats").innerHTML = comparison_chosen;
        }
    }

    function pickQuestionForComparison() {

      const INSTITUTIONS = ["6.4200029E7", "6.4200103E7", "6.4200031E7", "6.4200146E7", "6.4200116E7", "6.4200056E7", "6.4200139E7", "6.4200147E7", "6.4200161E7", "6.4200054E7", "6.4200145E7", "6.4200156E7", "6.4200073E7", "6.4200153E7", "6.4200059E7", "6.4200039E7", "6.4200081E7", "6.4200128E7", "6.4200131E7", "6.420013E7", "6.4200046E7", "6.4200157E7", "6.4200094E7", "6.4200134E7", "6.4200165E7", "6.4200015E7", "6.4200011E7", "6.4200126E7", "6.4200155E7", "6.42001E7", "6.4200078E7", "6.4200089E7", "6.4200104E7", "6.4200044E7", "6.4200079E7", "6.4200047E7", "6.420002E7", "6.4200049E7", "6.4200057E7", "6.4200119E7", "6.4200167E7", "6.4200061E7", "6.4200151E7", "6.4200032E7", "6.4200042E7", "6.4200082E7", "6.4200088E7", "6.4200037E7", "6.4200109E7", "6.4200023E7", "6.4200006E7", "6.4200117E7", "6.4200115E7", "6.4200028E7", "6.4200137E7", "6.4200008E7", "6.4200083E7", "6.4200012E7", "6.4200005E7", "6.4200123E7", "6.4200038E7", "6.4200068E7", "6.420001E7", "6.4200098E7", "6.420011E7", "6.4200036E7", "6.4200135E7", "6.4200018E7", "6.4200076E7", "6.4200105E7", "6.420015E7", "6.4200169E7", "6.4200097E7", "6.4200106E7", "6.4200051E7", "6.4200136E7", "6.4200065E7", "6.4200168E7", "6.4200112E7", "6.4200102E7", "6.4200052E7", "6.4200113E7", "6.4200085E7", "6.4200062E7", "6.4200013E7", "6.4200162E7", "6.420004E7", "6.4200053E7", "6.4200164E7", "6.4200108E7", "6.4200121E7", "6.420016E7", "6.4200021E7", "6.4200093E7", "6.4200019E7", "6.4200086E7", "6.4200154E7", "6.4200127E7", "6.4200149E7", "6.4200152E7", "6.4200141E7", "6.4200118E7", "6.4200072E7", "6.4200144E7", "6.4200092E7", "6.4200017E7", "6.4200101E7", "6.420012E7", "6.4200009E7", "6.4200014E7", "6.4200171E7", "6.420009E7", "6.4200129E7", "6.4200071E7", "6.4200026E7", "6.4200045E7", "6.4200035E7", "6.4200069E7", "6.4200075E7", "6.4200099E7", "6.4200022E7", "6.4200064E7", "6.4200024E7", "6.4200058E7", "6.4200041E7", "6.4200034E7", "6.4200159E7", "6.4200091E7", "6.4200025E7", "6.4200166E7", "6.4200143E7", "6.420003E7", "6.420005E7", "6.4200033E7", "6.4200063E7", "6.4200084E7", "6.4200138E7", "6.4200124E7", "6.4200114E7", "6.420014E7", "6.420008E7"]

      const Questions = {
        "ST123Q02NA": "Thinking about 2018: My parents support my educational efforts and achievements.",
        "ST123Q03NA": "Thinking about 2018: My parents support me when I am facing difficulties at school.",
        "ST123Q04NA": "Thinking about 2018: My parents encourage me to be confident.",
        "ST186Q10HA": "Thinking about yourself and how you normally feel: how often do you feel as described below? Miserable",
        "ST186Q09HA": "Thinking about yourself and how you normally feel: how often do you feel as described below? Proud",
        "ST186Q08HA": "Thinking about yourself and how you normally feel: how often do you feel as described below? Sad",
        "ST186Q07HA": "Thinking about yourself and how you normally feel: how often do you feel as described below? Lively",
        "ST186Q06HA": "Thinking about yourself and how you normally feel: how often do you feel as described below? Scared",
        "ST186Q05HA": "Thinking about yourself and how you normally feel: how often do you feel as described below? Happy",
        "ST186Q03HA": "Thinking about yourself and how you normally feel: how often do you feel as described below? Cheerful",
        "ST186Q02HA": "Thinking about yourself and how you normally feel: how often do you feel as described below? Afraid",
        "ST186Q01HA": "Thinking about yourself and how you normally feel: how often do you feel as described below? Joyful"
      }

      var institution2_chosen = `
      <label for="type">Statistics Type</label>
      <select id="type" onchange="changeStats()">
      <option value="select-option">Select Statistics Type</option>
      <option value="specific-questions">Specific Questions</option>
      <option value="international">International</option>
      <option value="institutional" selected>Institutional</option>
      <option value="random">Random</option>
      </select>
      <label for="institution">Pick Institution</label>
      <select id="institution" onchange="pickInstitution()">
      <option value="select-Institution">Select Institution</option>
      `;


      var selectBox2 = document.getElementById("institution");
      var selectedValue2 = selectBox2.options[selectBox2.selectedIndex].value;
      var selectBoxInst = selectBox2.options[selectBox2.selectedIndex].text;
        // var selectBoxQuestions = document.getElementById("all-questions");
        // var selectBoxQuest = selectBoxQuestions.options[selectBoxQuestions.selectedIndes].text;
        for (var i = 0; i < INSTITUTIONS.length; i++) {
          if (INSTITUTIONS[i] == selectBoxInst) {
            institution2_chosen += '<option value = "' + INSTITUTIONS[i] + '" selected>' + INSTITUTIONS[i] + '</option>';
          } else {
            institution2_chosen += '<option value = "' + INSTITUTIONS[i] + '">' + INSTITUTIONS[i] + '</option>';
          }
        }
        institution2_chosen += '</select>' + `
        <label for="option-type">Statistics Options</label>
        <select id="option-type" onchange="pickQuestionForComparison()">
        <option value="select-option2">Select Option</option>
        <option value="gender-option">Gender</option>
        <option value="questions-option" >Questions</option>
        <option value="comparison-option" selected>Comparison</option>
        </select>
        <label for="pick-institution2">Pick Institution #2</label>
        <select id="pick-institution2">
        <option value="select-option2" selected>Select Institution #2</option>`
        var selectBox3 = document.getElementById("pick-institution2");
        var selectedValue2 = selectBox2.options[selectBox3.selectedIndex].value;
        var selectBoxInst2 = selectBox2.options[selectBox3.selectedIndex].text;
        for (var i = 0; i < INSTITUTIONS.length; i++) {
          if (INSTITUTIONS[i] == selectBoxInst2) {
            institution2_chosen += '<option value = "' + INSTITUTIONS[i] + '" selected>' + INSTITUTIONS[i] + '</option>';
          } else {
            institution2_chosen += '<option value = "' + INSTITUTIONS[i] + '">' + INSTITUTIONS[i] + '</option>';
          }
        }

        institution2_chosen += `</select>
        <label for="institution2-question">Pick Question</label>
        <select id="institution2-question">
        <option value="select-question-comparison" selected>Select Question</option>`
        for (question in Questions) {
          institution2_chosen += '<option value = "' + question + '">' + Questions[question] + '</option>';
        }
        institution2_chosen += `</select>
        <button class="button gen-button" onclick="generateComparisonChart()"> Generate </button>
        </div>`

        var selectBox = document.getElementById("pick-institution2");
        var selectedValue = selectBox.options[selectBox.selectedIndex].value;
        if (selectedValue !== "select-option2") {
          document.getElementById("stats").innerHTML = institution2_chosen;
        }
    }

    function generateComparisonChart() {
      var selectBox = document.getElementById("institution");
      var institution1 = selectBox.options[selectBox.selectedIndex].value;

      var selectBox2 = document.getElementById("pick-institution2");
      var institution2 = selectBox2.options[selectBox2.selectedIndex].value;

      var selectBox3 = document.getElementById("institution2-question");
      var question = selectBox3.options[selectBox3.selectedIndex].value;

      var xhttp = new XMLHttpRequest();
      xhttp.onreadystatechange = function () {
        if (this.readyState == 4 && this.status == 200) {
          resultData = JSON.parse(this.responseText)

          csvData = `Question,Institution,Very Rarely,Rarely,Often,Very Often\n` +
                    `${selectBox3.options[selectBox3.selectedIndex].text},${institution1},${resultData["inst_1_result_1"]},${resultData["inst_1_result_2"]},${resultData["inst_1_result_3"]},${resultData["inst_1_result_4"]}\n` +
                    `${selectBox3.options[selectBox3.selectedIndex].text},${institution2},${resultData["inst_2_result_1"]},${resultData["inst_2_result_2"]},${resultData["inst_2_result_3"]},${resultData["inst_2_result_4"]}`

          var data = {
                    //labels: [1, 2, 3, 4],
                    labels: [`Very Rarely (${resultData["inst_1_result_1"]}, ${resultData["inst_2_result_1"]})`,
                    `Rarely (${resultData["inst_1_result_2"]}, ${resultData["inst_2_result_2"]})`,
                    `Often (${resultData["inst_1_result_3"]}, ${resultData["inst_2_result_3"]})`,
                    `Very Often (${resultData["inst_1_result_4"]}, ${resultData["inst_2_result_4"]})`],
                    series: [
                    [resultData["inst_1_result_1"], resultData["inst_1_result_2"], resultData["inst_1_result_3"], resultData["inst_1_result_4"]],
                    [resultData["inst_2_result_1"], resultData["inst_2_result_2"], resultData["inst_2_result_3"], resultData["inst_2_result_4"]]
                    ]
                };
                var options = {
                  seriesBarDistance: 10
                };
                var chart = new Chartist.Bar('.ct-chart', data, options);
                //document.getElementById("chart-title").innerHTML = JSON.stringify(Questions[selectedValue]);
                document.getElementById("chart-title").innerHTML = `"${selectBox3.options[selectBox3.selectedIndex].text}"
                Asked in institutions ${institution1} and ${institution2}`;
            }
        };


        xhttp.open("POST", "/comparison-chart", true);
        xhttp.send(JSON.stringify({institution1: institution1, institution2: institution2, questionId: question}));

    }

    function chooseInstQuestions() {
      var selectBox = document.getElementById("institution");
      var selectedValue = selectBox.options[selectBox.selectedIndex].value;
      var selectQuest = document.getElementById("all-questions");
      var selectValueQ = selectQuest.options[selectQuest.selectedIndex].value;
      var selectQT = selectQuest.options[selectQuest.selectedIndex].text;
      var xhttp = new XMLHttpRequest();
      xhttp.onreadystatechange = function () {
        if (this.readyState == 4 && this.status == 200) {
          resultData = JSON.parse(this.responseText)

          csvData = `Question,Institution,Very Rarely,Rarely,Often,Very Often\n` +
                    `${selectQT},${selectedValue},${resultData["result1"]},${resultData["result2"]},${resultData["result3"]},${resultData["result4"]}`

          var data = {
            series: [resultData['result1'], resultData['result2'], resultData['result3'], resultData['result4']]
          };

          var sum = function (a, b) {
            return a + b
          };

          var chart = new Chartist.Pie('.ct-chart', data, {
            labelInterpolationFnc: function (value) {
              if (resultData["result1"] == value) {
                return 'Very Rarely (' + Math.round(value / data.series.reduce(sum) * 100) + '%) - ' + resultData['result1'];
              } else if (resultData["result2"] == value) {
                return 'Rarely (' + Math.round(value / data.series.reduce(sum) * 100) + '%) - ' + resultData['result2'];
              } else if (resultData["result3"] == value) {
                return 'Often (' + Math.round(value / data.series.reduce(sum) * 100) + '%) - ' + resultData['result3'];
              } else if (resultData["result4"] == value) {
                return 'Very Often (' + Math.round(value / data.series.reduce(sum) * 100) + '%) - ' + resultData['result4'];
              }
            }
          });
          document.getElementById("chart-title").innerHTML = `"${selectQT}" Asked in institution ${selectBox.options[selectBox.selectedIndex].text}`;
        }
      };
      xhttp.open("POST", "/question-inst-chart", true);
      xhttp.send(JSON.stringify({institutionID: selectedValue, questionID: selectValueQ}));


    }

    function generateGenderGraph() {
      var selectBox = document.getElementById("institution");
      var selectedValue = selectBox.options[selectBox.selectedIndex].value;

      var xhttp = new XMLHttpRequest();
      xhttp.onreadystatechange = function () {
        if (this.readyState == 4 && this.status == 200) {
          resultData = JSON.parse(this.responseText)
          var data = {
            series: [resultData['male'], resultData['female']]
          };

          var sum = function (a, b) {
            return a + b
          };

          csvData = `Institution,Male,Female\n` +
                    `${selectedValue},${resultData['male']},${resultData['female']}`

          new Chartist.Pie('.ct-chart', data, {
            labelInterpolationFnc: function (value) {
              if (value == resultData['male']) {
                return "" + Math.round(value / data.series.reduce(sum) * 100) + '% Male';
              } else {
                return "" + Math.round(value / data.series.reduce(sum) * 100) + '% Female';
              }
            }
          });
          
          document.getElementById("chart-title").innerHTML = "Gender chart for institution: " + selectBox.options[selectBox.selectedIndex].text;
        }
      };
      xhttp.open("POST", "/gender-inst-chart", true);
      xhttp.send(JSON.stringify({institutionID: selectedValue}));
    }

    function pickCategory() {

      const Questions = {
        "ST123Q02NA": "Thinking about 2018: My parents support my educational efforts and achievements.",
        "ST123Q03NA": "Thinking about 2018: My parents support me when I am facing difficulties at school.",
        "ST123Q04NA": "Thinking about 2018: My parents encourage me to be confident.",
        "ST186Q10HA": "Thinking about yourself and how you normally feel: how often do you feel as described below? Miserable",
        "ST186Q09HA": "Thinking about yourself and how you normally feel: how often do you feel as described below? Proud",
        "ST186Q08HA": "Thinking about yourself and how you normally feel: how often do you feel as described below? Sad",
        "ST186Q07HA": "Thinking about yourself and how you normally feel: how often do you feel as described below? Lively",
        "ST186Q06HA": "Thinking about yourself and how you normally feel: how often do you feel as described below? Scared",
        "ST186Q05HA": "Thinking about yourself and how you normally feel: how often do you feel as described below? Happy",
        "ST186Q03HA": "Thinking about yourself and how you normally feel: how often do you feel as described below? Cheerful",
        "ST186Q02HA": "Thinking about yourself and how you normally feel: how often do you feel as described below? Afraid",
        "ST186Q01HA": "Thinking about yourself and how you normally feel: how often do you feel as described below? Joyful"
      }

      nothing_selected = `
      <label for="type">Statistics Type</label>
      <select id="type" onchange="changeStats()">
      <option value="select-option">Select Statistics Type</option>
      <option value="specific-questions" selected>Specific Questions</option>
      <option value="international">International</option>
      <option value="institutional">Institutional</option>
      <option value="random">Random</option>
      </select>
      <label for="category">Category</label>
      <select id="category" onchange="pickCategory()">
      <option value="select-category" selected>Select Category</option>
      <option value="feelings">Feelings</option>
      <option value="trust">Trust</option>
      </select>`

      let trust_selected = `
      <label for="type">Statistics Type</label>
      <select id="type" onchange="changeStats()">
      <option value="select-option">Select Statistics Type</option>
      <option value="specific-questions" selected>Specific Questions</option>
      <option value="international">International</option>
      <option value="institutional">Institutional</option>
      <option value="random">Random</option>
      </select>
      <label for="category">Category</label>
      <select id="category" onchange="pickCategory()">
      <option value="select-category">Select Category</option>
      <option value="feelings">Feelings</option>
      <option value="trust" selected>Trust</option>
      </select>
      <label for="question">Question</label>
      <select id="question">
      <option value="ST123Q02NA">${Questions["ST123Q02NA"]}</option>
      <option value="ST123Q03NA">${Questions["ST123Q03NA"]}</option>
      <option value="ST123Q04NA">${Questions["ST123Q04NA"]}</option>
      </select>
      <button class="button gen-button" onclick="generateByQuestion()"> Generate </button>
      </div>`;

      let feelings_selected = `
      <label for="type">Statistics Type</label>
      <select id="type" onchange="changeStats()">
      <option value="select-option">Select Statistics Type</option>
      <option value="specific-questions" selected>Specific Questions</option>
      <option value="international">International</option>
      <option value="institutional">Institutional</option>
      <option value="random">Random</option>
      </select>
      <label for="category">Category</label>
      <select id="category" onchange="pickCategory()">
      <option value="select-category">Select Category</option>
      <option value="feelings" selected>Feelings</option>
      <option value="trust">Trust</option>
      </select>
      <label for="question">Question</label>
      <select id="question">
      <option value="ST186Q05HA">${Questions["ST186Q05HA"]}</option>
      <option value="ST186Q06HA">${Questions["ST186Q06HA"]}</option>
      <option value="ST186Q07HA">${Questions["ST186Q07HA"]}</option>
      <option value="ST186Q10HA">${Questions["ST186Q10HA"]}</option>
      <option value="ST186Q09HA">${Questions["ST186Q09HA"]}</option>
      <option value="ST186Q02HA">${Questions["ST186Q02HA"]}</option>
      <option value="ST186Q01HA">${Questions["ST186Q01HA"]}</option>
      <option value="ST186Q08HA">${Questions["ST186Q08HA"]}</option>
      <option value="ST186Q03HA">${Questions["ST186Q03HA"]}</option>
      </select>
      <button class="button gen-button" onclick="generateByQuestion()"> Generate </button>
      </div>`;

      var selectBox = document.getElementById("category");
      var selectedValue = selectBox.options[selectBox.selectedIndex].value;

      if (selectedValue === "trust") {
        document.getElementById("stats").innerHTML = trust_selected;
      } else if (selectedValue === "feelings") {
        document.getElementById("stats").innerHTML = feelings_selected;
      } else if (selectedValue === "select-category") {
        document.getElementById("stats").innerHTML = nothing_selected;
      }

    }

    function generateByQuestion() {
      var selectBox = document.getElementById("question");
      var selectedValue = selectBox.options[selectBox.selectedIndex].value;
      var question = selectBox.options[selectBox.selectedIndex].text;

      var xhttp = new XMLHttpRequest();
      xhttp.onreadystatechange = function () {
        if (this.readyState == 4 && this.status == 200) {
          resultData = JSON.parse(this.responseText)
          csvData = `Question,Very Rarely,Rarely,Often,Very Often\n` +
                    `${question},${resultData["result1"]},${resultData["result2"]},${resultData["result3"]},${resultData["result4"]}`

          var data = {
                    //labels: [1, 2, 3, 4],
                    labels: [`Very Rarely (${resultData["result1"]})`, `Rarely (${resultData["result2"]})`, `Often (${resultData["result3"]})`, `Very Often (${resultData["result4"]})`],
                    series: [[resultData["result1"], resultData["result2"], resultData["result3"], resultData["result4"]]]
                };
                var options = {
                  seriesBarDistance: 5,
                  showLabel: true
                };
                var chart = new Chartist.Bar('.ct-chart', data, options);
                //document.getElementById("chart-title").innerHTML = JSON.stringify(Questions[selectedValue]);
                document.getElementById("chart-title").innerHTML = question;
            }
        };
        xhttp.open("POST", "/question-chart", true);
        xhttp.send(JSON.stringify({questionId: selectedValue}));
    }

    function generateChart() {
      var selectBox = document.getElementById("gender");
      var selectedValue = selectBox.options[selectBox.selectedIndex].value;

      var xhttp = new XMLHttpRequest();
      xhttp.onreadystatechange = function () {
        if (this.readyState == 4 && this.status == 200) {

                /*let genderData  = JSON.parse(this.responseText)
                let maleCount   = genderData['male']
                let femaleCount = genderData['female']
                let maleLabel   = 'Male (' + maleCount + ')'
                let femaleLabel = 'Female (' + femaleCount + ')'
                var data = {
                    labels: [maleLabel, femaleLabel],
                    series: [ [maleCount, femaleCount] ]
                };
                var options = {
                    seriesBarDistance: 10,
                    showLabel: true
                };
                var chart = new Chartist.Bar('.ct-chart', data, options);*/

                genderData = JSON.parse(this.responseText)
                var count
                var label

                if (selectedValue === "male") {
                  count = genderData['male']
                  label = 'Male (' + count + ')'
                } else {
                  count = genderData['female']
                  label = 'Female (' + count + ')'
                }

                var data = {
                  labels: [label],
                  series: [[count]]
                };
                var options = {
                  seriesBarDistance: 10,
                  showLabel: true
                };
                var chart = new Chartist.Bar('.ct-chart', data, options);
            }
        };
        xhttp.open("GET", "/chart-gender", true);
        xhttp.send();
    }

    window.onclick = function (event) {
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
    }

function getSVG() {
  var svg = document.getElementById("stats-chart").getElementsByTagName("svg")[0];

  var serializer = new XMLSerializer();
  var source = serializer.serializeToString(svg);

  source = source.replace(/xmlns="http:\/\/www\.w3\.org\/2000\/xmlns\/"/g, '');
  var title = document.getElementById("chart-title").innerHTML

  source = source.replace(/<g/, '<defs> <style type="text/css"> <![CDATA[ .ct-bar {fill: none; stroke-width: 10px;} .ct-series-a .ct-bar {stroke: #f1aa0b;} .ct-series-b .ct-bar {stroke: #db990a;} .ct-grid { stroke: rgba(0,0,0,.2); stroke-width: 1px; stroke-dasharray: 2px; background-color: white; color: #2a3e52; border-color: #2a3e52; margin: 0; padding: 0; min-width: fit-content; } .ct-label { font-size: .75rem; line-height: 1; } .ct-series-a .ct-slice-pie{fill:#d70206}     .ct-slice-pie{fill:#f05b4f}.ct-series-c .ct-bar,.ct-series-c .ct-line,.ct-series-c .ct-point,.ct-series-c .ct-slice-donut{stroke:#f4c63d}.ct-series-c .ct-area,.ct-series-c .ct-slice-donut-solid,.ct-series-c .ct-slice-pie{fill:#f4c63d}.ct-series-d .ct-bar,.ct-series-d .ct-line,.ct-series-d .ct-point,.ct-series-d .ct-slice-donut{stroke:#d17905}.ct-series-d .ct-area,.ct-series-d .ct-slice-donut-solid,.ct-series-d .ct-slice-pie{fill:#d17905}.ct-series-e .ct-bar,.ct-series-e .ct-line,.ct-series-e .ct-point,.ct-series-e .ct-slice-donut{stroke:#453d3f}.ct-series-e .ct-area,.ct-series-e .ct-slice-donut-solid,.ct-series-e .ct-slice-pie{fill:#453d3f}.ct-series-f .ct-bar,.ct-series-f .ct-line,.ct-series-f .ct-point,.ct-series-f .ct-slice-donut{stroke:#59922b}.ct-series-f .ct-area,.ct-series-f .ct-slice-donut-solid,.ct-series-f .ct-slice-pie{fill:#59922b}.ct-series-g .ct-bar,.ct-series-g .ct-line,.ct-series-g .ct-point,.ct-series-g .ct-slice-donut{stroke:#0544d3}.ct-series-g .ct-area,.ct-series-g .ct-slice-donut-solid,.ct-series-g .ct-slice-pie{fill:#0544d3}.ct-series-h .ct-bar,.ct-series-h .ct-line,.ct-series-h .ct-point,.ct-series-h .ct-slice-donut{stroke:#6b0392}.ct-series-h .ct-area,.ct-series-h .ct-slice-donut-solid,.ct-series-h .ct-slice-pie{fill:#6b0392}.ct-series-i .ct-bar,.ct-series-i .ct-line,.ct-series-i .ct-point,.ct-series-i .ct-slice-donut{stroke:#f05b4f}.ct-series-i .ct-area,.ct-series-i .ct-slice-donut-solid,.ct-series-i .ct-slice-pie{fill:#f05b4f}.ct-series-j .ct-bar,.ct-series-j .ct-line,.ct-series-j .ct-point,.ct-series-j .ct-slice-donut{stroke:#dda458}.ct-series-j .ct-area,.ct-series-j .ct-slice-donut-solid,.ct-series-j .ct-slice-pie{fill:#dda458}.ct-series-k .ct-bar,.ct-series-k .ct-line,.ct-series-k .ct-point,.ct-series-k .ct-slice-donut{stroke:#eacf7d}.ct-series-k .ct-area,.ct-series-k .ct-slice-donut-solid,.ct-series-k .ct-slice-pie{fill:#eacf7d}.ct-series-l .ct-bar,.ct-series-l .ct-line,.ct-series-l .ct-point,.ct-series-l .ct-slice-donut{stroke:#86797d}.ct-series-l .ct-area,.ct-series-l .ct-slice-donut-solid,.ct-series-l .ct-slice-pie{fill:#86797d}.ct-series-m .ct-bar,.ct-series-m .ct-line,.ct-series-m .ct-point,.ct-series-m .ct-slice-donut{stroke:#b2c326}.ct-series-m .ct-area,.ct-series-m .ct-slice-donut-solid,.ct-series-m .ct-slice-pie{fill:#b2c326}.ct-series-n .ct-bar,.ct-series-n .ct-line,.ct-series-n .ct-point,.ct-series-n .ct-slice-donut{stroke:#6188e2}.ct-series-n .ct-area,.ct-series-n .ct-slice-donut-solid,.ct-series-n .ct-slice-pie{fill:#6188e2}.ct-series-o .ct-bar,.ct-series-o .ct-line,.ct-series-o .ct-point,.ct-series-o .ct-slice-donut{stroke:#a748ca}.ct-series-o .ct-area,.ct-series-o .ct-slice-donut-solid,.ct-series-o .ct-slice-pie{fill:#a748ca}.ct-square{display:block;position:relative;width:100%}.ct-square:before{display:block;float:left;content:"";width:0;height:0;padding-bottom:100%}.ct-square:after{display:table}.ct-square>svg{display:block;position:absolute;top:0;left:0}.ct-minor-second{display:block;position:relative;width:100%}.ct-minor-second:before{display:block;float:left;content:"";width:0;height:0;padding-bottom:93.75%}.ct-minor-second:after{display:table}.ct-minor-second>svg{display:block;position:absolute;top:0;left:0}.ct-major-second{display:block;position:relative;width:100%}.ct-major-second:before{display:block;float:left;content:"";width:0;height:0;padding-bottom:88.8888888889%}.ct-major-second:after{display:table}.ct-major-second>svg{display:block;position:absolute;top:0;left:0}.ct-minor-third{display:block;position:relative;width:100%}.ct-minor-third:before{display:block;float:left;content:"";width:0;height:0;padding-bottom:83.3333333333%}.ct-minor-third:after{display:table}.ct-minor-third>svg{display:block;position:absolute;top:0;left:0}.ct-major-third{display:block;position:relative;width:100%}.ct-major-third:before{display:block;float:left;content:"";width:0;height:0;padding-bottom:80%}.ct-major-third:after{display:table}.ct-major-third>svg{display:block;position:absolute;top:0;left:0}.ct-perfect-fourth{display:block;position:relative;width:100%}.ct-perfect-fourth:before{display:block;float:left;content:"";width:0;height:0;padding-bottom:75%}.ct-perfect-fourth:after{display:table}.ct-perfect-fourth>svg{display:block;position:absolute;top:0;left:0}.ct-perfect-fifth{display:block;position:relative;width:100%}.ct-perfect-fifth:before{display:block;float:left;content:"";width:0;height:0;padding-bottom:66.6666666667%}.ct-perfect-fifth:after{display:table}.ct-perfect-fifth>svg{display:block;position:absolute;top:0;left:0}.ct-minor-sixth{display:block;position:relative;width:100%}.ct-minor-sixth:before{display:block;float:left;content:"";width:0;height:0;padding-bottom:62.5%}.ct-minor-sixth:after{display:table}.ct-minor-sixth>svg{display:block;position:absolute;top:0;left:0}.ct-golden-section{display:block;position:relative;width:100%}.ct-golden-section:before{display:block;float:left;content:"";width:0;height:0;padding-bottom:61.804697157%}.ct-golden-section:after{content:"";display:table;clear:both}.ct-golden-section>svg{display:block;position:absolute;top:0;left:0}.ct-major-sixth{display:block;position:relative;width:100%}.ct-major-sixth:before{display:block;float:left;content:"";width:0;height:0;padding-bottom:60%}.ct-major-sixth:after{display:table}.ct-major-sixth>svg{display:block;position:absolute;top:0;left:0}.ct-minor-seventh{display:block;position:relative;width:100%}.ct-minor-seventh:before{display:block;float:left;content:"";width:0;height:0;padding-bottom:56.25%}.ct-minor-seventh:after{display:table}.ct-minor-seventh>svg{display:block;position:absolute;top:0;left:0}.ct-major-seventh{display:block;position:relative;width:100%}.ct-major-seventh:before{display:block;float:left;content:"";width:0;height:0;padding-bottom:53.3333333333%}.ct-major-seventh:after{display:table}.ct-major-seventh>svg{display:block;position:absolute;top:0;left:0}.ct-octave{display:block;position:relative;width:100%}.ct-octave:before{display:block;float:left;content:"";width:0;height:0;padding-bottom:50%}.ct-octave:after{display:table}.ct-octave>svg{display:block;position:absolute;top:0;left:0}.ct-major-tenth{display:block;position:relative;width:100%}.ct-major-tenth:before{display:block;float:left;content:"";width:0;height:0;padding-bottom:40%}.ct-major-tenth:after{display:table}.ct-major-tenth>svg{display:block;position:absolute;top:0;left:0}.ct-major-eleventh{display:block;position:relative;width:100%}.ct-major-eleventh:before{display:block;float:left;content:"";width:0;height:0;padding-bottom:37.5%}.ct-major-eleventh:after{display:table}.ct-major-eleventh>svg{display:block;position:absolute;top:0;left:0}.ct-major-twelfth{display:block;position:relative;width:100%}.ct-major-twelfth:before{display:block;float:left;content:"";width:0;height:0;padding-bottom:33.3333333333%}.ct-major-twelfth:after{display:table}.ct-major-twelfth>svg{display:block;position:absolute;top:0;left:0}.ct-double-octave{display:block;position:relative;width:100%}.ct-double-octave:before{display:block;float:left;content:"";width:0;height:0;padding-bottom:25%}.ct-double-octave:after{display:table}.ct-double-octave>svg{display:block;position:absolute;top:0;left:0} ]]> </style> </defs><g');
  source = source.replace(/<\/svg/, `<text x="50" y="500" font-family="sans-serif" font-size="20px" fill="black">${title}</text></svg`);

  //add xml declaration
  source = '<?xml version="1.0" standalone="no"?>\r\n' + source;
  console.log(source)

  //convert svg source to URI data scheme.
  var url = "data:image/svg+xml;charset=utf-8,"+encodeURIComponent(source);

  //set url value to a element's href attribute.
  var link = document.createElement("a");
  
  link.download = name;
  link.href = url;
  link.click();

  document.body.removeChild(link);
}

function downloadCSV(){
  var downloadLink = document.createElement("a");
  var blob = new Blob(["\ufeff", csvData]);
  var url = URL.createObjectURL(blob);
  downloadLink.href = url;
  downloadLink.download = "data.csv";

  document.body.appendChild(downloadLink);
  downloadLink.click();
  document.body.removeChild(downloadLink);
}
