const { Router } = require('../utils/Router')
const { Controller } = require('../controller/Controller')

var router = new Router()
var controller = new Controller()

router.get('/contact-us.html', controller.getHTML)
router.get('/css/header.css', controller.getCSS)
router.get('/css/footer.css', controller.getCSS)
router.get('/css/contact-us.css', controller.getCSS)
router.get('/assets/img/docs.svg', controller.getSVG)
router.get('/assets/img/questionmark.svg', controller.getSVG)
router.get('/assets/img/suitcase.svg', controller.getSVG)
router.get('/js/contact-us.js', controller.getJS)
router.get('/js/header.js', controller.getJS)
router.get('/captcha', controller.getCaptcha)

router.post('/sendMail', controller.sendMailtoFront)


module.exports.contactus = router
