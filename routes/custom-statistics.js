const { Router } = require('../utils/Router')
const statisticsController = require('../controller/custom-statistics')

var router = new Router()

router.get('/chart-test', statisticsController.getChartHTML)
router.get('/custom-statistics', statisticsController.getCustomStatsHTML)
router.get('/css/custom-statistics.css', statisticsController.getCSS)
router.get('/assets/img/graph.png', statisticsController.getSVG)
router.get('/chart-gender', statisticsController.getGenderChart)
router.get('/question-chart', statisticsController.getQuestionChartData)
router.get('/get-institutions', statisticsController.getInstitutions)
router.get('/gender-inst-chart', statisticsController.getInstGenderChart)
router.get('/question-inst-chart', statisticsController.getInstQuestionChart)
router.get('/comparison-chart', statisticsController.getComparisonChart)
router.get('/country-chart', statisticsController.getCountryChart)
router.get('/js/custom-statistics.js', statisticsController.getJS)
router.get('/assets/img/loading.gif', statisticsController.getGIF)


module.exports.statistics = router