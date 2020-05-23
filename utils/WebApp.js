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
      // res.end()
      /*

      if(fct.constructor.name == 'AsyncFunction') {
        fct(req, res).then(res.end)
      }
      else {
        fct(req, res)
        res.end()
      }*/
      
    })
    server.listen(port)
    console.log(`app running on PORT: ${port}`)
  }
}

module.exports = { WebApp }
