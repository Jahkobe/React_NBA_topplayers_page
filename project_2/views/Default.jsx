const React = require('react');


class Default extends React.Component {
    render() {
        return(
            <html>
                <head>
                    <link rel="stylesheet" href="/css/style.css"/>
                    <link rel="stylesheet" href="https://stackpath.bootstrapcdn.com/bootstrap/4.1.0/css/bootstrap.min.css" 
integrity="sha384-9gVQ4dYFwwWSjIDZnLEWnxCjeSWFphJiwGPXr1jddIhOegiu1FwO5qRGvFXOdJZ4" 
crossorigin="anonymous"></link>
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