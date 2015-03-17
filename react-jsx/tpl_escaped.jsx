var React = require('react');

var Content = React.createClass({
    render: function () {
        var model = this.props;
        var tmp = [];

        if(model.projects.length){
            model.projects.forEach(function(project){
                tmp.push(<a href={project.url} key={project.name}>{project.name}</a>);
            })
        } else{
            tmp.push(<span>No projects</span>);
        }

        return (
            <html>
                <head>
                    <title>{model.title}</title>
                </head>
                <body>
                    <p>{model.text}</p>
                    {tmp}
                </body>
            </html>
        );
    }
});

module.exports = Content;