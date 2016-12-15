var test = require('tape')
var get = require('simple-get')
var server = require('./server')

var baseUrl = 'http://localhost:13681'

var getUrl = function (url, cb) {
  get.concat(baseUrl + url, cb)
}

var isUrlIndex = function (url, cb) {
  getUrl(url, function (err, res, body) {
    cb(err, body && body.toString('utf8').indexOf('<!doctype') === 0)
  })
}

test('serves index.html on /', t => {
  isUrlIndex('/', function (err, isIndex) {
    t.ifError(err)
    t.ok(isIndex, '/ should be index')
    t.end()
  })
})

test('serves index.html on /foo/bar', t => {
  isUrlIndex('/foo/bar', function (err, isIndex) {
    t.ifError(err)
    t.ok(isIndex, '/ should be index')
    t.end()
  })
})

test('serves css file if it exists', t => {
  getUrl('/css/demo.css', function (err, res, body) {
    t.ifError(err)
    t.ok(body.toString('utf8').indexOf('/* such beautiful css */') === 0, 'should be CSS file')
    t.end()
  })
})

test('serves js file if it exists', t => {
  getUrl('/js/demo.js', function (err, res, body) {
    t.ifError(err)
    t.ok(body.toString('utf8').indexOf('function ()') !== -1, 'should be JS file')
    t.end()
  })
})

test('(shutdown)', function (t) {
  server.close(t.end)
})
