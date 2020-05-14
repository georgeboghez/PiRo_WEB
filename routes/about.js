const { Router } = require('../utils/Router')
const aboutController = require('../controller/about')
// const aboutController = require('../controller/about')
// const statisticsController = require('../controller/statistics')

var router = new Router()

router.get('/about-page', aboutController.getAboutHTML)
router.get('/about-page.html', aboutController.getAboutHTML)
router.get('/css/header.css', aboutController.getCSS)
router.get('/css/footer.css', aboutController.getCSS)
router.get('/css/about-page.css', aboutController.getCSS)
// router.get('about.html', aboutController.getHTML)

// router.get('statistics.html', statisticsController.getHTML)

///exemplu
///router.get(url_string, functieApelata)
///
module.exports.about = router
