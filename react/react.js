var fs = require('fs');
var React = require('react');
var assign = require('object-assign');
var compiled;
var tplData;
var str;

var escaped = React.createClass({displayName: "Content",
    render: function () {
        var model = this.props;
        var tmp = [];

        if(model.projects.length){
            model.projects.forEach(function(project){
                tmp.push(React.createElement("a", {href: project.url, key: project.name}, project.name));
            })
        } else{
            tmp.push(React.createElement("span", null, "No projects"));
        }

        return (
            React.createElement("html", null,
                React.createElement("head", null,
                    React.createElement("title", null, model.title)
                ),
                React.createElement("body", null,
                    React.createElement("p", null, model.text),
                    tmp
                )
            )
        );
    }
});

var unescaped = React.createClass({displayName: "Content",
    render: function () {
        var model = this.props;
        var tmp = [];



        return (
            React.createElement("html", null,
                React.createElement("head", null,
                    React.createElement("title", null, "model.title")
                ),
                React.createElement("body", null,
                    React.createElement("p", null, "model.text"),
                    "tmp"
                )
            )
        );
    }
});

var esc = escaped;
var unesc = unescaped;

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

module.exports.prepare = function (data, done) {
	str = './tpl_escaped';
	tplData = data;
	//compiled = renderFile(str, tplData);
    //console.log(compiled);

    compiled = React.createFactory(esc);
	done();
};

module.exports.prepareUnescaped = function (data, done) {
    str = './tpl_unescaped';
	tplData = data;
	//compiled = renderFile(str, tplData);

    compiled = React.createFactory(unesc);
	done();
};

module.exports.step = function (done) {
	//var html = renderFile(str, tplData);
    var html = React.renderToStaticMarkup(compiled(tplData));
   // console.log(1)

    done(undefined, html);
};