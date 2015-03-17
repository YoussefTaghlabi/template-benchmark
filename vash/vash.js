var fs = require('fs');
var vash = require('vash');
var compiled;
var tplData;

module.exports.prepare = function (data, done) {
	var str = fs.readFileSync(__dirname + '/tpl_escaped.vash', 'utf8');
	tplData = data;
	compiled = vash.compile(str,tplData);
	done();
};

module.exports.prepareUnescaped = function (data, done) {
	var str = fs.readFileSync(__dirname + '/tpl_unescaped.vash', 'utf8');
	tplData = data;
	compiled = vash.compile(str,tplData);
	done();
};

module.exports.step = function (done) {
	var html = compiled(tplData);
	done(undefined, html);
};