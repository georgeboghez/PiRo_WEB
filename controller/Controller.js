const fs = require('fs')
const zlib = require('zlib');
const util = require('util');
const url = require('url');
const db = require('../model/db')
const controllerUtils = require('../utils/controllerUtils')
const nodemailer = require('nodemailer')
const svgCaptcha = require('svg-captcha')

var captchaText = '';

class Controller {
  constructor() {}

  getHTML(req, res) {
    try {
      let indexHTML = fs.readFileSync('./views' + req.url)
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

  getIndexHTML(req, res) {
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

  getCSS(req, res) {
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

  getSVG(req, res) {
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

  getPNG(req, res) {
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

  getJS(req, res) {
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

  getIcon(req, res) {
    try {
      let png = fs.readFileSync('views/assets/img/favicon.png')
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

  get404Page(req, res) {
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

  async getInstitutions(req, res) {
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

  async getGenderChart(req, res) {
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


  async getInstGenderChart(req, res) {
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

  async getInstQuestionChart(req, res) {
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

  async getCountryChart(req, res) {
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

  async getQuestionChartData(req, res) {
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

  async getComparisonChart(req, res) {
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

  getChartHTML(req, res) {
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

  getCustomStatsHTML(req, res) {
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



  getGIF(req, res) {
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

  async sendMailtoFront(req, res) {
    try {
      var data = url.parse(req.url, true).query;
      res.setHeader('Content-Type', 'text/html')

      console.log(this)

      if (controllerUtils.isEmailValid(data["EmailAddress"]) && controllerUtils.isNameValid(data["FirstName"]) && controllerUtils.isNameValid(data["LastName"]) && controllerUtils.isCaptchaTextCorrect(data["CaptchaText"], captchaText)) {
        let htmlcode = '<p class = "valid-data">Email sent!</p>'
        res.statusCode = 200
        res.write(htmlcode)

        var transporter = await nodemailer.createTransport({
          service: 'gmail',
          auth: {
            user: 'testjavanodeemail@gmail.com',
            pass: 'Kcropcps13'
          }
        });
        var mailOptions = {
          from: data["EmailAddress"],
          to: 'testjavanodeemail@gmail.com',
          subject: `Contact-Us Customer Email - ${data["EmailAddress"]}`,
          text: `New email from ${data["FirstName"]} ${data["LastName"]} (${data["EmailAddress"]}):\n${data["EmailContent"]}`
        };
        var status = await db.insert({ FirstName: data["FirstName"], LastName: data["LastName"], EmailAddress: data["EmailAddress"], Content: data["EmailContent"] }, "user_details")
        await transporter.sendMail(mailOptions, function(error, info) {
          if (error) {
            console.log(error);
          } else {
            console.log('Email sent: ' + info.response);
          }
        });
      } else {
        if (!controllerUtils.isCaptchaTextCorrect(data["CaptchaText"], captchaText)) {
          let htmlcode = '<p class = "invalid-data">Invalid Captcha Text!</p>'
          res.statusCode = 200
          res.write(htmlcode)
        }
        if (!controllerUtils.isEmailValid(data["EmailAddress"])) {
          let htmlcode = '<p class = "invalid-data">Email incorrect!</p>'
          res.statusCode = 200
          res.write(htmlcode)
        }
        if (!controllerUtils.isNameValid(data["FirstName"])) {
          let htmlcode = '<p class = "invalid-data">First Name is mandatory!</p>'
          res.statusCode = 200
          res.write(htmlcode)
        }
        if (!controllerUtils.isNameValid(data["LastName"])) {
          let htmlcode = '<p class = "invalid-data">Last Name is mandatory!</p>'
          res.statusCode = 200
          res.write(htmlcode)
        }

      }
      res.end();
    } catch (e) {
      console.log(e)
      res.statusCode = 500
      res.setHeader('Content-Type', 'text/html')
      res.write('Internal server error')
    }
  }

  getCaptcha(req, res) {
    try {
      let captcha = svgCaptcha.create();
      captchaText = captcha.text
      let compressedData = zlib.gzipSync(captcha.data);

      res.writeHead(200, { 'Content-Type': 'image/svg+xml', 'Content-Encoding': 'gzip' });
      res.write(compressedData)
    } catch (e) {
      console.log(e)
      res.statusCode = 500
      res.setHeader('Content-Type', 'text/html')
      res.write('Internal server error')
    }
  }
}

module.exports = { Controller }