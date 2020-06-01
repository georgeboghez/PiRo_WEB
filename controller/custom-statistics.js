const fs = require('fs')
const util = require('util');
const url = require('url');
const db = require('../model/db')
const co = require('co');
const generate = require('node-chartist');
const controllerUtils = require('../utils/controllerUtils')



async function getInstitutions(req, res) {
  try {
    res.writeHead(200, { "Content-Type": "application/json" });

    var institutions = await db.distinct("CNTSCHID");
    res.write(JSON.stringify({
      type: true,
      institutions: institutions,
    }))
  } catch (e) {
    console.log(e.message)
    res.statusCode = 500
    res.setHeader('Content-Type', 'text/html')
    res.write('Internal server error')
  }
}

async function getGenderChart(req, res) {
  try {
    res.writeHead(200, { "Content-Type": "application/json" });

    var maleCount = await db.count({ ST004D01T: "1.0" });
    var femaleCount = await db.count({ ST004D01T: "2.0" });

    res.write(JSON.stringify({
      type: true,
      male: maleCount,
      female: femaleCount
    }))
  } catch (e) {
    console.log(e.message)
    res.statusCode = 500
    res.setHeader('Content-Type', 'text/html')
    res.write('Internal server error')
  }
}


async function getInstGenderChart(req, res) {
  try {
    var data = url.parse(req.url, true).query;
    var query = { CNTSCHID: data["institutionID"], ST004D01T: "1.0" }
    var maleCount = await db.count(query)
    query = { CNTSCHID: data["institutionID"], ST004D01T: "2.0" }
    var femaleCount = await db.count(query)
    res.setHeader('Content-Type', 'application/json')
    res.write(JSON.stringify({
      male: maleCount,
      female: femaleCount,
    }))

  } catch (e) {
    console.log(e)
    res.statusCode = 500
    res.setHeader('Content-Type', 'text/html')
    res.write('Internal server error')
  }
}

async function getInstQuestionChart(req, res) {
  try {
    var data = url.parse(req.url, true).query;
    var query = {}
    var answers = await db.distinct(data.questionId);
    var index = answers.indexOf('');
    if (index > -1) {
      answers.splice(index, 1);
    }
    answers = answers.sort();

    query['CNTSCHID'] = data['institutionID']

    var results = {}
    for (index in answers) {
      query[data.questionId] = answers[index];
      results[answers[index]] = await db.count(query);
    }
    res.setHeader('Content-Type', 'application/json')
    res.write(JSON.stringify({
      results: results
    }))
  } catch (e) {
    console.log(e)
    res.statusCode = 500
    res.setHeader('Content-Type', 'text/html')
    res.write('Internal server error')
  }
}

async function getCountryChart(req, res) {
  try {
    var data = url.parse(req.url, true).query;
    var query = {}
    var projection = {}
    query["Country"] = "Romania";
    if (data["rankingOption"] == "score") {
      projection["AverageScore"] = true;
      projection["MathematicsScore"] = true;
      projection["ScienceScore"] = true;
      projection["ReadingScore"] = true;
      projection["Country"] = false;
      projection["_id"] = false;
    } else {
      projection["AverageRanking"] = true;
      projection["MathematicsRanking"] = true;
      projection["ScienceRanking"] = true;
      projection["ReadingRanking"] = true;
      projection["_id"] = false;
      projection["Country"] = false;
    }
    var romania_result = await db.findOne(query, projection, "worldwide_ranking");
    query["Country"] = data.country;
    var second_country_result = await db.findOne(query, projection, "worldwide_ranking");

    res.setHeader('Content-Type', 'application/json')
    res.write(JSON.stringify({
      romania_result: romania_result,
      second_country_result: second_country_result
    }))
  } catch (e) {
    console.log(e)
    res.statusCode = 500
    res.setHeader('Content-Type', 'text/html')
    res.write('Internal server error')
  }
}

