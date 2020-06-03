const fs = require('fs')
const util = require('util');
const db = require('../model/db')
const controllerUtils = require('../utils/controllerUtils')


async function getIndexHTML(req, res) {
  try {
    let indexHTML = await controllerUtils.readFileAsync('./views/index.html')
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

async function getCSS(req, res) {
  try {
    let css = await controllerUtils.readFileAsync('./views' + req.url)
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

async function getSVG(req, res) {
  try {
    let svg = await controllerUtils.readFileAsync('views' + req.url)
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

async function getJS(req, res) {
  try {
    let js = await controllerUtils .readFileAsync('views' + req.url)
    res.statusCode = 200
    res.setHeader('Content-Type', 'text/javascript')
    res.write(js)
  } catch (e) {
    console.log(e)
    res.statusCode = 500
    res.setHeader('Content-Type', 'text/html')
    res.write('Internal server error')
  }
}

module.exports = { getIndexHTML, getCSS, getSVG, getJS }