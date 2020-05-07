const React = require('react');
const Default = require('./Default');

class Edit extends React.Component {
    render() {
        const { _id, name, team, championships, ppg, image} = this.props.player;
        return (
            <Default>
                <div>
                    <h1>Edit Page</h1>
                    {/* url - /fruits/id_of_fruit? parameter to indicate the request */}
                    <form action={`/players/${_id}?_method=PUT`} method="POST">
                        Name: <input type="text" name="name" defaultValue={name}/> <br/>
                        Team: <input type="text" name="team" defaultValue={team}/> <br/>
                        Championships: <input type="text" name="team" defaultValue={championships}/> <br/>
                        PPG: <input type="text" name="ppg" defaultValue={ppg}/><br/>
                        Img: <input type="text" name="image" defaultValue={image}/><br/>
                        <input type="submit" name="" value="Submit Changes"/>
                    </form>
                </div>
            </Default>
        )
    }
}

module.exports = Edit;