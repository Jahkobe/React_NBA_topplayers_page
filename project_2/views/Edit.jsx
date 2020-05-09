const React = require('react');
const Default = require('./Default');

class Edit extends React.Component {
    render() {
        const { _id, firstValue, secondValue, thirdValue, fourthValue, fifthValue} = this.props.player;
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

                        <h1 class="editplayerheader">Edit Player Page</h1>
                                {/* url - /fruits/id_of_fruit? parameter to indicate the request */}
                                    <form class="editformpage" action={`/players/${_id}?_method=PUT`} method="POST">
                                            Name: <br/> <input class="textfield" type="text" name="firstValue" defaultValue={firstValue}/> <br/>
                                            Team: <br/><input class="textfield" type="text" name="secondValue" defaultValue={secondValue}/> <br/>
                                            Championships: <br/><input class="textfield" type="text" name="fourthValue" defaultValue={fourthValue}/> <br/>
                                            PPG: <br/><input class="textfield" type="text" name="thirdValue" defaultValue={thirdValue}/><br/>
                                            Img: <br/><input class="textfield" type="text" name="fifthValue" defaultValue={fifthValue}/><br/>
                                            <input type="submit" name="" value="Submit Changes"/>
                                    </form>
                    </div>
            </Default>
        )
    }
}

module.exports = Edit;