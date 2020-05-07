const React = require('react');
const Default = require('./Default');



class Index extends React.Component {
    render() {
        const { players } = this.props;
        return (
            <Default>
            <div class="containerr" style={{backgroundColor: "red"}}>
                <nav className="">
                    <ul class="">
                        <li class="navitem">
                            <a href="">My top 10 list</a>
                        </li>
                        <li class="navitem">
                            <a href="">Trivia</a>
                        </li>
                        <li class="navitem">
                            <a href="">Contact</a>
                        </li>
                    </ul>
                </nav>
                <h1>Players Index Page</h1>
                <nav>
                    <a href="/players/new">Add Player to your top 10</a>
                </nav>
                <ul class="cards">
                    {
                        players.map((player, i) => {
                            return (
                                <div class="card carddimensions">
                                        <li class="cardlist" style={{color: "black"}}>
                                            
                                    <a href={`/players/${player._id}`}>{player.name}</a> <br/>
                                    <img  class="card-img-top" src={player.imageee} alt="" style={{width:100, height:100}}/> <br/>
                                    <p>{player.name} played for the {player.team} and averaged {player.ppg} over his career. He went on to win {player.championships} championship.</p><br></br>
                                            
                                            {/* /fruits/id_of_the_fruit/override_post_method */}
                                            <form action={`/players/${player._id}?_method=DELETE`} method="POST">
                                                <input type="submit" value="delete"/>
                                            </form>
                                            {/* Create a link to the edit route /fruits/id_of_fruit/edit */}
                                            <a href={`/players/${player._id}/edit`}>Edit</a>
                                        </li>
                                </div>
                            )
                        })
                    }
                </ul>
            </div>
            </Default>
        )
    }
}

module.exports = Index;