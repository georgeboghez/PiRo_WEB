const { Router } = require('../utils/Router')
const statisticsController = require('../controller/custom-statistics')

var router = new Router()


router.get('/chart-test', statisticsController.getChartHTML)
router.get('/custom-statistics', statisticsController.getCustomStatsHTML)
router.get('/css/custom-statistics.css', statisticsController.getCSS)
router.get('/assets/img/graph.png', statisticsController.getSVG)
router.get('/chart-gender', statisticsController.getGenderChart)
router.post('/question-chart', statisticsController.getQuestionChartData)



module.exports.statistics = router
