const http = require('http')

class WebApp {
  constructor (router) {
    this.router = router
  }

  use () {

  }

  listen (port) {
    var app = this
    var server = http.createServer(function (req, res) {
      let fct = app.router.route
      app.router.route(req, res)
    })
    server.listen(port)
    console.log(`app running on PORT: ${port}`)
  }
}

module.exports = { WebApp }