async function getQuestionChartData(req, res) {
  try {
    var data = url.parse(req.url, true).query;
    var query = {}

    var answers = await db.distinct(data.questionId);
    var index = answers.indexOf('');
    if (index > -1) {
      answers.splice(index, 1);
    }
    answers = answers.sort();

    var results = {}
    for (index in answers) {
      query[data.questionId] = answers[index];
      results[answers[index]] = await db.count(query);
    }

    res.setHeader('Content-Type', 'application/json')
    res.write(JSON.stringify({
      results: results
    }))

  } catch (e) {
    console.log(e)
    res.statusCode = 500
    res.setHeader('Content-Type', 'text/html')
    res.write('Internal server error')
  }
}

async function getComparisonChart(req, res) {
  try {
    var data = url.parse(req.url, true).query;
    var query = {}

    var answers = await db.distinct(data.questionId);
    var index = answers.indexOf('');
    if (index > -1) {
      answers.splice(index, 1);
    }
    answers = answers.sort();

    var resultsInstitution1 = {}
    var resultsInstitution2 = {}

    for (index in answers) {
      query['CNTSCHID'] = data.institution1
      query[data.questionId] = answers[index];
      resultsInstitution1[answers[index]] = await db.count(query);
      query['CNTSCHID'] = data.institution2
      query[data.questionId] = answers[index];
      resultsInstitution2[answers[index]] = await db.count(query);
    }
    res.setHeader('Content-Type', 'application/json')
    res.write(JSON.stringify({
      resultsInstitution1: resultsInstitution1,
      resultsInstitution2: resultsInstitution2
    }))
  } catch (e) {
    console.log(e)
    res.statusCode = 500
    res.setHeader('Content-Type', 'text/html')
    res.write('Internal server error')
  }
}

function getChartHTML(req, res) {
  try {
    let indexHTML = fs.readFileSync('./views/chart-test.html')
    res.statusCode = 200
    res.setHeader('Content-Type', 'text/html')
    res.write(indexHTML)
  } catch (e) {
    console.log(e)
    res.statusCode = 500
    res.setHeader('Content-Type', 'text/html')
    res.write('Internal server error')
  }
}

function getCustomStatsHTML(req, res) {
  try {
    let indexHTML = fs.readFileSync('./views/custom-statistics.html')
    res.statusCode = 200
    //res.setHeader('Content-Type', 'text/html')
    res.write(indexHTML)
  } catch (e) {
    console.log(e)
    res.statusCode = 500
    res.setHeader('Content-Type', 'text/html')
    res.write('Internal server error')
  }
}

function getCSS(req, res) {
  try {
    let css = fs.readFileSync('./views' + req.url)
    res.statusCode = 200
    res.setHeader('Content-Type', 'text/css')
    res.write(css)
  } catch (e) {
    console.log(e)
    res.statusCode = 500
    res.setHeader('Content-Type', 'text/html')
    res.write('Internal server error')
  }
}

function getJS(req, res) {
  try {
    let javascript = fs.readFileSync('./views' + req.url)
    res.statusCode = 200
    res.setHeader('Content-Type', 'text/javascript')
    res.write(javascript)
  } catch (e) {
    console.log(e)
    res.statusCode = 500
    res.setHeader('Content-Type', 'text/html')
    res.write('Internal server error')
  }
}

function getSVG(req, res) {
  try {
    let svg = fs.readFileSync('views' + req.url)
    res.statusCode = 200
    res.setHeader('Content-Type', 'image/svg+xml')
    res.write(svg)
  } catch (e) {
    console.log(e)
    res.statusCode = 500
    res.setHeader('Content-Type', 'text/html')
    res.write('Internal server error')
  }
}

module.exports = {
  getChartHTML,
  getCustomStatsHTML,
  getCSS,
  getSVG,
  getGenderChart,
  getQuestionChartData,
  getInstitutions,
  getInstGenderChart,
  getInstQuestionChart,
  getComparisonChart,
  getCountryChart,
  getJS
}