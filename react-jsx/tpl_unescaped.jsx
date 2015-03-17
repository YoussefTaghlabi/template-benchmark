var React = require('react');

var Content = React.createClass({
    render: function () {
        var model = this.props;
        var tmp = [];



        return (
            <html>
                <head>
                    <title>model.title</title>
                </head>
                <body>
                    <p>model.text</p>
                    tmp
                </body>
            </html>
        );
    }
});

module.exports = Content;