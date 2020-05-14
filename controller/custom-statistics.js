const fs = require('fs')
const util = require('util');


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

module.exports = { getChartHTML, getCustomStatsHTML, getCSS, getSVG }
