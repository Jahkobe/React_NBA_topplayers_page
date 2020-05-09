const React = require('react');
const Default = require('./Default');

class Show extends React.Component {
    render() {
        // const name = this.props.fruit.name;
        // const color = this.props.fruit.color;
        // const readyToEat = this.props.fruit.readyToEat;
        // destructuring
        const { firstValue, secondValue, fourthValue, thirdValue, fifthValue } = this.props.player;
        return (
            <Default>
                <div>
                    <h1>Players Show Page</h1>
                    <p><img src={fifthValue} alt="" style={{width:200, height: 200}}/></p><br/>
                    <p>The {firstValue} is {secondValue} </p> <br/>
                </div>
            </Default>
        )
    }
}

module.exports = Show;