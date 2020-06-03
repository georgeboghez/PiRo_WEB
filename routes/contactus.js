const { Router } = require('../utils/Router')
const contactusController = require('../controller/contactus')

var router = new Router()


router.get('/contact-us', contactusController.getContactHTML)
router.get('/contact-us.html', contactusController.getContactHTML)
router.get('/css/header.css', contactusController.getCSS)
router.get('/css/footer.css', contactusController.getCSS)
router.get('/css/contact-us.css', contactusController.getCSS)
router.get('/assets/img/docs.svg', contactusController.getSVG)
router.get('/assets/img/questionmark.svg', contactusController.getSVG)
router.get('/assets/img/suitcase.svg', contactusController.getSVG)
router.get('/js/scroller.js', contactusController.getJS)
router.get('/js/header.js', contactusController.getJS)

router.post('/sendMail', contactusController.sendMailtoFront)


module.exports.contactus = router
