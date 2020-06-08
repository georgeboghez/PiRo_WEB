class Router {
  constructor () {
    this.getRoutes = {}
    this.postRoutes = {}
    this.putRoutes = {}
    this.deleteRoutes = {}
    this.patchRoutes = {}
  }

  use (url, router) {
    let el
    for (el in router.getRoutes) {
      this.getRoutes[url + el] = router.getRoutes[el]
    }
    for (el in router.postRoutes) {
      this.postRoutes[url + el] = router.postRoutes[el]
    }
    for (el in router.putRoutes) {
      this.putRoutes[url + el] = router.putRoutes[el]
    }
    for (el in router.deleteRoutes) {
      this.deleteRoutes[url + el] = router.deleteRoutes[el]
    }
    for (el in router.patchRoutes) {
      this.patchRoutes[url + el] = router.patchRoutes[el]
    }
  }

  get (url, controller) {
    this.getRoutes[url] = controller
  }

  post (url, controller) {
    this.postRoutes[url] = controller
  }

  put (url, controller) {
    this.putRoutes[url] = controller
  }

  delete (url, controller) {
    this.deleteRoutes[url] = controller
  }

  patch (url, controller) {
    this.patchRoutes[url] = controller
  }

  route (req, res) {
    var url = req.url.split('?')[0]
    if (req.method === 'GET') {
      console.log('get request at ' + url)
      if (this.getRoutes[url] !== undefined) {
        try {
          this.handleRoute(req, res, this.getRoutes[url])
          return
        } catch (e) {
          console.log(e)
        }
      }
      else {
        this.getRoutes["/404Page.html"](req, res)
        res.end()
      }
    }
    else if (req.method === 'POST') {
      console.log('post request at ' + url)
      if (this.postRoutes[url] !== undefined) {
        try {
          this.handleRoute(req, res, this.postRoutes[url])
          return
        } catch (e) {
          console.log(e)
        }
      }
      else {
        this.getRoutes["/404Page.html"](req, res)
        res.end()
      }
    }
    else if (req.method === 'PUT') {
      console.log('put request at ' + url)
      if (this.putRoutes[url] !== undefined) {
        try {
          this.handleRoute(req, res, this.putRoutes[url])
          return
        } catch (e) {
          console.log(e)
        }
      }
      else {
        this.getRoutes["/404Page.html"](req, res)
        res.end()
      }
    }
    else if (req.method === 'DELETE') {
      console.log('delete request at ' + url)
      if (this.deleteRoutes[url] !== undefined) {
        try {
          this.handleRoute(req, res, this.deleteRoutes[url])
          return
        } catch (e) {
          console.log(e)
        }
      }
      else {
        this.getRoutes["/404Page.html"](req, res)
        res.end()
      }
    }
    else if (req.method === 'PATCH') {
      console.log('patch request at ' + url)
      if (this.patchRoutes[url] !== undefined) {
        try {
          this.handleRoute(req, res, this.patchRoutes[url])
          return
        } catch (e) {
          console.log(e)
        }
      }
      else {
        this.gethRoutes["/404Page.html"](req, res)
        res.end()
      }
    }
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
