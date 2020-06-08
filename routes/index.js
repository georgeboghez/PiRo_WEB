const { Router } = require('../utils/Router')
const { Controller } = require('../controller/Controller')

var router = new Router()
var controller = new Controller()

router.get('/', controller.getIndexHTML)
router.get('/index', controller.getIndexHTML)
router.get('/index.html', controller.getIndexHTML)
router.get('/css/header.css', controller.getCSS)
router.get('/css/footer.css', controller.getCSS)
router.get('/css/page-content.css', controller.getCSS)
router.get('/css/main-page.css', controller.getCSS)
router.get('/assets/img/romania.svg', controller.getSVG)
router.get('/assets/img/world.svg', controller.getSVG)
router.get('/assets/img/worldmap.svg', controller.getSVG)
router.get('/assets/img/simple_worldmap.svg', controller.getSVG)
router.get('/assets/img/dot_map.svg', controller.getSVG)
router.get('/assets/img/continents.svg', controller.getSVG)
router.get('/assets/img/ag.svg', controller.getSVG)
router.get('/assets/img/school.svg', controller.getSVG)
router.get('/assets/img/dice.svg', controller.getSVG)
router.get('/assets/img/menu.svg', controller.getSVG)
router.get('/assets/img/questionmark.svg', controller.getSVG)
router.get('/js/header.js', controller.getJS)
router.get('/js/index.js', controller.getJS)
router.get('/assets/img/radu.PNG', controller.getPNG)
router.get('/assets/img/teofil.png', controller.getPNG)
router.get('/assets/img/george.png', controller.getPNG)
router.get('/404Page.html', controller.get404Page)


module.exports.index = router