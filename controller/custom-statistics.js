const fs = require('fs')
const util = require('util');
const db = require('../model/db')
const co = require('co');
const generate = require('node-chartist');


async function getGenderChart (req, res) {
  res.writeHead(200, {"Content-Type": "application/json"});

  var maleCount   = await db.count({ST004D01T : "1.0"});
  var femaleCount = await db.count({ST004D01T : "2.0"});

  res.write(JSON.stringify({
    type: true,
    male: maleCount,
    female: femaleCount
  }))
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

module.exports = { getChartHTML, getCustomStatsHTML, getCSS, getSVG, getGenderChart }
