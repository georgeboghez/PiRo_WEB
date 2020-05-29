const { Router } = require('../utils/Router')
const contactusController = require('../controller/contactus')
// const aboutController = require('../controller/about')
// const statisticsController = require('../controller/statistics')

var router = new Router()

router.get('/contact-us', contactusController.getContactHTML)
router.get('/contact-us.html', contactusController.getContactHTML)
router.get('/css/header.css', contactusController.getCSS)
router.get('/css/footer.css', contactusController.getCSS)
router.get('/css/contact-us.css', contactusController.getCSS)
router.get('/assets/img/docs.svg', contactusController.getSVG)
router.get('/assets/img/questionmark.svg', contactusController.getSVG)
router.get('/assets/img/suitcase.svg', contactusController.getSVG)

router.post('/sendMail', contactusController.sendMailtoFront)

// router.get('about.html', aboutController.getHTML)

// router.get('statistics.html', statisticsController.getHTML)

///exemplu
///router.get(url_string, functieApelata)
///
module.exports.contactus = router
