const fs = require('fs')
const util = require('util');

const nodemailer = require('nodemailer');

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
async function toStringChunk(req){
  let body = '';
  req.on('data', chunk => {
      body += chunk.toString(); // convert Buffer to string
  });
}
async function sendMailtoFront(req, res)
{
  try {
    var body;
    await toStringChunk(req);
    console.log(body);
    req.on('end', () => {
        var data = JSON.parse(body);
        console.log(data);
        console.log(data["EmailAdress"]);
        // console.log(body);
        // res.end('ok');

        if(!isEmailValid(data["EmailAdress"])){
          let htmlcode = '<p id = "msgemailfalse">Email incorrect!</p>'
          res.statusCode = 200
          res.setHeader('Content-Type', 'text/html')
          res.write(htmlcode)
        }
        if(!isNameValid(data["FirstName"])){
          let htmlcode = '<p id = "msgemailfalse">First Name is mandatory!</p>'
          res.statusCode = 200
          res.setHeader('Content-Type', 'text/html')
          res.write(htmlcode)
        }
        if(!isNameValid(data["LastName"])){
          let htmlcode = '<p id = "msgemailfalse">Last Name is mandatory!</p>'
          res.statusCode = 200
          res.setHeader('Content-Type', 'text/html')
          res.write(htmlcode)
        }
        if(isEmailValid(data["EmailAdress"]) && isNameValid(data["FirstName"]) && isNameValid(data["LastName"]))
          {
          		var transporter = nodemailer.createTransport({
          		service: 'gmail',
          		auth: {
          		user: 'testjavanodeemail@gmail.com',
          		pass: 'Kcropcps13'
          		}
          		});
          		var mailOptions = {
          		from: data["EmailAdress"],
          		to: 'testjavanodeemail@gmail.com',
          		subject: 'Contact-Us Customer Email',
          		text: data["EmailContent"]
          		};
          		transporter.sendMail(mailOptions, function(error, info){
          		if (error) {
          		console.log(error);
          		} else {
          		console.log('Email sent: ' + info.response);
          		}
          		});
        }

    });
    res.end();
  } catch (e) {
    console.log(e)
    res.statusCode = 500
    res.setHeader('Content-Type', 'text/html')
    res.write('Internal server error')
  }
}
function isEmailValid(email) {
  var emailRegex = /^[-!#$%&'*+\/0-9=?A-Z^_a-z{|}~](\.?[-!#$%&'*+\/0-9=?A-Z^_a-z`{|}~])*@[a-zA-Z0-9](-*\.?[a-zA-Z0-9])*\.[a-zA-Z](-?[a-zA-Z0-9])+$/;
         if (!email)
            return false;
         if(email.length>254)
            return false;
         var valid = emailRegex.test(email);
         if(!valid)
            return false;
         var parts = email.split("@");
         if(parts[0].length>64)
            return false;
         var domainParts = parts[1].split(".");
         if(domainParts.some(function(part) { return part.length>63; }))
            return false;
         return true;
}
function isNameValid(name) {
        if (!name)
           return false;
        if(name.length>254)
           return false;
        return true;
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


module.exports = { exempleAPI, getContactHTML, getCSS, getPNG, getJS, sendMailtoFront }
