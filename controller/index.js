const fs = require('fs')
const util = require('util');
const db = require('../model/db')

function exempleAPI(req,res)
{
  res.statusCode = 200
  res.setHeader('Content-Type', 'application/json')
  res.write(JSON.stringify({ success: true, message: 'example ran successfully' }))
}

// db.connect((err, database) => {
//   if (err) return next(err);

//   database.collection('pisa_results').findOne({}, (err, result) => {
//     if (err) throw err;

//     console.log(result.CNTSTUID);


//     db.disconnect((err) => {
//       if (err) throw err;

//       console.log('Everything finished, database connection closed');
//     });
//   });
// });

function getIndexHTML (req, res) {
  try {
    let indexHTML = fs.readFileSync('./views/index.html')
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

module.exports = { exempleAPI, getIndexHTML, getCSS, getSVG, getJS }
