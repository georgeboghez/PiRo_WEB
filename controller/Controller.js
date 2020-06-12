const fs = require('fs')
const zlib = require('zlib');
const util = require('util');
const url = require('url');
const DataAccessObject = require('../model/DataAccessObject')
const controllerUtils = require('../utils/controllerUtils')
const nodemailer = require('nodemailer')
const svgCaptcha = require('svg-captcha')

var captchaText = '';

class Controller {
  constructor() {}

  getHTML(req, res) {
    try {
      let indexHTML = fs.readFileSync('./views' + req.url.split('?')[0])
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
      let css = fs.readFileSync('./views' + req.url.split('?')[0])
      let compressedData = zlib.gzipSync(css);

      res.writeHead(200, { 'Content-Type': 'text/css', 'Content-Encoding': 'gzip', 'Cache-Control': 'public, max-age=31557600' });
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
      let svg = fs.readFileSync('views' + req.url.split('?')[0])
      let compressedData = zlib.gzipSync(svg);

      res.writeHead(200, { 'Content-Type': 'image/svg+xml', 'Content-Encoding': 'gzip', 'Cache-Control': 'public, max-age=31557600' });
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
      let png = fs.readFileSync('views' + req.url.split('?')[0])
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
      let js = fs.readFileSync('views' + req.url.split('?')[0])
      let compressedData = zlib.gzipSync(js);

      res.writeHead(200, { 'Content-Type': 'text/javascript', 'Content-Encoding': 'gzip', 'Cache-Control': 'public, max-age=31557600' });
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
      let institutions = await DataAccessObject.distinct("CNTSCHID");

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
      let maleCount = await DataAccessObject.count({ ST004D01T: "1.0" });
      let femaleCount = await DataAccessObject.count({ ST004D01T: "2.0" });

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
      let maleCount = await DataAccessObject.count(query)
      query = { CNTSCHID: data["institutionID"], ST004D01T: "2.0" }
      let femaleCount = await DataAccessObject.count(query)

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
      let answers = await DataAccessObject.distinct(data.questionId);
      let index = answers.indexOf('');

      if (index > -1) {
        answers.splice(index, 1);
      }
      answers = answers.sort();

      query['CNTSCHID'] = data['institutionID']

      let results = {}
      for (index in answers) {
        query[data.questionId] = answers[index];
        results[answers[index]] = await DataAccessObject.count(query);
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
      let romania_result = await DataAccessObject.findOne(query, projection, "worldwide_ranking");
      query["Country"] = data.country;
      let second_country_result = await DataAccessObject.findOne(query, projection, "worldwide_ranking");

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

      let answers = await DataAccessObject.distinct(data.questionId);
      let index = answers.indexOf('');
      if (index > -1) {
        answers.splice(index, 1);
      }
      answers = answers.sort();

      let results = {}
      for (index in answers) {
        query[data.questionId] = answers[index];
        results[answers[index]] = await DataAccessObject.count(query);
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

      let answers = await DataAccessObject.distinct(data.questionId);
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
        resultsInstitution1[answers[index]] = await DataAccessObject.count(query);
        query['CNTSCHID'] = data.institution2
        query[data.questionId] = answers[index];
        resultsInstitution2[answers[index]] = await DataAccessObject.count(query);
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
      let gif = fs.readFileSync('views' + req.url.split('?')[0])
      let compressedData = zlib.gzipSync(gif);

      res.writeHead(200, { 'Content-Type': 'image/gif', 'Content-Encoding': 'gzip', 'Cache-Control': 'public, max-age=31557600' });
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

      if (controllerUtils.isEmailValid(data["EmailAddress"]) && controllerUtils.isNameValid(data["FirstName"]) && controllerUtils.isNameValid(data["LastName"]) && controllerUtils.isCaptchaTextCorrect(data["CaptchaText"], captchaText)) {
        captchaText = 'ReCaptcha Safety Measure &%!@1234'
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
        var status = await DataAccessObject.insert({ FirstName: data["FirstName"], LastName: data["LastName"], EmailAddress: data["EmailAddress"], Content: data["EmailContent"] }, "user_details")
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

  async getAllCountries(req, res) {
    try {
      let countries = await DataAccessObject.distinct("Country", "worldwide_ranking");
      countries.sort(function(a, b) { return a.localeCompare(b); })

      let compressedData = zlib.gzipSync(JSON.stringify({ countries: countries }));

      res.writeHead(200, { 'Content-Type': 'application/json', 'Content-Encoding': 'gzip', 'Cache-Control': 'public, max-age=31557600' });
      res.write(compressedData)
    } catch (e) {
      console.log(e)
      res.statusCode = 500
      res.setHeader('Content-Type', 'text/html')
      res.write('Internal server error')
    }
  }

  async getQuestionsCategorized(req, res) {
    try {
      const QUESTIONS_TRUST = ["ST123Q02NA", "ST123Q03NA", "ST123Q04NA"]

      const QUESTIONS_FEELINGS = ["ST186Q10HA", "ST186Q09HA", "ST186Q08HA", "ST186Q07HA", "ST186Q06HA", "ST186Q05HA", "ST186Q03HA", "ST186Q02HA", "ST186Q01HA"]

      const QUESTIONS_HOME_CONDITIONS = ['ST011Q01TA', 'ST011Q02TA', 'ST011Q03TA', 'ST011Q04TA', 'ST011Q05TA', 'ST011Q06TA', 'ST011Q07TA', 'ST011Q08TA', 'ST011Q09TA', 'ST011Q10TA', 'ST011Q11TA', 'ST011Q12TA', 'ST011Q16NA', 'ST011D17TA', 'ST011D18TA', 'ST011D19TA', 'ST012Q01TA', 'ST012Q02TA', 'ST012Q03TA', 'ST012Q05NA', 'ST012Q06NA', 'ST012Q07NA', 'ST012Q08NA', 'ST012Q09NA', 'ST013Q01TA']

      const QUESTIONS_READING = ["ST150Q01IA", "ST158Q07HA", "ST158Q06HA", "ST158Q05HA", "ST158Q04HA", "ST158Q03HA", "ST158Q02HA", "ST158Q01HA", "ST154Q01HA", "ST153Q10HA", "ST153Q09HA", "ST153Q08HA", "ST153Q06HA", "ST153Q05HA", "ST153Q04HA", "ST153Q03HA", "ST153Q02HA", "ST153Q01HA", "ST152Q08IA", "ST152Q07IA", "ST152Q06IA", "ST152Q05IA", "ST150Q04HA", "ST150Q03IA", "ST150Q02IA", "ST160Q05IA", "ST160Q04IA", "ST160Q03IA", "ST160Q02IA", "ST160Q01IA", "ST165Q05IA", "ST165Q04IA", "ST165Q03IA", "ST165Q02IA", "ST165Q01IA", "ST164Q06IA", "ST164Q05IA", "ST164Q04IA", "ST164Q03IA", "ST164Q02IA", "ST164Q01IA", "ST163Q04HA", "ST163Q03HA", "ST163Q02HA"]

      const QUESTIONS_AGREE = ["ST161Q08HA", "ST161Q07HA", "ST161Q06HA", "ST161Q03HA", "ST161Q02HA", "ST161Q01HA", "ST185Q03HA", "ST185Q02HA", "ST185Q01HA", "ST184Q01HA", "ST183Q03HA", "ST183Q02HA", "ST183Q01HA", "ST182Q06HA", "ST182Q05HA", "ST182Q04HA", "ST182Q03HA", "ST181Q04HA", "ST181Q03HA", "ST181Q02HA"]

      const QUESTIONS_MATH = ["EC001Q02NA", "EC014Q01NA", "EC014Q02NA", "EC015Q01NA", "EC015Q07NA", "EC015Q08NA", "EC017Q01NA", "EC017Q02NA", "EC018Q01NA", "EC018Q03NA", "EC018Q04NA", "EC019Q03NA", "EC019Q07NA", "EC019Q10NA", "EC019Q12NA"]

      const QUESTIONS_SCIENCE = ["PA002Q01TA", "PA002Q02TA", "PA002Q03TA", "PA002Q04TA", "PA002Q05TA", "PA002Q06NA", "PA002Q07NA", "PA002Q08NA", "PA002Q09NA", "PA002Q10NA", "ST071Q01NA", "ST094Q01NA", "ST094Q02NA", "ST094Q03NA", "ST094Q04NA", "ST094Q05NA", "ST095Q04NA", "ST095Q07NA", "ST095Q08NA", "ST095Q13NA", "ST095Q15NA"]

      let doc = await DataAccessObject.findOne({ "CNTRYID": "Country Identifier" }, {}, "fields_infromation");
      
      let json = {}

      json["QUESTIONS_TRUST"] = {}
      for(let id in QUESTIONS_TRUST) {
        json["QUESTIONS_TRUST"][QUESTIONS_TRUST[id]] = doc[QUESTIONS_TRUST[id]].replace('<', '').replace('>', '')
      }

      json["QUESTIONS_FEELINGS"] = {}
      for(let id in QUESTIONS_FEELINGS) {
        json["QUESTIONS_FEELINGS"][QUESTIONS_FEELINGS[id]] = doc[QUESTIONS_FEELINGS[id]].replace('<', '').replace('>', '')
      }

      json["QUESTIONS_HOME_CONDITIONS"] = {}
      for(let id in QUESTIONS_HOME_CONDITIONS) {
        json["QUESTIONS_HOME_CONDITIONS"][QUESTIONS_HOME_CONDITIONS[id]] = doc[QUESTIONS_HOME_CONDITIONS[id]].replace('<', '').replace('>', '')
      }

      json["QUESTIONS_READING"] = {}
      for(let id in QUESTIONS_READING) {
        json["QUESTIONS_READING"][QUESTIONS_READING[id]] = doc[QUESTIONS_READING[id]].replace('<', '').replace('>', '')
      }

      json["QUESTIONS_AGREE"] = {}
      for(let id in QUESTIONS_AGREE) {
        json["QUESTIONS_AGREE"][QUESTIONS_AGREE[id]] = doc[QUESTIONS_AGREE[id]].replace('<', '').replace('>', '')
      }

      json["QUESTIONS_MATH"] = {}
      for(let id in QUESTIONS_MATH) {
        json["QUESTIONS_MATH"][QUESTIONS_MATH[id]] = doc[QUESTIONS_MATH[id]].replace('<', '').replace('>', '')
      }

      json["QUESTIONS_SCIENCE"] = {}
      for(let id in QUESTIONS_SCIENCE) {
        json["QUESTIONS_SCIENCE"][QUESTIONS_SCIENCE[id]] = doc[QUESTIONS_SCIENCE[id]].replace('<', '').replace('>', '')
      }

      let compressedData = zlib.gzipSync(JSON.stringify(json))

      res.writeHead(200, { 'Content-Type': 'application/json', 'Content-Encoding': 'gzip', 'Cache-Control': 'public, max-age=31557600' });
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