const { Router } = require('./utils/Router')
const { WebApp } = require('./utils/WebApp')
const constants = require('./utils/constants')
const { index } = require('./routes/index')
const { contactus } = require('./routes/contactus')
const { about } = require('./routes/about')
const { statistics } = require('./routes/custom-statistics')

const router = new Router()

router.use('', index)
router.use('', contactus)
router.use('', about)
router.use('', statistics)
console.log(router)

const app = new WebApp(router)
app.listen(process.env.PORT || constants.port)

console.log()
