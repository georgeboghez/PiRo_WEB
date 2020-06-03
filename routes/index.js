const { Router } = require('../utils/Router')
const indexController = require('../controller/index')

var router = new Router()


router.get('/', indexController.getIndexHTML)
router.get('/index', indexController.getIndexHTML)
router.get('/index.html', indexController.getIndexHTML)
router.get('/css/header.css', indexController.getCSS)
router.get('/css/footer.css', indexController.getCSS)
router.get('/css/page-content.css', indexController.getCSS)
router.get('/css/main-page.css', indexController.getCSS)
router.get('/assets/img/romania.svg', indexController.getSVG)
router.get('/assets/img/world.svg', indexController.getSVG)
router.get('/assets/img/worldmap.svg', indexController.getSVG)
router.get('/assets/img/simple_worldmap.svg', indexController.getSVG)
router.get('/assets/img/continents.svg', indexController.getSVG)
router.get('/assets/img/ag.svg', indexController.getSVG)
router.get('/assets/img/school.svg', indexController.getSVG)
router.get('/assets/img/dice.svg', indexController.getSVG)
router.get('/assets/img/menu.svg', indexController.getSVG)
router.get('/assets/img/questionmark.svg', indexController.getSVG)
router.get('/js/header.js', indexController.getJS)
router.get('/js/index.js', indexController.getJS)


module.exports.index = router