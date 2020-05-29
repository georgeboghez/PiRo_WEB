const { Router } = require('../utils/Router')
const indexController = require('../controller/index')
// const aboutController = require('../controller/about')
// const statisticsController = require('../controller/statistics')

var router = new Router()


router.get('/exemplu', indexController.exempleAPI)
router.get('/', indexController.getIndexHTML)
router.get('/chart-institutional', indexController.createChartInstitutional)
router.get('/index', indexController.getIndexHTML)
router.get('/index.html', indexController.getIndexHTML)
router.get('/css/header.css', indexController.getCSS)
router.get('/css/footer.css', indexController.getCSS)
router.get('/css/page-content.css', indexController.getCSS)
router.get('/css/main-page.css', indexController.getCSS)
router.get('/assets/img/romania.svg', indexController.getSVG)
router.get('/assets/img/world.svg', indexController.getSVG)
router.get('/assets/img/ag.svg', indexController.getSVG)
router.get('/assets/img/school.svg', indexController.getSVG)
router.get('/assets/img/dice.svg', indexController.getSVG)
router.get('/assets/img/menu.svg', indexController.getSVG)
router.get('/assets/img/questionmark.svg', indexController.getSVG)
router.get('/assets/js/header.js', indexController.getJS)


// router.get('about.html', aboutController.getHTML)

// router.get('statistics.html', statisticsController.getHTML)

///exemplu
///router.get(url_string, functieApelata)
///
module.exports.index = router
