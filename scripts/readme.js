var _ = require('lodash')
var fs = require('fs')

var module = require('../package.json')

// Read external file
var srcCSS = fs.readFileSync('./dist/'+module.name+'.css', 'utf8')

// Read template
var template = fs.readFileSync('./templates/README.md', 'utf8')

// Create lodash template function
var tpl = _.template(template)

// Render template function to an HTML string
var md = tpl({
  module: module,
  srcCSS: srcCSS
})

// Write file
fs.writeFileSync('./README.md', md)