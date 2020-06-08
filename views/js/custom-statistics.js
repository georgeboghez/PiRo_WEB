const INSTITUTIONS = ["6.4200029E7", "6.4200103E7", "6.4200031E7", "6.4200146E7", "6.4200116E7", "6.4200056E7", "6.4200139E7", "6.4200147E7", "6.4200161E7", "6.4200054E7", "6.4200145E7", "6.4200156E7", "6.4200073E7", "6.4200153E7", "6.4200059E7", "6.4200039E7", "6.4200081E7", "6.4200128E7", "6.4200131E7", "6.420013E7", "6.4200046E7", "6.4200157E7", "6.4200094E7", "6.4200134E7", "6.4200165E7", "6.4200015E7", "6.4200011E7", "6.4200126E7", "6.4200155E7", "6.42001E7", "6.4200078E7", "6.4200089E7", "6.4200104E7", "6.4200044E7", "6.4200079E7", "6.4200047E7", "6.420002E7", "6.4200049E7", "6.4200057E7", "6.4200119E7", "6.4200167E7", "6.4200061E7", "6.4200151E7", "6.4200032E7", "6.4200042E7", "6.4200082E7", "6.4200088E7", "6.4200037E7", "6.4200109E7", "6.4200023E7", "6.4200006E7", "6.4200117E7", "6.4200115E7", "6.4200028E7", "6.4200137E7", "6.4200008E7", "6.4200083E7", "6.4200012E7", "6.4200005E7", "6.4200123E7", "6.4200038E7", "6.4200068E7", "6.420001E7", "6.4200098E7", "6.420011E7", "6.4200036E7", "6.4200135E7", "6.4200018E7", "6.4200076E7", "6.4200105E7", "6.420015E7", "6.4200169E7", "6.4200097E7", "6.4200106E7", "6.4200051E7", "6.4200136E7", "6.4200065E7", "6.4200168E7", "6.4200112E7", "6.4200102E7", "6.4200052E7", "6.4200113E7", "6.4200085E7", "6.4200062E7", "6.4200013E7", "6.4200162E7", "6.420004E7", "6.4200053E7", "6.4200164E7", "6.4200108E7", "6.4200121E7", "6.420016E7", "6.4200021E7", "6.4200093E7", "6.4200019E7", "6.4200086E7", "6.4200154E7", "6.4200127E7", "6.4200149E7", "6.4200152E7", "6.4200141E7", "6.4200118E7", "6.4200072E7", "6.4200144E7", "6.4200092E7", "6.4200017E7", "6.4200101E7", "6.420012E7", "6.4200009E7", "6.4200014E7", "6.4200171E7", "6.420009E7", "6.4200129E7", "6.4200071E7", "6.4200026E7", "6.4200045E7", "6.4200035E7", "6.4200069E7", "6.4200075E7", "6.4200099E7", "6.4200022E7", "6.4200064E7", "6.4200024E7", "6.4200058E7", "6.4200041E7", "6.4200034E7", "6.4200159E7", "6.4200091E7", "6.4200025E7", "6.4200166E7", "6.4200143E7", "6.420003E7", "6.420005E7", "6.4200033E7", "6.4200063E7", "6.4200084E7", "6.4200138E7", "6.4200124E7", "6.4200114E7", "6.420014E7", "6.420008E7"]
const COUNTRIES = ["China(Beijing,Shanghai,Jiangsu,Zhejiang)", "Singapore", "Macao", "Hong Kong,China", "Estonia", "Japan", "South Korea", "Canada", "Taiwan", "Finland", "Poland", "Ireland", "Slovenia", "United Kingdom", "New Zealand", "Netherlands", "Sweden", "Denmark", "Germany", "Belgium", "Australia", "Switzerland", "Norway", "Czechia", "United States", "France", "Portugal", "Austria", "Latvia", "Russia", "Iceland", "Lithuania", "Hungary", "Italy", "Luxembourg", "Belarus", "Croatia", "Slovakia", "Israel", "Turkey", "Ukraine", "Malta", "Greece", "Serbia", "Cyprus", "Chile", "United Arab Emirates", "Malaysia", "Romania", "Bulgaria", "Moldova", "Uruguay", "Brunei", "Montenegro", "Albania", "Jordan", "Mexico", "Costa Rica", "Qatar", "Thailand", "Colombia", "Kazakhstan", "Azerbaijan", "Bosnia and Herzegovina", "Peru", "Brazil", "North Macedonia", "Argentina", "Georgia", "Saudi Arabia", "Indonesia", "Lebanon", "Morocco", "Panama", "Kosovo", "Philippines", "Dominican Republic"]
const QUESTIONS_TRUST = {
  "ST123Q02NA": "Thinking about 2018: My parents support my educational efforts and achievements.",
  "ST123Q03NA": "Thinking about 2018: My parents support me when I am facing difficulties at school.",
  "ST123Q04NA": "Thinking about 2018: My parents encourage me to be confident."
}

