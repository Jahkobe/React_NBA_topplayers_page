const React = require('react');

class Show extends React.Component {
    render() {
        // const name = this.props.fruit.name;
        // const color = this.props.fruit.color;
        // const readyToEat = this.props.fruit.readyToEat;
        // destructuring
        const { name, team, championships, ppg, imageee } = this.props.player;
        return (
            <div>
                <h1>Players Show Page</h1>
                <p><img src={imageee} alt="" style={{width:200, height: 200}}/></p><br/>
                <p>The {name} is {team} </p> <br/>
            </div>
        )
    }
}

module.exports = Show;