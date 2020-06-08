const fs = require('fs')
const zlib = require('zlib');
const util = require('util');
const db = require('../model/db')


function getIndexHTML(req, res) {
  try {
    let indexHTML = fs.readFileSync('./views/index.html')
    let compressedData = zlib.gzipSync(indexHTML);

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

function getPNG(req, res) {
  try {
    let png = fs.readFileSync('views' + req.url)
    let compressedData = zlib.gzipSync(png);

    res.writeHead(200, { 'Content-Type': 'image/png', 'Content-Encoding': 'gzip' });
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
    let js = fs.readFileSync('views' + req.url)
    let compressedData = zlib.gzipSync(js);

    res.writeHead(200, { 'Content-Type': 'text/javascript', 'Content-Encoding': 'gzip' });
    res.write(compressedData)
  } catch (e) {
    console.log(e)
    res.statusCode = 500
    res.setHeader('Content-Type', 'text/html')
    res.write('Internal server error')
  }
}

function get404Page(req, res) {
  try {
    let html = fs.readFileSync('./views/404.html')
    let compressedData = zlib.gzipSync(html);

    res.writeHead(404, { 'Content-Type': 'text/html', 'Content-Encoding': 'gzip' });
    res.write(compressedData)
  } catch (e) {
    console.log(e)
    res.statusCode = 500
    res.setHeader('Content-Type', 'text/html')
    res.write('Internal server error')
  }
}

module.exports = { getIndexHTML, getCSS, getSVG, getJS, getPNG, get404Page }