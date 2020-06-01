var csvData = "empty";
var label_array = []

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

  const COUNTRIES = ["China(Beijing,Shanghai,Jiangsu,Zhejiang)", "Singapore", "Macao", "Hong Kong,China", "Estonia", "Japan", "South Korea", "Canada", "Taiwan", "Finland", "Poland", "Ireland", "Slovenia", "United Kingdom", "New Zealand", "Netherlands", "Sweden", "Denmark", "Germany", "Belgium", "Australia", "Switzerland", "Norway", "Czechia", "United States", "France", "Portugal", "Austria", "Latvia", "Russia", "Iceland", "Lithuania", "Hungary", "Italy", "Luxembourg", "Belarus", "Croatia", "Slovakia", "Israel", "Turkey", "Ukraine", "Malta", "Greece", "Serbia", "Cyprus", "Chile", "United Arab Emirates", "Malaysia", "Romania", "Bulgaria", "Moldova", "Uruguay", "Brunei", "Montenegro", "Albania", "Jordan", "Mexico", "Costa Rica", "Qatar", "Thailand", "Colombia", "Kazakhstan", "Azerbaijan", "Bosnia and Herzegovina", "Peru", "Brazil", "North Macedonia", "Argentina", "Georgia", "Saudi Arabia", "Indonesia", "Lebanon", "Morocco", "Panama", "Kosovo", "Philippines", "Dominican Republic"]

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
  <label for="rank-by">Rank By</label>
      <select id="rank-by" onchange="compareInternational()">
      <option value="select-rank-by">Select Option</option>
      <option value="score">Score</option>
      <option value="tier">Tier</option>
      </select>`;

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
  <option value="homecond">Home Conditions</option>
  <option value="reading">Reading</option>
  <option value="agreedisagree">Agree or Disagree</option>
  <option value="math">Mathematics</option>
  <option value="science">Sciences</option>
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
    csvData = "empty";
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

      var country ="";
      var selectBox = document.getElementById("rank-by");
      var rankOption = selectBox.options[selectBox.selectedIndex].value;

      let nothing_selected = `
      <label for="type">Statistics Type</label>
      <select id="type" onchange="changeStats()">
      <option value="select-option">Select Statistics Type</option>
      <option value="specific-questions">Specific Questions</option>
      <option value="international" selected>International</option>
      <option value="institutional">Institutional</option>
      <option value="random">Random</option>
      </select>
      <label for="rank-by">Rank By</label>
          <select id="rank-by" onchange="compareInternational()">
          <option value="select-rank-by">Select Option</option>
          <option value="score">Score</option>
          <option value="tier">Tier</option>
          </select>`;

      let international_selected = `
      <label for="type">Statistics Type</label>
      <select id="type" onchange="changeStats()">
      <option value="select-option">Select Statistics Type</option>
      <option value="specific-questions">Specific Questions</option>
      <option value="international" selected>International</option>
      <option value="institutional">Institutional</option>
      <option value="random">Random</option>
      </select>
      <label for="rank-by">Rank By</label>
          <select id="rank-by" onchange="compareInternational()">`;

          if (rankOption == "score")
            international_selected += `<option value="select-rank-by">Select Option</option> <option value="score" selected>Score</option> <option value="tier">Tier</option>`;
          else if (rankOption == "tier")
            international_selected += `<option value="select-rank-by">Select Option</option> <option value="score" selected>Score</option> <option value="tier" selected>Tier</option>`;

      international_selected +=
          `</select>
      <label for="pick-country">Pick Country</label>
            <select id="pick-country">
            <option value="select-country">Select Country</option>`

            for (var i = 0; i < COUNTRIES.length; i++) {
              if(country == COUNTRIES[i]) {
                international_selected += '<option value = "' + COUNTRIES[i] + '" selected>' + COUNTRIES[i] + '</option>';
                country = COUNTRIES[i];
              }
              else {
                international_selected += '<option value = "' + COUNTRIES[i] + '">' + COUNTRIES[i] + '</option>';
              }
            }
      international_selected += `
      </select>
      <button class="button gen-button" onclick="generateCountryChart()"> Generate </button>`;

      /*let nothing_selected = `
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
      `;*/

      if(rankOption != "select-rank-by") {
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

      if (country == "select-country") {
        alert("No country selected!");
        return;
      }

      var xhttp = new XMLHttpRequest();
      xhttp.onreadystatechange = function () {
        if (this.readyState == 4 && this.status == 200) {
          resultData = JSON.parse(this.responseText)

          var data = {

          }

          if(rankingOption == "score") {
            data["labels"] = [`Overall Score (${resultData["romania_result"]["AverageScore"]}, ${resultData["second_country_result"]["AverageScore"]})`, `Mathematics Score (${resultData["romania_result"]["MathematicsScore"]}, ${resultData["second_country_result"]["MathematicsScore"]})`, `Science Score (${resultData["romania_result"]["ScienceScore"]}, ${resultData["second_country_result"]["ScienceScore"]})`, `Reading Score (${resultData["romania_result"]["ReadingScore"]}, ${resultData["second_country_result"]["ReadingScore"]})`
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
            data["labels"] = [`Overall Ranking (${resultData["romania_result"]["AverageRanking"]}, ${resultData["second_country_result"]["AverageRanking"]})`, `Mathematics Ranking (${resultData["romania_result"]["MathematicsRanking"]}, ${resultData["second_country_result"]["MathematicsRanking"]})`, `Science Ranking (${resultData["romania_result"]["ScienceRanking"]}, ${resultData["second_country_result"]["ScienceRanking"]})`, `Reading Ranking (${resultData["romania_result"]["ReadingRanking"]}, ${resultData["second_country_result"]["ReadingRanking"]})`
            ]
            data["series"] = [
            [78 - resultData["romania_result"]["AverageRanking"],78 -  resultData["romania_result"]["MathematicsRanking"],78 -  resultData["romania_result"]["ScienceRanking"],78 -  resultData["romania_result"]["ReadingRanking"]
            ],
            [78 -  resultData["second_country_result"]["AverageRanking"],78 -  resultData["second_country_result"]["MathematicsRanking"],78 -  resultData["second_country_result"]["ScienceRanking"],78 -  resultData["second_country_result"]["ReadingRanking"]
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

        xhttp.open("GET", "/country-chart" + '?' + `country=${country}&rankingOption=${rankingOption}`, true);
        xhttp.send();
        // xhttp.open("POST", "/country-chart", true);
        // xhttp.send(JSON.stringify({country: country, rankingOption: rankingOption}));
    }

    function pickInstitution() {
      const INSTITUTIONS = ["6.4200029E7", "6.4200103E7", "6.4200031E7", "6.4200146E7", "6.4200116E7", "6.4200056E7", "6.4200139E7", "6.4200147E7", "6.4200161E7", "6.4200054E7", "6.4200145E7", "6.4200156E7", "6.4200073E7", "6.4200153E7", "6.4200059E7", "6.4200039E7", "6.4200081E7", "6.4200128E7", "6.4200131E7", "6.420013E7", "6.4200046E7", "6.4200157E7", "6.4200094E7", "6.4200134E7", "6.4200165E7", "6.4200015E7", "6.4200011E7", "6.4200126E7", "6.4200155E7", "6.42001E7", "6.4200078E7", "6.4200089E7", "6.4200104E7", "6.4200044E7", "6.4200079E7", "6.4200047E7", "6.420002E7", "6.4200049E7", "6.4200057E7", "6.4200119E7", "6.4200167E7", "6.4200061E7", "6.4200151E7", "6.4200032E7", "6.4200042E7", "6.4200082E7", "6.4200088E7", "6.4200037E7", "6.4200109E7", "6.4200023E7", "6.4200006E7", "6.4200117E7", "6.4200115E7", "6.4200028E7", "6.4200137E7", "6.4200008E7", "6.4200083E7", "6.4200012E7", "6.4200005E7", "6.4200123E7", "6.4200038E7", "6.4200068E7", "6.420001E7", "6.4200098E7", "6.420011E7", "6.4200036E7", "6.4200135E7", "6.4200018E7", "6.4200076E7", "6.4200105E7", "6.420015E7", "6.4200169E7", "6.4200097E7", "6.4200106E7", "6.4200051E7", "6.4200136E7", "6.4200065E7", "6.4200168E7", "6.4200112E7", "6.4200102E7", "6.4200052E7", "6.4200113E7", "6.4200085E7", "6.4200062E7", "6.4200013E7", "6.4200162E7", "6.420004E7", "6.4200053E7", "6.4200164E7", "6.4200108E7", "6.4200121E7", "6.420016E7", "6.4200021E7", "6.4200093E7", "6.4200019E7", "6.4200086E7", "6.4200154E7", "6.4200127E7", "6.4200149E7", "6.4200152E7", "6.4200141E7", "6.4200118E7", "6.4200072E7", "6.4200144E7", "6.4200092E7", "6.4200017E7", "6.4200101E7", "6.420012E7", "6.4200009E7", "6.4200014E7", "6.4200171E7", "6.420009E7", "6.4200129E7", "6.4200071E7", "6.4200026E7", "6.4200045E7", "6.4200035E7", "6.4200069E7", "6.4200075E7", "6.4200099E7", "6.4200022E7", "6.4200064E7", "6.4200024E7", "6.4200058E7", "6.4200041E7", "6.4200034E7", "6.4200159E7", "6.4200091E7", "6.4200025E7", "6.4200166E7", "6.4200143E7", "6.420003E7", "6.420005E7", "6.4200033E7", "6.4200063E7", "6.4200084E7", "6.4200138E7", "6.4200124E7", "6.4200114E7", "6.420014E7", "6.420008E7"]

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


      if (selectedValue2 != "select-Institution") {
        document.getElementById("stats").innerHTML = institution_chosen;
      } else {
        document.getElementById("stats").innerHTML = institutional_selected;
      }
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
          else {
           document.getElementById("stats").innerHTML = institution_chosen;
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
      };

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
        <select id="option-type" onchange="chosenInstOption()">
        <option value="select-option2">Select Option</option>
        <option value="gender-option">Gender</option>
        <option value="questions-option" >Questions</option>
        <option value="comparison-option" selected>Comparison</option>
        </select>
        <label for="pick-institution2">Pick Institution #2</label>
        <select id="pick-institution2" onchange="pickQuestionForComparison()">
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
        else {
          document.getElementById("stats").innerHTML = comparison_chosen;
        }
    }

    function generateComparisonChart() {
      var selectBox = document.getElementById("institution");
      var institution1 = selectBox.options[selectBox.selectedIndex].value;

      var selectBox2 = document.getElementById("pick-institution2");
      var institution2 = selectBox2.options[selectBox2.selectedIndex].value;

      var selectBox3 = document.getElementById("institution2-question");
      var question = selectBox3.options[selectBox3.selectedIndex].value;

      if (question == "select-question-comparison") {
        alert("No question chosen!");
        return;
      }

      var xhttp = new XMLHttpRequest();
      xhttp.onreadystatechange = function () {
        if (this.readyState == 4 && this.status == 200) {
          resultData = JSON.parse(this.responseText)

          var keys = `` 
          var answers = ``
          var answers2 = ``
          var series_array = []
          var series_array2 = []
          
          for(var key in resultData.resultsInstitution1) {
            keys += key +  ','
            answers += ',' + resultData.resultsInstitution1[key]
            answers2 += ',' + resultData.resultsInstitution2[key]
            series_array.push(resultData.resultsInstitution1[key])
            series_array2.push(resultData.resultsInstitution2[key])
            label_array.push(key)
          }

          csvData = `Question,Institution,${keys}\n${selectBox3.options[selectBox3.selectedIndex].text},${institution1}${answers}\n${selectBox3.options[selectBox3.selectedIndex].text},${institution2}${answers2}`

          var data = {
                    //labels: [1, 2, 3, 4],
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
                //document.getElementById("chart-title").innerHTML = JSON.stringify(Questions[selectedValue]);
                document.getElementById("chart-title").innerHTML = `"${selectBox3.options[selectBox3.selectedIndex].text}"
                Asked in institutions ${institution1} and ${institution2}`;
            }
        };

        xhttp.open("GET", "/comparison-chart" + '?' + `institution1=${institution1}&institution2=${institution2}&questionId=${question}`, true);
        xhttp.send();
        // xhttp.open("POST", "/comparison-chart", true);
        // xhttp.send(JSON.stringify({institution1: institution1, institution2: institution2, questionId: question}));

    }

    function chooseInstQuestions() {
      var selectBox = document.getElementById("institution");
      var selectedValue = selectBox.options[selectBox.selectedIndex].value;
      var selectQuest = document.getElementById("all-questions");
      var selectValueQ = selectQuest.options[selectQuest.selectedIndex].value;
      var selectQT = selectQuest.options[selectQuest.selectedIndex].text;

      if (selectValueQ == "select-question") {
        alert("No question chosen!");
        return;
      }


      var xhttp = new XMLHttpRequest();
      xhttp.onreadystatechange = function () {
        if (this.readyState == 4 && this.status == 200) {
          resultData = JSON.parse(this.responseText).results

          var keys = `` 
          var answers = ``
          var series_array = []
          for(var key in resultData) {
            keys += key +  ','
            answers += ',' + resultData[key]
            series_array.push(resultData[key])
            label_array.push(key)
          }
          csvData = `Question,Institution,${keys}\n${selectQT},${selectedValue}${answers}`
          var data = {
            series: series_array
          };

          var sum = function (a, b) {
            return a + b
          };
          var index = 0;
          var chart = new Chartist.Pie('.ct-chart', data, {
            labelInterpolationFnc: function (value) {
              return Math.round(value / data.series.reduce(sum) * 100) + '% - ' + label_array[index++];
            }
          });
          document.getElementById("chart-title").innerHTML = `"${selectQT}" Asked in institution ${selectBox.options[selectBox.selectedIndex].text}`;
        }
      };

      xhttp.open("GET", "/question-inst-chart" + '?' + `institutionID=${selectedValue}&questionId=${selectValueQ}`, true);
      xhttp.send();
      // xhttp.open("POST", "/question-inst-chart", true);
      // xhttp.send(JSON.stringify({institutionID: selectedValue, questionId: selectValueQ}));


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

      xhttp.open("GET", "/gender-inst-chart" + '?' + `institutionID=${selectedValue}`, true);
      xhttp.send();
      // xhttp.open("POST", "/gender-inst-chart", true);
      // xhttp.send(JSON.stringify({institutionID: selectedValue}));
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
        "ST186Q01HA": "Thinking about yourself and how you normally feel: how often do you feel as described below? Joyful",
        'ST011Q01TA': 'In your home: A desk to study at',
         'ST011Q02TA': 'In your home: A room of your own',
         'ST011Q03TA': 'In your home: A quiet place to study',
         'ST011Q04TA': 'In your home: A computer you can use for school work',
         'ST011Q05TA': 'In your home: Educational software',
         'ST011Q06TA': 'In your home: A link to the Internet',
         'ST011Q07TA': 'In your home: Classic literature (e.g. Shakespeare)',
         'ST011Q08TA': 'In your home: Books of poetry',
         'ST011Q09TA': 'In your home: Works of art (e.g. paintings)',
         'ST011Q10TA': 'In your home: Books to help with your school work',
         'ST011Q11TA': 'In your home: Technical reference books',
         'ST011Q12TA': 'In your home: A dictionary',
         'ST011Q16NA': 'In your home: Books on art, music, or design',
         'ST011D17TA': 'In your home: Country-specific wealth item 1',
         'ST011D18TA': 'In your home: Country-specific wealth item 2',
         'ST011D19TA': 'In your home: Country-specific wealth item 3',
         'ST012Q01TA': 'How many in your home: Televisions',
         'ST012Q02TA': 'How many in your home: Cars',
         'ST012Q03TA': 'How many in your home: Rooms with a bath or shower',
         'ST012Q05NA': 'How many in your home: Cell phones with Internet access (e.g. smartphones)',
         'ST012Q06NA': 'How many in your home: Computers (desktop computer, portable laptop, or notebook)',
         'ST012Q07NA': 'How many in your home: Tablet computers (e.g. iPad, BlackBerry PlayBook)',
         'ST012Q08NA': 'How many in your home: E-book readers (e.g. Kindle, Kobo, Bookeen)',
         'ST012Q09NA': 'How many in your home: Musical instruments (e.g. guitar, piano)',
         'ST013Q01TA': 'How many books are there in your home?',
         "ST150Q01IA": "During the last month, how often did you have to read for school: Texts that include diagrams or maps",
         "ST158Q07HA": "Taught at school: How to detect phishing or spam emails",
         "ST158Q06HA": "Taught at school: How to detect whether the information is subjective or biased",
         "ST158Q05HA": "Taught at school: How to use the short description below the links in the list of results of a search",
         "ST158Q04HA": "Taught at school: To understand the consequences of making information publicly available online on Facebook, [...]",
         "ST158Q03HA": "Taught at school: How to compare different web pages and decide what information is more relevant for your school work",
         "ST158Q02HA": "Taught at school: How to decide whether to trust information from the Internet",
         "ST158Q01HA": "Taught at school: How to use keywords when using a search engine such as Google, Yahoo, etc.",
         "ST154Q01HA": "this academic year, how many pages was the longest piece of text you had to read for your test language lessons?",
         "ST153Q10HA": "When you have to read, does the teacher ask you to: Write a text related to what you have read",
         "ST153Q09HA": "When you have to read, does the teacher ask you to: Select a passage you liked or disliked and explain why",
         "ST153Q08HA": "When you have to read, does the teacher ask you to: Compare the book with other books or texts on a similar topic",
         "ST153Q06HA": "When you have to read, does the teacher ask you to: Compare the content of the book or the chapter with your own [...]",
         "ST153Q05HA": "When you have to read, does the teacher ask you to: Answer questions about the book or the chapter",
         "ST153Q04HA": "When you have to read, does the teacher ask you to: Give your personal thoughts about the book or the chapter [...]",
         "ST153Q03HA": "When you have to read, does the teacher ask you to: Discuss in small groups with other students who read the same [...]",
         "ST153Q02HA": "When you have to read, does the teacher ask you to: List and write a short description of the main characters",
         "ST153Q01HA": "When you have to read, does the teacher ask you to: Write a summary of the book or the chapter",
         "ST152Q08IA": "In your test language lessons, how often: The teacher poses questions that motivate students to participate actively.",
         "ST152Q07IA": "In your test language lessons, how often: The teacher shows students how the information in texts builds on [...]",
         "ST152Q06IA": "In your test language lessons, how often: The teacher helps students relate the stories they read to their lives.",
         "ST152Q05IA": "In your test language lessons, how often: The teacher encourages students to express their opinion about a text.",
         "ST150Q04HA": "During the last month, how often did you have to read for school: Digital texts including links",
         "ST150Q03IA": "During the last month, how often did you have to read for school: Texts that include tables or graphs",
         "ST150Q02IA": "During the last month, how often did you have to read for school: Fiction (e.g., novels, short stories)",
         "ST160Q05IA": "How much do you agree or disagree? I read only to get information that I need.",
         "ST160Q04IA": "How much do you agree or disagree? For me, reading is a waste of time.",
         "ST160Q03IA": "How much do you agree or disagree? I like talking about books with other people.",
         "ST160Q02IA": "How much do you agree or disagree? Reading is one of my favourite hobbies.",
         "ST160Q01IA": "How much do you agree or disagree? I read only if I have to.",
         "ST165Q05IA": "Usefulness for writing a summary: I read through the text, underlining the most important sentences. Then I write [...]",
         "ST165Q04IA": "Usefulness for writing a summary: I carefully check whether the most important facts in the text are represented [...]",
         "ST165Q03IA": "Usefulness for writing a summary: Before writing the summary, I read the text as many times as possible.",
         "ST165Q02IA": "Usefulness for writing a summary: I try to copy out accurately as many sentences as possible.",
         "ST165Q01IA": "Usefulness for writing a summary: I write a summary. Then I check that each paragraph is covered in the summary, [...]",
         "ST164Q06IA": "Usefulness for understanding and memorising text: I read the text aloud to another person.",
         "ST164Q05IA": "Usefulness for understanding and memorising text: I summarise the text in my own words.",
         "ST164Q04IA": "Usefulness for understanding and memorising text: I underline important parts of the text.",
         "ST164Q03IA": "Usefulness for understanding and memorising text: After reading the text, I discuss its content with other people.",
         "ST164Q02IA": "Usefulness for understanding and memorising text: I quickly read through the text twice.",
         "ST164Q01IA": "Usefulness for understanding and memorising text: I concentrate on the parts of the text that are easy to understand.",
         "ST163Q04HA": "In the PISA test, how do you feel about the reading tasks: I was lost when I had to navigate between different pages.",
         "ST163Q03HA": "In the PISA test, how do you feel about the reading tasks: Many texts were too difficult for me.",
         "ST163Q02HA": "In the PISA test, how do you feel about the reading tasks: There were many words I could not understand.",
         "ST161Q08HA": "Agree: I find it difficult to answer questions about a text.",
         "ST161Q07HA": "Agree: I have to read a text several times before completely understanding it.",
         "ST161Q06HA": "Agree: I have always had difficulty with reading.",
         "ST161Q03HA": "Agree: I read fluently.",
         "ST161Q02HA": "Agree: I am able to understand difficult texts.",
         "ST161Q01HA": "Agree: I am a good reader.",
         "ST185Q03HA": "Agree: I have a clear sense of what gives meaning to my life.", "ST185Q02HA": "Agree: I have discovered a satisfactory meaning in life.",
         "ST185Q01HA": "Agree: My life has clear meaning or purpose.",
         "ST184Q01HA": "Agree: Your intelligence is something about you that you can't change very much.",
         "ST183Q03HA": "Agree: When I am failing, this makes me doubt my plans for the future.",
         "ST183Q02HA": "Agree: When I am failing, I am afraid that I might not have enough talent.",
         "ST183Q01HA": "Agree: When I am failing, I worry about what others think of me.",
         "ST182Q06HA": "Agree: If I am not good at something, I would rather keep struggling to master it than move on to something I may [...]",
         "ST182Q05HA": "Agree: Part of the enjoyment I get from doing things is when I improve on my past performance.",
         "ST182Q04HA": "Agree: Once I start a task, I persist until it is finished.",
         "ST182Q03HA": "Agree: I find satisfaction in working as hard as I can.",
         "ST181Q04HA": "Agree: I try harder when Im in competition with other people.",
         "ST181Q03HA": "Agree: It is important for me to perform better than other people on a task.",
         "ST181Q02HA": "Agree: I enjoy working in situations involving competition with others.",

         "EC001Q02NA": "Approx how many hrs\\week attend add. instruct in the follow. domains? Mathematics",
         "EC014Q01NA": "What does additional math cover? Content covered in regular school courses",
         "EC014Q02NA": "What does additonal math cover? New or additional content notcovered in regular school courses",
         "EC015Q01NA": "Which math instruction do you participate? One-on-one tutoring with a person",
         "EC015Q07NA": "Which math instruction do you participate? Large group study or practice (8 or more students)",
         "EC015Q08NA": "Which math instruction do you participate? Other additional mathematics instruction",
         "EC017Q01NA": "Where do you attend this additional mathematics instruction? In my regular school building",
         "EC017Q02NA": "Where do you attend this additional mathematics instruction? At some other place, i.e., not in my regular school",
         "EC018Q01NA": "The teacher is one of my regular teachers in this years school courses. (mathematics)",
         "EC018Q03NA": "The teacher mainly works for a business or organisation specialised in additional instruction. (mathematics)",
         "EC018Q04NA": "The teacher is not specialised teaching personnel (e.g. a student). (mathematics)",
         "EC019Q03NA": "My teacher does a lot to help me.",
         "EC019Q07NA": "My teacher is pleased when I come up with new solutions to a problem.",
         "EC019Q10NA": "My teacher gives hints or offers strategies that help me to solve a task.",
         "EC019Q12NA": "My teacher helps me to find ways how to solve a problem.",
         "EC023Q02NA": "Why don't you attend additional mathematics in this school year: None of the offerings suit my needs.",
         "EC023Q03NA": "Why don't you attend additional mathematics in this school year: Not many of my friends are doing it.",
         "EC023Q04NA": "Why don't you attend additional mathematics in this school year: I don't have time.",
         "EC023Q05NA": "Why don't you attend additional mathematics in this school year: I don't have the money.",
         "EC023Q06NA": "Why don't you attend additional mathematics in this school year: My teachers are knowledgeable enough.",
         "EC023Q07NA": "Why don't you attend additional mathematics in this school year: My parents don't want me to do it.",
         "EC023Q08NA": "Why don't you attend additional mathematics in this school year: It doesnt seem worth the money.",
         "PA002Q01TA": "Watched TV programmes about science",

         "PA002Q02TA": "Read books on scientific discoveries",
         "PA002Q03TA": "Watched, read or listened to science fiction",
         "PA002Q04TA": "Visited web sites about science topics",
         "PA002Q05TA": "Attended a science club",
         "PA002Q06NA": "Construction play, e.g.Lego bricks",
         "PA002Q07NA": "Took apart technical devices",
         "PA002Q08NA": "Fixed broken objects or items, e.g. broken electronic toys",
         "PA002Q09NA": "Experimented with a science kit, electronics kit, or chemistry set, used a microscope or telescope",
         "PA002Q10NA": "Played computer games with a science content",
         "EC013Q06NA": "Why don't you attend additional science in this school year? My school teachers are knowledgeable enough.",
         "EC013Q07NA": "Why don't you attend additional science in this school year? My parents don't want me to do it.",
         "EC013Q08NA": "Why don't you attend additional science in this school year? It doesnt seem worth the money.",
         "EC013Q09NA": "Why don't you attend additional science in this school year? My teachers say it is not useful.",
         "EC013Q10NA": "Why don't you attend additional science in this school year? I have never considered add. science instruction.",
         "ST071Q01NA": "This school year, approximately how many hours per week do you spend learning in addition? School Science",
         "ST094Q01NA": "Disagree or agree with the statements? I have fun when I am learning broad science",
         "ST094Q02NA": "Disagree or agree with the statements? I like reading about broad science topics.",
         "ST094Q03NA": "Disagree or agree with the statements? I am happy working on broad science topics.",
         "ST094Q04NA": "Disagree or agree with the statements? I enjoy acquiring new knowledge in broad science.",
         "ST094Q05NA": "Disagree or agree with the statements? I am interested in learning about broad science.",
         "ST095Q04NA": "To what extent are you interested in: Biosphere (e.g. ecosystem services, sustainability)",
         "ST095Q07NA": "To what extent are you interested in: Motion and forces (e.g. velocity, friction, magnetic and gravi forces)",
         "ST095Q08NA": "To what extent are you interested in: Energy and its transformation (e.g. conservation, chemical reactions)",
         "ST095Q13NA": "To what extent are you interested in: broad science topics? The Universe and its history",
         "ST095Q15NA": "To what extent are you interested in: broad science topics? How science can help us prevent disease"
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
      <option value="homecond">Home Conditions</option>
      <option value="reading">Reading</option>
      <option value="agreedisagree">Agree or Disagree</option>
      <option value="math">Mathematics</option>
      <option value="science">Sciences</option>
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
      <option value="homecond">Home Conditions</option>
      <option value="reading">Reading</option>
      <option value="agreedisagree">Agree or Disagree</option>
      <option value="math">Mathematics</option>
      <option value="science">Sciences</option>
      </select>
      <label for="question">Question</label>
      <select id="question">
      <option value="select-question">Select Question</option>
      <option value="ST123Q02NA">${Questions["ST123Q02NA"]}</option>
      <option value="ST123Q03NA">${Questions["ST123Q03NA"]}</option>
      <option value="ST123Q04NA">${Questions["ST123Q04NA"]}</option>
      </select>
      <button class="button gen-button" onclick="generateByQuestion()"> Generate </button>
      </div>`;

      let science_selected = `
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
      <option value="trust" >Trust</option>
      <option value="homecond">Home Conditions</option>
      <option value="reading">Reading</option>
      <option value="agreedisagree">Agree or Disagree</option>
      <option value="math">Mathematics</option>
      <option value="science" selected>Sciences</option>
      </select>
      <label for="question">Question</label>
      <select id="question">
      <option value="select-question">Select Question</option>
      <option value="PA002Q01TA">${Questions["PA002Q01TA"]}</option>
      <option value="PA002Q02TA">${Questions["PA002Q02TA"]}</option>
      <option value="PA002Q03TA">${Questions["PA002Q03TA"]}</option>
      <option value="PA002Q04TA">${Questions["PA002Q04TA"]}</option>
      <option value="PA002Q05TA">${Questions["PA002Q05TA"]}</option>
      <option value="PA002Q06NA">${Questions["PA002Q06NA"]}</option>
      <option value="PA002Q07NA">${Questions["PA002Q07NA"]}</option>
      <option value="PA002Q08NA">${Questions["PA002Q08NA"]}</option>
      <option value="PA002Q09NA">${Questions["PA002Q09NA"]}</option>
      <option value="PA002Q10NA">${Questions["PA002Q10NA"]}</option>
      <option value="EC013Q06NA">${Questions["EC013Q06NA"]}</option>
      <option value="EC013Q07NA">${Questions["EC013Q07NA"]}</option>
      <option value="EC013Q08NA">${Questions["EC013Q08NA"]}</option>
      <option value="EC013Q09NA">${Questions["EC013Q09NA"]}</option>
      <option value="EC013Q10NA">${Questions["EC013Q10NA"]}</option>
      <option value="ST071Q01NA">${Questions["ST071Q01NA"]}</option>
      <option value="ST094Q02NA">${Questions["ST094Q02NA"]}</option>
      <option value="ST094Q03NA">${Questions["ST094Q03NA"]}</option>
      <option value="ST094Q04NA">${Questions["ST094Q04NA"]}</option>
      <option value="ST094Q05NA">${Questions["ST094Q05NA"]}</option>
      <option value="ST095Q04NA">${Questions["ST095Q04NA"]}</option>
      <option value="ST095Q07NA">${Questions["ST095Q07NA"]}</option>
      <option value="ST095Q08NA">${Questions["ST095Q08NA"]}</option>
      <option value="ST095Q13NA">${Questions["ST095Q13NA"]}</option>
      <option value="ST095Q15NA">${Questions["ST095Q15NA"]}</option>
      </select>
      <button class="button gen-button" onclick="generateByQuestion()"> Generate </button>
      </div>`;

      let math_selected = `
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
      <option value="homecond">Home Conditions</option>
      <option value="reading">Reading</option>
      <option value="agreedisagree">Agree or Disagree</option>
      <option value="math" selected>Mathematics</option>
      <option value="science">Sciences</option>
      </select>
      <label for="question">Question</label>
      <select id="question">
      <option value="select-question">Select Question</option>
      <option value="EC001Q02NA">${Questions["EC001Q02NA"]}</option>
      <option value="EC014Q01NA">${Questions["EC014Q01NA"]}</option>
      <option value="EC014Q02NA">${Questions["EC014Q02NA"]}</option>
      <option value="EC015Q01NA">${Questions["EC015Q01NA"]}</option>
      <option value="EC015Q07NA">${Questions["EC015Q07NA"]}</option>
      <option value="EC015Q08NA">${Questions["EC015Q08NA"]}</option>
      <option value="EC017Q01NA">${Questions["EC017Q01NA"]}</option>
      <option value="EC017Q02NA">${Questions["EC017Q02NA"]}</option>
      <option value="EC018Q01NA">${Questions["EC018Q01NA"]}</option>
      <option value="EC018Q03NA">${Questions["EC018Q03NA"]}</option>
      <option value="EC018Q04NA">${Questions["EC018Q04NA"]}</option>
      <option value="EC019Q03NA">${Questions["EC019Q03NA"]}</option>
      <option value="EC019Q07NA">${Questions["EC019Q07NA"]}</option>
      <option value="EC019Q10NA">${Questions["EC019Q10NA"]}</option>
      <option value="EC019Q12NA">${Questions["EC019Q12NA"]}</option>
      <option value="EC023Q02NA">${Questions["EC023Q02NA"]}</option>
      <option value="EC023Q03NA">${Questions["EC023Q03NA"]}</option>
      <option value="EC023Q04NA">${Questions["EC023Q04NA"]}</option>
      <option value="EC023Q05NA">${Questions["EC023Q05NA"]}</option>
      <option value="EC023Q06NA">${Questions["EC023Q06NA"]}</option>
      <option value="EC023Q07NA">${Questions["EC023Q07NA"]}</option>
      <option value="EC023Q08NA">${Questions["EC023Q08NA"]}</option>
      </select>
      <button class="button gen-button" onclick="generateByQuestion()"> Generate </button>
      </div>`;

      let agree_selected = `
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
      <option value="homecond">Home Conditions</option>
      <option value="reading">Reading</option>
      <option value="agreedisagree" selected>Agree or Disagree</option>
      <option value="math">Mathematics</option>
      <option value="science">Sciences</option>
      </select>
      <label for="question">Question</label>
      <select id="question">
      <option value="select-question">Select Question</option>
      <option value="ST161Q08HA">${Questions["ST161Q08HA"]}</option>
      <option value="ST161Q07HA">${Questions["ST161Q07HA"]}</option>
      <option value="ST161Q06HA">${Questions["ST161Q06HA"]}</option>
      <option value="ST161Q03HA">${Questions["ST161Q03HA"]}</option>
      <option value="ST161Q02HA">${Questions["ST161Q02HA"]}</option>
      <option value="ST161Q01HA">${Questions["ST161Q01HA"]}</option>
      <option value="ST185Q03HA">${Questions["ST185Q03HA"]}</option>
      <option value="ST185Q01HA">${Questions["ST185Q01HA"]}</option>
      <option value="ST184Q01HA">${Questions["ST184Q01HA"]}</option>
      <option value="ST183Q03HA">${Questions["ST183Q03HA"]}</option>
      <option value="ST183Q02HA">${Questions["ST183Q02HA"]}</option>
      <option value="ST183Q01HA">${Questions["ST183Q01HA"]}</option>
      <option value="ST182Q06HA">${Questions["ST182Q06HA"]}</option>
      <option value="ST182Q05HA">${Questions["ST182Q05HA"]}</option>
      <option value="ST182Q04HA">${Questions["ST182Q04HA"]}</option>
      <option value="ST182Q03HA">${Questions["ST182Q03HA"]}</option>
      <option value="ST181Q04HA">${Questions["ST181Q04HA"]}</option>
      <option value="ST181Q03HA">${Questions["ST181Q03HA"]}</option>
      <option value="ST181Q02HA">${Questions["ST181Q02HA"]}</option>
      </select>
      <button class="button gen-button" onclick="generateByQuestion()"> Generate </button>
      </div>`;

      let reading_selected = `
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
      <option value="homecond">Home Conditions</option>
      <option value="reading" selected>Reading</option>
      <option value="agreedisagree">Agree or Disagree</option>
      <option value="math">Mathematics</option>
      <option value="science">Sciences</option>
      </select>
      <label for="question">Question</label>
      <select id="question">
      <option value="select-question">Select Question</option>
      <option value="ST150Q01IA">${Questions["ST150Q01IA"]}</option>
      <option value="ST158Q07HA">${Questions["ST158Q07HA"]}</option>
      <option value="ST158Q06HA">${Questions["ST158Q06HA"]}</option>
      <option value="ST158Q05HA">${Questions["ST158Q05HA"]}</option>
      <option value="ST158Q04HA">${Questions["ST158Q04HA"]}</option>
      <option value="ST158Q03HA">${Questions["ST158Q03HA"]}</option>
      <option value="ST158Q01HA">${Questions["ST158Q01HA"]}</option>
      <option value="ST154Q01HA">${Questions["ST154Q01HA"]}</option>
      <option value="ST153Q10HA">${Questions["ST153Q10HA"]}</option>
      <option value="ST153Q09HA">${Questions["ST153Q09HA"]}</option>
      <option value="ST153Q08HA">${Questions["ST153Q08HA"]}</option>
      <option value="ST153Q06HA">${Questions["ST153Q06HA"]}</option>
      <option value="ST153Q05HA">${Questions["ST153Q05HA"]}</option>
      <option value="ST153Q04HA">${Questions["ST153Q04HA"]}</option>
      <option value="ST153Q03HA">${Questions["ST153Q03HA"]}</option>
      <option value="ST153Q02HA">${Questions["ST153Q02HA"]}</option>
      <option value="ST153Q01HA">${Questions["ST153Q01HA"]}</option>
      <option value="ST152Q08IA">${Questions["ST152Q08IA"]}</option>
      <option value="ST152Q07IA">${Questions["ST152Q07IA"]}</option>
      <option value="ST152Q06IA">${Questions["ST152Q06IA"]}</option>
      <option value="ST152Q05IA">${Questions["ST152Q05IA"]}</option>
      <option value="ST150Q04HA">${Questions["ST150Q04HA"]}</option>
      <option value="ST150Q03IA">${Questions["ST150Q03IA"]}</option>
      <option value="ST150Q02IA">${Questions["ST150Q02IA"]}</option>
      <option value="ST160Q05IA">${Questions["ST160Q05IA"]}</option>
      <option value="ST160Q04IA">${Questions["ST160Q04IA"]}</option>
      <option value="ST160Q03IA">${Questions["ST160Q03IA"]}</option>
      <option value="ST160Q02IA">${Questions["ST160Q02IA"]}</option>
      <option value="ST160Q01IA">${Questions["ST160Q01IA"]}</option>
      <option value="ST165Q05IA">${Questions["ST165Q05IA"]}</option>
      <option value="ST165Q04IA">${Questions["ST165Q04IA"]}</option>
      <option value="ST165Q03IA">${Questions["ST165Q03IA"]}</option>
      <option value="ST165Q02IA">${Questions["ST165Q02IA"]}</option>
      <option value="ST165Q01IA">${Questions["ST165Q01IA"]}</option>
      <option value="ST164Q06IA">${Questions["ST164Q06IA"]}</option>
      <option value="ST164Q05IA">${Questions["ST164Q05IA"]}</option>
      <option value="ST164Q04IA">${Questions["ST164Q04IA"]}</option>
      <option value="ST164Q03IA">${Questions["ST164Q03IA"]}</option>
      <option value="ST164Q02IA">${Questions["ST164Q02IA"]}</option>
      <option value="ST164Q01IA">${Questions["ST164Q01IA"]}</option>
      <option value="ST163Q04HA">${Questions["ST163Q04HA"]}</option>
      <option value="ST163Q03HA">${Questions["ST163Q03HA"]}</option>
      <option value="ST163Q02HA">${Questions["ST163Q02HA"]}</option>
      </select>
      <button class="button gen-button" onclick="generateByQuestion()"> Generate </button>
      </div>`;

      let homecond_selected = `
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
      <option value="homecond" selected>Home Conditions</option>
      <option value="reading">Reading</option>
      <option value="agreedisagree">Agree/Disagree</option>
      <option value="math">Mathematics</option>
      <option value="science">Sciences</option>
      </select>
      <label for="question">Question</label>
      <select id="question">
      <option value="select-question">Select Question</option>
      <option value="ST011Q01TA">${Questions["ST011Q01TA"]}</option>
      <option value="ST011Q02TA">${Questions["ST011Q02TA"]}</option>
      <option value="ST011Q03TA">${Questions["ST011Q03TA"]}</option>
      <option value="ST011Q05TA">${Questions["ST011Q05TA"]}</option>
      <option value="ST011Q03TA">${Questions["ST011Q03TA"]}</option>
      <option value="ST011Q06TA">${Questions["ST011Q06TA"]}</option>
      <option value="ST011Q07TA">${Questions["ST011Q07TA"]}</option>
      <option value="ST011Q08TA">${Questions["ST011Q08TA"]}</option>
      <option value="ST011Q09TA">${Questions["ST011Q09TA"]}</option>
      <option value="ST011Q10TA">${Questions["ST011Q10TA"]}</option>
      <option value="ST011Q11TA">${Questions["ST011Q11TA"]}</option>
      <option value="ST011Q12TA">${Questions["ST011Q12TA"]}</option>
      <option value="ST011Q16NA">${Questions["ST011Q16NA"]}</option>
      <option value="ST011D17TA">${Questions["ST011D17TA"]}</option>
      <option value="ST011D18TA">${Questions["ST011D18TA"]}</option>
      <option value="ST011D19TA">${Questions["ST011D19TA"]}</option>
      <option value="ST012Q01TA">${Questions["ST012Q01TA"]}</option>
      <option value="ST012Q02TA">${Questions["ST012Q02TA"]}</option>
      <option value="ST012Q03TA">${Questions["ST012Q03TA"]}</option>
      <option value="ST012Q05NA">${Questions["ST012Q05NA"]}</option>
      <option value="ST012Q06NA">${Questions["ST012Q06NA"]}</option>
      <option value="ST012Q07NA">${Questions["ST012Q07NA"]}</option>
      <option value="ST012Q08NA">${Questions["ST012Q08NA"]}</option>
      <option value="ST012Q09NA">${Questions["ST012Q09NA"]}</option>
      <option value="ST013Q01TA">${Questions["ST013Q01TA"]}</option>

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
      <option value="homecond">Home Conditions</option>
      <option value="reading">Reading</option>
      <option value="agreedisagree">Agree or Disagree</option>
      <option value="math">Mathematics</option>
      <option value="science">Sciences</option>
      </select>
      <label for="question">Question</label>
      <select id="question">
      <option value="select-question">Select Question</option>
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
      } else if (selectedValue === "homecond") {
        document.getElementById("stats").innerHTML = homecond_selected;
      } else if (selectedValue === "reading") {
        document.getElementById("stats").innerHTML = reading_selected;
      } else if (selectedValue === "agreedisagree") {
        document.getElementById("stats").innerHTML = agree_selected;
      } else if (selectedValue === "math") {
        document.getElementById("stats").innerHTML = math_selected;
      } else if (selectedValue === "science") {
        document.getElementById("stats").innerHTML = science_selected;
      }

    }

    function generateByQuestion() {
      var selectBox = document.getElementById("question");
      var selectedValue = selectBox.options[selectBox.selectedIndex].value;
      var question = selectBox.options[selectBox.selectedIndex].text;

      if (selectedValue == "select-question") {
        alert("No question selected!");
        return;
      }

      var xhttp = new XMLHttpRequest();
      xhttp.onreadystatechange = function () {
        if (this.readyState == 4 && this.status == 200) {
          resultData = JSON.parse(this.responseText).results

          var keys = `` 
          var answers = ``
          var series_array = []
          
          for(var key in resultData) {
            keys += key +  ','
            answers += ',' + resultData[key]
            series_array.push(resultData[key])
            label_array.push(`${key} (${resultData[key]})`)
          }

          csvData = `Question,${keys}\n${question}${answers}`

          var data = {
                    //labels: [1, 2, 3, 4],
                    labels: label_array,
                    series: [series_array]
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

        xhttp.open("GET", "/question-chart" + '?' + `questionId=${selectedValue}`, true);
        xhttp.send();

        // xhttp.open("POST", "/question-chart", true);
        // xhttp.send(JSON.stringify({questionId: selectedValue}));
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

function returnSvgElements(title) {
  var words = title.split(' ');

  var svg_elements = '';
  var height = 100;

  svg_elements +=  `<text x="50%" y="${height}" dominant-baseline="middle" text-anchor="middle">`;
  var words_length = 0;
  for(var index in words) {
    words_length += words[index].length
    svg_elements +=  words[index] + ' ';
    if(words_length > 40) {
       svg_elements += '</text>';
       height += 25;
       svg_elements += `<text x="50%" y="${height}" dominant-baseline="middle" text-anchor="middle">`;
       words_length = 0;
    }
  }
  if(!svg_elements.endsWith('</text>'))
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

  //add xml declaration
  source = '<?xml version="1.0" standalone="no"?>\r\n' + source;
  return source;


}

function downloadSVG() {

  source = getSVG();

  //convert svg source to URI data scheme.
  var url = "data:image/svg+xml;charset=utf-8,"+encodeURIComponent(source);

  //set url value to a element's href attribute.
  var link = document.createElement("a");

  link.download = name;
  link.href = url;
  link.click();

  //document.body.removeChild(link);
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
  img.onload = function () {
    ctx.drawImage(img, 0, 0);
    var canvasdata = canvas.toDataURL("image/png", 1);

    var a = document.createElement("a");
    a.download = "download_img" + ".png";
    a.href = canvasdata;
    document.body.appendChild(a);
    a.click();
  }
}

function getPNG2() {
  var svg = document.getElementById("stats-chart").getElementsByTagName("svg")[0];

  var serializer = new XMLSerializer();
  var source = serializer.serializeToString(svg);

  source = source.replace(/xmlns="http:\/\/www\.w3\.org\/2000\/xmlns\/"/g, '');
  var title = document.getElementById("chart-title").innerHTML

  source = source.replace(/<g/, '<defs> <style type="text/css"> <![CDATA[ .ct-bar {fill: none; stroke-width: 10px;} .ct-series-a .ct-bar {stroke: #f1aa0b;} .ct-series-b .ct-bar {stroke: #db990a;} .ct-grid { stroke: rgba(0,0,0,.2); stroke-width: 1px; stroke-dasharray: 2px; background-color: white; color: #2a3e52; border-color: #2a3e52; margin: 0; padding: 0; min-width: fit-content; } .ct-label { font-size: .75rem; line-height: 1; } .ct-series-a .ct-slice-pie{fill:#d70206}     .ct-slice-pie{fill:#f05b4f}.ct-series-c .ct-bar,.ct-series-c .ct-line,.ct-series-c .ct-point,.ct-series-c .ct-slice-donut{stroke:#f4c63d}.ct-series-c .ct-area,.ct-series-c .ct-slice-donut-solid,.ct-series-c .ct-slice-pie{fill:#f4c63d}.ct-series-d .ct-bar,.ct-series-d .ct-line,.ct-series-d .ct-point,.ct-series-d .ct-slice-donut{stroke:#d17905}.ct-series-d .ct-area,.ct-series-d .ct-slice-donut-solid,.ct-series-d .ct-slice-pie{fill:#d17905}.ct-series-e .ct-bar,.ct-series-e .ct-line,.ct-series-e .ct-point,.ct-series-e .ct-slice-donut{stroke:#453d3f}.ct-series-e .ct-area,.ct-series-e .ct-slice-donut-solid,.ct-series-e .ct-slice-pie{fill:#453d3f}.ct-series-f .ct-bar,.ct-series-f .ct-line,.ct-series-f .ct-point,.ct-series-f .ct-slice-donut{stroke:#59922b}.ct-series-f .ct-area,.ct-series-f .ct-slice-donut-solid,.ct-series-f .ct-slice-pie{fill:#59922b}.ct-series-g .ct-bar,.ct-series-g .ct-line,.ct-series-g .ct-point,.ct-series-g .ct-slice-donut{stroke:#0544d3}.ct-series-g .ct-area,.ct-series-g .ct-slice-donut-solid,.ct-series-g .ct-slice-pie{fill:#0544d3}.ct-series-h .ct-bar,.ct-series-h .ct-line,.ct-series-h .ct-point,.ct-series-h .ct-slice-donut{stroke:#6b0392}.ct-series-h .ct-area,.ct-series-h .ct-slice-donut-solid,.ct-series-h .ct-slice-pie{fill:#6b0392}.ct-series-i .ct-bar,.ct-series-i .ct-line,.ct-series-i .ct-point,.ct-series-i .ct-slice-donut{stroke:#f05b4f}.ct-series-i .ct-area,.ct-series-i .ct-slice-donut-solid,.ct-series-i .ct-slice-pie{fill:#f05b4f}.ct-series-j .ct-bar,.ct-series-j .ct-line,.ct-series-j .ct-point,.ct-series-j .ct-slice-donut{stroke:#dda458}.ct-series-j .ct-area,.ct-series-j .ct-slice-donut-solid,.ct-series-j .ct-slice-pie{fill:#dda458}.ct-series-k .ct-bar,.ct-series-k .ct-line,.ct-series-k .ct-point,.ct-series-k .ct-slice-donut{stroke:#eacf7d}.ct-series-k .ct-area,.ct-series-k .ct-slice-donut-solid,.ct-series-k .ct-slice-pie{fill:#eacf7d}.ct-series-l .ct-bar,.ct-series-l .ct-line,.ct-series-l .ct-point,.ct-series-l .ct-slice-donut{stroke:#86797d}.ct-series-l .ct-area,.ct-series-l .ct-slice-donut-solid,.ct-series-l .ct-slice-pie{fill:#86797d}.ct-series-m .ct-bar,.ct-series-m .ct-line,.ct-series-m .ct-point,.ct-series-m .ct-slice-donut{stroke:#b2c326}.ct-series-m .ct-area,.ct-series-m .ct-slice-donut-solid,.ct-series-m .ct-slice-pie{fill:#b2c326}.ct-series-n .ct-bar,.ct-series-n .ct-line,.ct-series-n .ct-point,.ct-series-n .ct-slice-donut{stroke:#6188e2}.ct-series-n .ct-area,.ct-series-n .ct-slice-donut-solid,.ct-series-n .ct-slice-pie{fill:#6188e2}.ct-series-o .ct-bar,.ct-series-o .ct-line,.ct-series-o .ct-point,.ct-series-o .ct-slice-donut{stroke:#a748ca}.ct-series-o .ct-area,.ct-series-o .ct-slice-donut-solid,.ct-series-o .ct-slice-pie{fill:#a748ca}.ct-square{display:block;position:relative;width:100%}.ct-square:before{display:block;float:left;content:"";width:0;height:0;padding-bottom:100%}.ct-square:after{display:table}.ct-square>svg{display:block;position:absolute;top:0;left:0}.ct-minor-second{display:block;position:relative;width:100%}.ct-minor-second:before{display:block;float:left;content:"";width:0;height:0;padding-bottom:93.75%}.ct-minor-second:after{display:table}.ct-minor-second>svg{display:block;position:absolute;top:0;left:0}.ct-major-second{display:block;position:relative;width:100%}.ct-major-second:before{display:block;float:left;content:"";width:0;height:0;padding-bottom:88.8888888889%}.ct-major-second:after{display:table}.ct-major-second>svg{display:block;position:absolute;top:0;left:0}.ct-minor-third{display:block;position:relative;width:100%}.ct-minor-third:before{display:block;float:left;content:"";width:0;height:0;padding-bottom:83.3333333333%}.ct-minor-third:after{display:table}.ct-minor-third>svg{display:block;position:absolute;top:0;left:0}.ct-major-third{display:block;position:relative;width:100%}.ct-major-third:before{display:block;float:left;content:"";width:0;height:0;padding-bottom:80%}.ct-major-third:after{display:table}.ct-major-third>svg{display:block;position:absolute;top:0;left:0}.ct-perfect-fourth{display:block;position:relative;width:100%}.ct-perfect-fourth:before{display:block;float:left;content:"";width:0;height:0;padding-bottom:75%}.ct-perfect-fourth:after{display:table}.ct-perfect-fourth>svg{display:block;position:absolute;top:0;left:0}.ct-perfect-fifth{display:block;position:relative;width:100%}.ct-perfect-fifth:before{display:block;float:left;content:"";width:0;height:0;padding-bottom:66.6666666667%}.ct-perfect-fifth:after{display:table}.ct-perfect-fifth>svg{display:block;position:absolute;top:0;left:0}.ct-minor-sixth{display:block;position:relative;width:100%}.ct-minor-sixth:before{display:block;float:left;content:"";width:0;height:0;padding-bottom:62.5%}.ct-minor-sixth:after{display:table}.ct-minor-sixth>svg{display:block;position:absolute;top:0;left:0}.ct-golden-section{display:block;position:relative;width:100%}.ct-golden-section:before{display:block;float:left;content:"";width:0;height:0;padding-bottom:61.804697157%}.ct-golden-section:after{content:"";display:table;clear:both}.ct-golden-section>svg{display:block;position:absolute;top:0;left:0}.ct-major-sixth{display:block;position:relative;width:100%}.ct-major-sixth:before{display:block;float:left;content:"";width:0;height:0;padding-bottom:60%}.ct-major-sixth:after{display:table}.ct-major-sixth>svg{display:block;position:absolute;top:0;left:0}.ct-minor-seventh{display:block;position:relative;width:100%}.ct-minor-seventh:before{display:block;float:left;content:"";width:0;height:0;padding-bottom:56.25%}.ct-minor-seventh:after{display:table}.ct-minor-seventh>svg{display:block;position:absolute;top:0;left:0}.ct-major-seventh{display:block;position:relative;width:100%}.ct-major-seventh:before{display:block;float:left;content:"";width:0;height:0;padding-bottom:53.3333333333%}.ct-major-seventh:after{display:table}.ct-major-seventh>svg{display:block;position:absolute;top:0;left:0}.ct-octave{display:block;position:relative;width:100%}.ct-octave:before{display:block;float:left;content:"";width:0;height:0;padding-bottom:50%}.ct-octave:after{display:table}.ct-octave>svg{display:block;position:absolute;top:0;left:0}.ct-major-tenth{display:block;position:relative;width:100%}.ct-major-tenth:before{display:block;float:left;content:"";width:0;height:0;padding-bottom:40%}.ct-major-tenth:after{display:table}.ct-major-tenth>svg{display:block;position:absolute;top:0;left:0}.ct-major-eleventh{display:block;position:relative;width:100%}.ct-major-eleventh:before{display:block;float:left;content:"";width:0;height:0;padding-bottom:37.5%}.ct-major-eleventh:after{display:table}.ct-major-eleventh>svg{display:block;position:absolute;top:0;left:0}.ct-major-twelfth{display:block;position:relative;width:100%}.ct-major-twelfth:before{display:block;float:left;content:"";width:0;height:0;padding-bottom:33.3333333333%}.ct-major-twelfth:after{display:table}.ct-major-twelfth>svg{display:block;position:absolute;top:0;left:0}.ct-double-octave{display:block;position:relative;width:100%}.ct-double-octave:before{display:block;float:left;content:"";width:0;height:0;padding-bottom:25%}.ct-double-octave:after{display:table}.ct-double-octave>svg{display:block;position:absolute;top:0;left:0} ]]> </style> </defs><g');
  source = source.replace(/<\/svg/, `<text x="50" y="500" font-family="sans-serif" font-size="20px" fill="black">${title}</text></svg`);

  //add xml declaration
  source = '<?xml version="1.0" standalone="no"?>\r\n' + source;
  var svgData = source;

  var canvas = document.createElement("canvas");
  var svgSize = svg.getBoundingClientRect();
  canvas.width = svgSize.width * 4;
  canvas.height = svgSize.height * 4;
  canvas.style.width = svgSize.width;
  canvas.style.height = svgSize.height;
  var ctx = canvas.getContext("2d");
  ctx.scale(3, 3);
  ctx.fillStyle = 'white';
  ctx.fillRect(0, 0, canvas.width, canvas.height);
  var img = document.createElement("img");
  img.setAttribute("src", "data:image/svg+xml;base64," + btoa(unescape(encodeURIComponent(svgData))));
  img.onload = function () {
    ctx.drawImage(img, 0, 0);
    var canvasdata = canvas.toDataURL("image/png", 1);

    var a = document.createElement("a");
    a.download = "download_img" + ".png";
    a.href = canvasdata;
    document.body.appendChild(a);
    a.click();

  }
}

function downloadCSV(){
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
