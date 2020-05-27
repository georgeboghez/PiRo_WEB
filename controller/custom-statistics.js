const fs = require('fs')
const util = require('util');
const db = require('../model/db')
const co = require('co');
const generate = require('node-chartist');
const controllerUtils = require('../utils/controllerUtils')



async function getInstitutions (req,res) {
  try {
    res.writeHead(200, {"Content-Type": "application/json"});

    var institutions   = await db.distinct("CNTSCHID");
    res.write(JSON.stringify({
      type: true,
      institutions: institutions,
    }))
  } catch(e) {
    console.log(e.message)
    res.statusCode = 500
    res.setHeader('Content-Type', 'text/html')
    res.write('Internal server error')
  }
}

async function getGenderChart (req, res) {
  try {
    res.writeHead(200, {"Content-Type": "application/json"});

    var maleCount   = await db.count({ST004D01T : "1.0"});
    var femaleCount = await db.count({ST004D01T : "2.0"});

    res.write(JSON.stringify({
      type: true,
      male: maleCount,
      female: femaleCount
    }))
  } catch(e) {
    console.log(e.message)
    res.statusCode = 500
    res.setHeader('Content-Type', 'text/html')
    res.write('Internal server error')
  }
}


async function getInstGenderChart (req, res) {
  try {
    var body = await controllerUtils.toStringChunk(req);
    var data = JSON.parse(body);
    var query = {CNTSCHID:data["institutionID"],ST004D01T : "1.0"}
    var maleCount = await db.count(query)
    query = {CNTSCHID:data["institutionID"],ST004D01T : "2.0"}
    var femaleCount = await db.count(query)
    res.setHeader('Content-Type', 'application/json')
    res.write(JSON.stringify({
      male : maleCount,
      female : femaleCount,
    }))

  } catch (e) {
    console.log(e)
    res.statusCode = 500
    res.setHeader('Content-Type', 'text/html')
    res.write('Internal server error')
  }
}

async function getInstQuestionChart (req, res) {
  try {
    var body = await controllerUtils.toStringChunk(req);
    var data = JSON.parse(body);
    var query = {}
    query[data.questionID] = "1.0"
    query['CNTSCHID'] = data['institutionID']
    var result_1 = await db.count(query);
    query[data.questionID] = "2.0"
    query['CNTSCHID'] = data['institutionID']
    var result_2 = await db.count(query);
    query[data.questionID] = "3.0"
    query['CNTSCHID'] = data['institutionID']
    var result_3 = await db.count(query);
    query[data.questionID] = "4.0"
    query['CNTSCHID'] = data['institutionID']
    var result_4 = await db.count(query);
    console.log(data['institutionID']);
    res.setHeader('Content-Type', 'application/json')
    res.write(JSON.stringify({
      result1 : result_1,
      result2 : result_2,
      result3 : result_3,
      result4 : result_4,
    }))
  } catch (e) {
    console.log(e)
    res.statusCode = 500
    res.setHeader('Content-Type', 'text/html')
    res.write('Internal server error')
  }
}

async function getQuestionChartData (req, res) {
  try {
    var body = await controllerUtils.toStringChunk(req);
    var data = JSON.parse(body);
    var query = {}
    query[data.questionId] = "1.0"
    var result_1 = await db.count(query);
    query[data.questionId] = "2.0"
    var result_2 = await db.count(query);
    query[data.questionId] = "3.0"
    var result_3 = await db.count(query);
    query[data.questionId] = "4.0"
    var result_4 = await db.count(query);

    res.setHeader('Content-Type', 'application/json')
    res.write(JSON.stringify({
      result1 : result_1,
      result2 : result_2,
      result3 : result_3,
      result4 : result_4
    }))

  } catch (e) {
    console.log(e)
    res.statusCode = 500
    res.setHeader('Content-Type', 'text/html')
    res.write('Internal server error')
  }
}

async function getComparisonChart (req, res) {
  try {
    var body = await controllerUtils.toStringChunk(req);
    var data = JSON.parse(body);
    var query = {}
    query[data.questionId] = "1.0"
    query['CNTSCHID'] = data.institution1
    var inst_1_result_1 = await db.count(query);

    query[data.questionId] = "1.0"
    query['CNTSCHID'] = data.institution2
    var inst_2_result_1 = await db.count(query);

    query[data.questionId] = "2.0"
    query['CNTSCHID'] = data.institution1
    var inst_1_result_2 = await db.count(query);

    query[data.questionId] = "2.0"
    query['CNTSCHID'] = data.institution2
    var inst_2_result_2 = await db.count(query);

    query[data.questionId] = "3.0"
    query['CNTSCHID'] = data.institution1
    var inst_1_result_3 = await db.count(query);

    query[data.questionId] = "3.0"
    query['CNTSCHID'] = data.institution2
    var inst_2_result_3 = await db.count(query);

    query[data.questionId] = "4.0"
    query['CNTSCHID'] = data.institution1
    var inst_1_result_4 = await db.count(query);

    query[data.questionId] = "4.0"
    query['CNTSCHID'] = data.institution2
    var inst_2_result_4 = await db.count(query);

    console.log(query)

    res.setHeader('Content-Type', 'application/json')
    res.write(JSON.stringify({
      inst_1_result_1: inst_1_result_1,
      inst_2_result_1: inst_2_result_1,
      inst_1_result_2: inst_1_result_2,
      inst_2_result_2: inst_2_result_2,
      inst_1_result_3: inst_1_result_3,
      inst_2_result_3: inst_2_result_3,
      inst_1_result_4: inst_1_result_4,
      inst_2_result_4: inst_2_result_4
    }))

  } catch (e) {
    console.log(e)
    res.statusCode = 500
    res.setHeader('Content-Type', 'text/html')
    res.write('Internal server error')
  }
}

function getChartHTML (req, res) {
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

function getCustomStatsHTML (req, res) {
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

function getCSS (req, res) {
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

module.exports = { getChartHTML, getCustomStatsHTML, getCSS, getSVG, getGenderChart, getQuestionChartData, getInstitutions, getInstGenderChart, getInstQuestionChart,
                   getComparisonChart}
