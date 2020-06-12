const { Router } = require('../utils/Router')
const { Controller } = require('../controller/Controller')

var router = new Router()
var controller = new Controller()

router.get('/chart-test', controller.getChartHTML)
router.get('/custom-statistics', controller.getCustomStatsHTML)
router.get('/css/custom-statistics.css', controller.getCSS)
router.get('/assets/img/graph.png', controller.getSVG)
router.get('/chart-gender', controller.getGenderChart)
router.get('/question-chart', controller.getQuestionChartData)
router.get('/get-institutions', controller.getInstitutions)
router.get('/get-questions-categorized', controller.getQuestionsCategorized)
router.get('/gender-inst-chart', controller.getInstGenderChart)
router.get('/question-inst-chart', controller.getInstQuestionChart)
router.get('/comparison-chart', controller.getComparisonChart)
router.get('/country-chart', controller.getCountryChart)
router.get('/js/custom-statistics.js', controller.getJS)
router.get('/assets/img/loading.gif', controller.getGIF)


module.exports.statistics = router