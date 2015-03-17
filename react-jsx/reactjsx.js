var fs = require('fs');
var React = require('react');
var nodeJSX = require('node-jsx');
var assign = require('object-assign');
var compiled;
var tplData;
var str;

nodeJSX.install({
    extension: '.jsx',
    harmony: false,
    stripTypes: false
});

var esc = require('./tpl_escaped');
var unesc = require('./tpl_unescaped');

function renderFile(filename, options, cb) {
    var markup = "";

    try {
        var component = require(filename);
        component = component.default || component;
        component = React.createFactory(component);
        markup += React.renderToStaticMarkup(component(options));
    } catch (e) {
        return markup;
    }


    return markup;
}

var obj = {
    esc: React.createFactory(esc),
    unesc: React.createFactory(unesc)
};

module.exports.prepare = function (data, done) {
	str = './tpl_escaped';
	tplData = data;
	//compiled = renderFile(str, tplData);
    //console.log(compiled);

    //compiled = React.createFactory(esc);
    compiled = obj.esc;

	done();
};

module.exports.prepareUnescaped = function (data, done) {
    str = './tpl_unescaped';
	tplData = data;
	//compiled = renderFile(str, tplData);

    //compiled = React.createFactory(unesc);
    compiled = obj.unesc;

    done();
};

module.exports.step = function (done) {
	//var html = renderFile(str, tplData);
    var html = React.renderToStaticMarkup(compiled(tplData));
   // console.log(1)

    done(undefined, html);
};