var http = require('http')
var url = require('url')
var fs = require('fs')

// yeah hi bro

const port = process.env.PORT || 8080

var server = http.createServer(function (req, res) {
  var q = url.parse(req.url, true)
  if (q.pathname == "/bans") {
    fs.readFile('./bans.json', function (err, data) {
      res.writeHead(200, { 'Content-Type': 'application/json' })
      res.write(data)
      res.end()
    })
  }
  else {
    res.writeHead(403, { 'Content-Type': 'text/html' })
    res.end(`erm actually you're supposed to go to site/bans!`)
  }
})
server.listen(port, () => {
  console.log(`started on port ${port}`)
})