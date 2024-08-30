const fs = require('fs')
var he = require('he');
var body = require('./fixed.json')

function rebuild(){
    var text = fs.readFileSync('./index.template', 'utf-8')
    fs.writeFileSync('./index.html', text.replace('${body-load}', he.encode(JSON.stringify(body))), 'utf-8')
}

rebuild()