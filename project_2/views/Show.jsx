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
                <div class="containerr">
                                    <ul class="navbarheader">
                                        <li class="navitem">
                                            <a href="/players">Home</a>
                                        </li>
                                        <li class="navitem">
                                            <a href="/players/trivia">Trivia</a>
                                        </li>
                                        <li class="navitem">
                                            <a href="/players/Newnew">Make Your Own List</a>
                                        </li>
                                    </ul>
                                
                        <h1 class="showpageheader">{firstValue}</h1>
                            <p class="showImg"><img  class="showpicturetag" src={fifthValue} alt=""/></p><br/>
                            <p class="showpagedescription">{firstValue} played for the {secondValue} and has averaged {thirdValue} points throughout his playing career. He has also won {fourthValue} championships during his tenure with the {secondValue}.</p> <br/>
                </div>
            </Default>
        )
    }
}

module.exports = Show;