const fs = require('fs')
const util = require('util');

function exempleAPI(req,res)
{
  res.statusCode = 200
  res.setHeader('Content-Type', 'application/json')
  res.write(JSON.stringify({ success: true, message: 'example ran successfully' }))
}

// function getFile(url) {
//     return new Promise((resolve, reject) => {
//         return fs.readFile(url, (err, data) => err !== undefined ? reject(err) : resolve(data))
//     })
// }
function submitTrueHTML(req, res)
{
  try {
    let htmlcode = '<p id ="msgemailtrue">Email sent!</p>'
    res.statusCode = 200
    res.setHeader('Content-Type', 'image/png')
    res.write(htmlcode)
  } catch (e) {
    console.log(e)
    res.statusCode = 500
    res.setHeader('Content-Type', 'text/html')
    res.write('Internal server error')
  }
}

function submitFalseHTML(req, res)
{

    try {
      let htmlcode = '<p id = "msgemailfalse">Email incorrect!</p>'
      res.statusCode = 200
      res.setHeader('Content-Type', 'image/png')
      res.write(htmlcode)
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
      res.statusCode = 200
      res.setHeader('Content-Type', 'image/png')
      res.write(png)
    } catch (e) {
      console.log(e)
      res.statusCode = 500
      res.setHeader('Content-Type', 'text/html')
      res.write('Internal server error')
    }
}
function getContactHTML (req, res) {
  try {
    let indexHTML = fs.readFileSync('./views/contact-us.html')
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

function getJS(req, res) {
    try {
      let svg = fs.readFileSync('views' + req.url)
      res.statusCode = 200
      res.setHeader('Content-Type', 'text/javascript')
      res.write(svg)
    } catch (e) {
      console.log(e)
      res.statusCode = 500
      res.setHeader('Content-Type', 'text/html')
      res.write('Internal server error')
    }
}


module.exports = { exempleAPI, getContactHTML, getCSS, getPNG, getJS, submitTrueHTML, submitFalseHTML }
