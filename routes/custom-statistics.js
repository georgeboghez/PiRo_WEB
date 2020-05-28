const { Router } = require('../utils/Router')
const statisticsController = require('../controller/custom-statistics')

var router = new Router()


router.get('/chart-test', statisticsController.getChartHTML)
router.get('/custom-statistics', statisticsController.getCustomStatsHTML)
router.get('/css/custom-statistics.css', statisticsController.getCSS)
router.get('/assets/img/graph.png', statisticsController.getSVG)
router.get('/chart-gender', statisticsController.getGenderChart)
router.post('/question-chart', statisticsController.getQuestionChartData)
router.get('/get-institutions', statisticsController.getInstitutions)
router.post('/gender-inst-chart', statisticsController.getInstGenderChart)
router.post('/question-inst-chart', statisticsController.getInstQuestionChart)
router.post('/comparison-chart', statisticsController.getComparisonChart)
router.post('/country-chart', statisticsController.getCountryChart)
router.get('/js/custom-statistics.js', statisticsController.getJS)



module.exports.statistics = router
