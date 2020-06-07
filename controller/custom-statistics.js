const fs = require('fs')
const zlib = require('zlib');
const util = require('util');
const url = require('url');
const db = require('../model/db')
const controllerUtils = require('../utils/controllerUtils')



async function getInstitutions(req, res) {
  try {
    let institutions = await db.distinct("CNTSCHID");

    let compressedData = zlib.gzipSync(JSON.stringify({
      institutions: institutions,
    }));

    res.writeHead(200, { 'Content-Type': 'application/json', 'Content-Encoding': 'gzip' });
    res.write(compressedData)
  } catch (e) {
    console.log(e.message)
    res.statusCode = 500
    res.setHeader('Content-Type', 'text/html')
    res.write('Internal server error')
  }
}

async function getGenderChart(req, res) {
  try {
    let maleCount = await db.count({ ST004D01T: "1.0" });
    let femaleCount = await db.count({ ST004D01T: "2.0" });

    let compressedData = zlib.gzipSync(JSON.stringify({
      male: maleCount,
      female: femaleCount
    }));

    res.writeHead(200, { 'Content-Type': 'application/json', 'Content-Encoding': 'gzip' });
    res.write(compressedData)
  } catch (e) {
    console.log(e.message)
    res.statusCode = 500
    res.setHeader('Content-Type', 'text/html')
    res.write('Internal server error')
  }
}


async function getInstGenderChart(req, res) {
  try {
    let data = url.parse(req.url, true).query;
    let query = { CNTSCHID: data["institutionID"], ST004D01T: "1.0" }
    let maleCount = await db.count(query)
    query = { CNTSCHID: data["institutionID"], ST004D01T: "2.0" }
    let femaleCount = await db.count(query)
    
    let compressedData = zlib.gzipSync(JSON.stringify({
      male: maleCount,
      female: femaleCount,
    }));

    res.writeHead(200, { 'Content-Type': 'application/json', 'Content-Encoding': 'gzip' });
    res.write(compressedData)
  } catch (e) {
    console.log(e)
    res.statusCode = 500
    res.setHeader('Content-Type', 'text/html')
    res.write('Internal server error')
  }
}

async function getInstQuestionChart(req, res) {
  try {
    let data = url.parse(req.url, true).query;
    let query = {}
    let answers = await db.distinct(data.questionId);
    let index = answers.indexOf('');
    
    if (index > -1) {
      answers.splice(index, 1);
    }
    answers = answers.sort();

    query['CNTSCHID'] = data['institutionID']

    let results = {}
    for (index in answers) {
      query[data.questionId] = answers[index];
      results[answers[index]] = await db.count(query);
    }

    let compressedData = zlib.gzipSync(JSON.stringify({
      results: results
    }));

    res.writeHead(200, { 'Content-Type': 'application/json', 'Content-Encoding': 'gzip' });
    res.write(compressedData)
  } catch (e) {
    console.log(e)
    res.statusCode = 500
    res.setHeader('Content-Type', 'text/html')
    res.write('Internal server error')
  }
}

async function getCountryChart(req, res) {
  try {
    let data = url.parse(req.url, true).query;
    let query = {}
    let projection = {}
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
    let romania_result = await db.findOne(query, projection, "worldwide_ranking");
    query["Country"] = data.country;
    let second_country_result = await db.findOne(query, projection, "worldwide_ranking");

    let compressedData = zlib.gzipSync(JSON.stringify({
      romania_result: romania_result,
      second_country_result: second_country_result
    }));

    res.writeHead(200, { 'Content-Type': 'application/json', 'Content-Encoding': 'gzip' });
    res.write(compressedData)
  } catch (e) {
    console.log(e)
    res.statusCode = 500
    res.setHeader('Content-Type', 'text/html')
    res.write('Internal server error')
  }
}

async function getQuestionChartData(req, res) {
  try {
    let data = url.parse(req.url, true).query;
    let query = {}

    let answers = await db.distinct(data.questionId);
    let index = answers.indexOf('');
    if (index > -1) {
      answers.splice(index, 1);
    }
    answers = answers.sort();

    let results = {}
    for (index in answers) {
      query[data.questionId] = answers[index];
      results[answers[index]] = await db.count(query);
    }

    let compressedData = zlib.gzipSync(JSON.stringify({
      results: results
    }));

    res.writeHead(200, { 'Content-Type': 'application/json', 'Content-Encoding': 'gzip' });
    res.write(compressedData)
  } catch (e) {
    console.log(e)
    res.statusCode = 500
    res.setHeader('Content-Type', 'text/html')
    res.write('Internal server error')
  }
}

async function getComparisonChart(req, res) {
  try {
    let data = url.parse(req.url, true).query;
    let query = {}

    let answers = await db.distinct(data.questionId);
    let index = answers.indexOf('');
    if (index > -1) {
      answers.splice(index, 1);
    }
    answers = answers.sort();

    let resultsInstitution1 = {}
    let resultsInstitution2 = {}

    for (index in answers) {
      query['CNTSCHID'] = data.institution1
      query[data.questionId] = answers[index];
      resultsInstitution1[answers[index]] = await db.count(query);
      query['CNTSCHID'] = data.institution2
      query[data.questionId] = answers[index];
      resultsInstitution2[answers[index]] = await db.count(query);
    }

    let compressedData = zlib.gzipSync(JSON.stringify({
      resultsInstitution1: resultsInstitution1,
      resultsInstitution2: resultsInstitution2
    }));

    res.writeHead(200, { 'Content-Type': 'application/json', 'Content-Encoding': 'gzip' });
    res.write(compressedData)
  } catch (e) {
    console.log(e)
    res.statusCode = 500
    res.setHeader('Content-Type', 'text/html')
    res.write('Internal server error')
  }
}

function getChartHTML(req, res) {
  try {
    let html = fs.readFileSync('./views/chart-test.html')
    let compressedData = zlib.gzipSync(html);

    res.writeHead(200, { 'Content-Type': 'text/html', 'Content-Encoding': 'gzip' });
    res.write(compressedData)
  } catch (e) {
    console.log(e)
    res.statusCode = 500
    res.setHeader('Content-Type', 'text/html')
    res.write('Internal server error')
  }
}

function getCustomStatsHTML(req, res) {
  try {
    let html = fs.readFileSync('./views/custom-statistics.html')
    let compressedData = zlib.gzipSync(html);

    res.writeHead(200, { 'Content-Type': 'text/html', 'Content-Encoding': 'gzip' });
    res.write(compressedData)
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
    let compressedData = zlib.gzipSync(css);

    res.writeHead(200, { 'Content-Type': 'text/css', 'Content-Encoding': 'gzip' });
    res.write(compressedData)
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
    let compressedData = zlib.gzipSync(javascript);

    res.writeHead(200, { 'Content-Type': 'text/javascript', 'Content-Encoding': 'gzip' });
    res.write(compressedData)
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
    let compressedData = zlib.gzipSync(svg);

    res.writeHead(200, { 'Content-Type': 'image/svg+xml', 'Content-Encoding': 'gzip' });
    res.write(compressedData)
  } catch (e) {
    console.log(e)
    res.statusCode = 500
    res.setHeader('Content-Type', 'text/html')
    res.write('Internal server error')
  }
}

function getGIF(req, res) {
  try {
    let gif = fs.readFileSync('views' + req.url)
    let compressedData = zlib.gzipSync(gif);

    res.writeHead(200, { 'Content-Type': 'image/gif', 'Content-Encoding': 'gzip' });
    res.write(compressedData)
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
  getJS,
  getGIF
}