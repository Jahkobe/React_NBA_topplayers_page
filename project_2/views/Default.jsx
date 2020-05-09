const React = require('react');


class Default extends React.Component {
    render() {
        return(
            <html>
                <head>
                    <link rel="stylesheet" href="/css/normalize.css"/>
                    <link rel="stylesheet" href="/css/style.css"/>
                    <link href="https://fonts.googleapis.com/css2?family=Oswald:wght@600&display=swap" rel="stylesheet"></link>
                  
                    <title>Basketball App</title>
                </head>
                <body>
                
                    {this.props.children}
                </body>
            </html>
        )
    }
}

module.exports = Default;