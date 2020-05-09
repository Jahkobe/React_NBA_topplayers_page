const React = require('react');
const Default = require('./Default');

class Edit extends React.Component {
    render() {
        const { _id, firstValue, secondValue, thirdValue, fourthValue, fifthValue} = this.props.player;
        return (
            <Default>
                    <div>
                        <h1>Edit Page</h1>
                                {/* url - /fruits/id_of_fruit? parameter to indicate the request */}
                                    <form action={`/players/${_id}?_method=PUT`} method="POST">
                                            Name: <input type="text" name="firstValue" defaultValue={firstValue}/> <br/>
                                            Team: <input type="text" name="secondValue" defaultValue={secondValue}/> <br/>
                                            Championships: <input type="text" name="fourthValue" defaultValue={fourthValue}/> <br/>
                                            PPG: <input type="text" name="thirdValue" defaultValue={thirdValue}/><br/>
                                            Img: <input type="text" name="fifthValue" defaultValue={fifthValue}/><br/>
                                            <input type="submit" name="" value="Submit Changes"/>
                                    </form>
                    </div>
            </Default>
        )
    }
}

module.exports = Edit;