const QUESTIONS_FEELINGS = {
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

const QUESTIONS_HOME_CONDITIONS = {
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
  'ST013Q01TA': 'How many books are there in your home?'
}

const QUESTIONS_READING = {
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
  "ST163Q02HA": "In the PISA test, how do you feel about the reading tasks: There were many words I could not understand."
}

const QUESTIONS_AGREE = {
  "ST161Q08HA": "Agree: I find it difficult to answer questions about a text.",
  "ST161Q07HA": "Agree: I have to read a text several times before completely understanding it.",
  "ST161Q06HA": "Agree: I have always had difficulty with reading.",
  "ST161Q03HA": "Agree: I read fluently.",
  "ST161Q02HA": "Agree: I am able to understand difficult texts.",
  "ST161Q01HA": "Agree: I am a good reader.",
  "ST185Q03HA": "Agree: I have a clear sense of what gives meaning to my life.",
  "ST185Q02HA": "Agree: I have discovered a satisfactory meaning in life.",
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
  "ST181Q02HA": "Agree: I enjoy working in situations involving competition with others."
}

const QUESTIONS_MATH = {
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
  "EC023Q08NA": "Why don't you attend additional mathematics in this school year: It doesnt seem worth the money."
}

const QUESTIONS_SCIENCE = {
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

var csvData = "empty";

var label_array = []

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
for (var i = 0; i < INSTITUTIONS.length; i++) {
  institutions_dropdown += `<option value="${INSTITUTIONS[i]}"> ${INSTITUTIONS[i]} </option>`;
}
institutions_dropdown += '</select>';

var institutions_comparison_dropdown = `<label for="pick-institution2">Pick Institution #2</label>
  <select id="pick-institution2" onchange="pickQuestionForComparison()">
  <option value="select-institution2" selected>Select Institution #2</option>`
for (var i = 0; i < INSTITUTIONS.length; i++) {
  institutions_comparison_dropdown += `<option value="${INSTITUTIONS[i]}"> ${INSTITUTIONS[i]} </option>`;
}
institutions_comparison_dropdown += `</select>`;

var countries_dropdown =
  `<label for="pick-country">Pick Country</label>
  <select id="pick-country" onchange="pickCountry()">
  <option value="select-country">Select Country</option>`
for (var i = 0; i < COUNTRIES.length; i++) {
  countries_dropdown += `<option value="${COUNTRIES[i]}"> ${COUNTRIES[i]} </option>`;
}
countries_dropdown += `</select>`

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
  var questionDropdown = document.getElementById("pick-question");
  var selectedQuestionId = questionDropdown.options[questionDropdown.selectedIndex].value;
  var selectedQuestion = questionDropdown.options[questionDropdown.selectedIndex].text;

  var question_selected = current_container_html.replace(`value="${selectedQuestionId}"`, `value="${selectedQuestionId}" selected`)
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

      var keys = ``
      var answers = ``
      var series_array = []
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

      var keys = ``
      var answers = ``
      var answers2 = ``
      var series_array = []
      var series_array2 = []
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

      var keys = ``
      var answers = ``
      var series_array = []
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
      var index = 0;
      var chart = new Chartist.Pie('.ct-chart', data, {
        labelInterpolationFnc: function(value) {
          return Math.round(value / data.series.reduce(sum) * 100) + '% - ' + label_array[index++];
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