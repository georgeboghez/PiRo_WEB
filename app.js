const { Router } = require('./utils/Router')
const { WebApp } = require('./utils/WebApp')
const constants = require('./utils/constants')
const DataAccessObject = require('./model/DataAccessObject')
const { index } = require('./routes/index')
const { contactus } = require('./routes/contactus')
const { statistics } = require('./routes/custom-statistics')

const router = new Router()

try {
  DataAccessObject.connect()
} catch(e) {
  console.log("Couldn't establish database connection: " + e.message);
}

router.use('', index)
router.use('', contactus)
router.use('', statistics)

console.log(router)

const app = new WebApp(router)
app.listen(process.env.PORT || constants.port)
