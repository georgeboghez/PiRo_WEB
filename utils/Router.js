class Router {
  constructor () {
    this.getRoutes = {}
    this.postRoutes = {}
  }

  use (url, router) {
    let el
    for (el in router.getRoutes) {
      this.getRoutes[url + el] = router.getRoutes[el]
    }
    for (el in router.postRoutes) {
      this.postRoutes[url + el] = router.postRoutes[el]
    }
  }

  post (url, controller) {
    this.postRoutes[url] = controller
  }

  get (url, controller) {
    this.getRoutes[url] = controller
  }

  route (req, res) {
    var url = req.url.split('?')[0]
    console.log('request at ' + url)
    if (req.method === 'GET') {
      if (this.getRoutes[url] !== undefined) {
        try {
          //this.getRoutes[url](req, res)
          this.handleRoute(req, res, this.getRoutes[url])
          return
        } catch (e) {
          console.log(e)
        }
      }
    }
    if (req.method === 'POST') {
      if (this.postRoutes[url] !== undefined) {
        try {
          // this.postRoutes[url](req, res)
          this.handleRoute(req, res, this.postRoutes[url])
          return
        } catch (e) {
          console.log(e)
        }
      }
    }
    res.end()
  }

  handleRoute (req, res, route) {    
      if(route.constructor.name == 'AsyncFunction') {
        route(req, res).then(_ => res.end()).catch(e => {console.log(e.message)})
      }
      else {
        route(req, res)
        res.end()
      }

  }
}

module.exports = { Router }
