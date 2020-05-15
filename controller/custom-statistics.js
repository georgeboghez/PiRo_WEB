const fs = require('fs')
const util = require('util');
const db = require('../model/db')
const co = require('co');
const generate = require('node-chartist');


function getGenderChart (req, res) {
	db.connect((err, database) => {
		if (err) return next(err);

		database.collection('pisa_results').countDocuments({ST004D01T : "1.0"}, (err, maleCount) => {
			if (err) {
				console.log("error: " + err.message);
			}

			console.log("ceva1")
			console.log(maleCount);

			database.collection('pisa_results').countDocuments({ST004D01T : "2.0"}, (err, femaleCount) => {
				if (err) {
					console.log("error: " + err.message);
				}

				console.log("ceva2")
				console.log(femaleCount)

				co(function * () {
 
					// options object
					const options = {width: 400, height: 200};
					const data = {
					labels: ['male', 'female'],
					series: [
					  [maleCount, femaleCount]
					]
					};
					const bar = yield generate('bar', options, data); //=> chart HTML

					console.log(bar)

					try {
					    let indexHTML = bar
					    res.statusCode = 200
					    res.setHeader('Content-Type', 'text/html')
					    res.write(indexHTML)
					  } catch (e) {
					    console.log(e)
					    res.statusCode = 500
					    res.setHeader('Content-Type', 'text/html')
					    res.write('Internal server error')
					  }

 
				});

			    // res.statusCode = 200
			    // res.setHeader('Content-Type', 'text/html')
			    // res.write(chart)
			});


			db.disconnect((err) => {
			    if (err) throw err;

			    console.log('Everything finished, database connection closed');
			});
		});
	});

	
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
