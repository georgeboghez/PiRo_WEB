const fs = require('fs')
const zlib = require('zlib');
const util = require('util');
const url = require('url')
const db = require('../model/db')
const controllerUtils = require('../utils/controllerUtils')
const nodemailer = require('nodemailer');
const svgCaptcha = require('svg-captcha');

var captchaText = ''

async function sendMailtoFront(req, res) {
  try {
    var data = url.parse(req.url, true).query;
    res.setHeader('Content-Type', 'text/html')

    if (isEmailValid(data["EmailAddress"]) && isNameValid(data["FirstName"]) && isNameValid(data["LastName"]) && isCaptchaTextCorrect(data["CaptchaText"])) {
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
      if (!isCaptchaTextCorrect(data["CaptchaText"])) {
        let htmlcode = '<p class = "invalid-data">Invalid Captcha Text!</p>'
        res.statusCode = 200
        res.write(htmlcode)
      }
      if (!isEmailValid(data["EmailAddress"])) {
        let htmlcode = '<p class = "invalid-data">Email incorrect!</p>'
        res.statusCode = 200
        res.write(htmlcode)
      }
      if (!isNameValid(data["FirstName"])) {
        let htmlcode = '<p class = "invalid-data">First Name is mandatory!</p>'
        res.statusCode = 200
        res.write(htmlcode)
      }
      if (!isNameValid(data["LastName"])) {
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

function isCaptchaTextCorrect(captcha_text) {
  return captchaText == captcha_text;
}

function isEmailValid(email) {
  var emailRegex = /^[-!#$%&'*+\/0-9=?A-Z^_a-z{|}~](\.?[-!#$%&'*+\/0-9=?A-Z^_a-z`{|}~])*@[a-zA-Z0-9](-*\.?[a-zA-Z0-9])*\.[a-zA-Z](-?[a-zA-Z0-9])+$/;
  if (!email)
    return false;
  if (email.length > 254)
    return false;
  var valid = emailRegex.test(email);
  if (!valid)
    return false;
  var parts = email.split("@");
  if (parts[0].length > 64)
    return false;
  var domainParts = parts[1].split(".");
  if (domainParts.some(function(part) { return part.length > 63; }))
    return false;
  return true;
}

function isNameValid(name) {
  if (!name)
    return false;
  if (name.length > 254)
    return false;
  return true;
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

function getContactHTML(req, res) {
  try {
    let html = fs.readFileSync('./views/contact-us.html')
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


function getCaptcha(req, res) {
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


module.exports = { getContactHTML, getCSS, getSVG, getJS, sendMailtoFront, getCaptcha }