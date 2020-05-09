const React = require('react');
const Default = require('./Default');
const Template = require('./Template');



    const makingTenBlankTemplates = () => {
        for(i = 1; i <= 10; i++){
            this.state.tenTemplates++;
            <Template></Template>
        }
    }


class Index extends React.Component {
    // constructor(){
    //     super();
    //     this.state={
    //         Team: "",
    //         PPG: "",
    //         Championships: "",
    //         Occupied: false,
    //         tenTemplates: [{_id: "1", ppg: "", championships: "", team: ""},
    //                        {_id: "2", ppg: "", championships: "", team: ""},
    //                        {_id: "3", ppg: "", championships: "", team: ""},
    //                        {_id: "4", ppg: "", championships: "", team: ""},
    //                        {_id: "5", ppg: "", championships: "", team: ""},
    //                        {_id: "6", ppg: "", championships: "", team: ""},
    //                        {_id: "7", ppg: "", championships: "", team: ""},
    //                        {_id: "8", ppg: "", championships: "", team: ""},
    //                        {_id: "9", ppg: "", championships: "", team: ""},
    //                        {_id: "10", ppg: "", championships: "", team: ""}
    //                       ]
    //     }
    // }




    render() {
        const { players } = this.props;
        // const renderTemplates = this.state.tenTemplates;
        return (
            <Default>
                <div class="containerr">
                        <nav className="">
                            <ul class="navbarheader">
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

                <div class="templates">
                    <Template/>
                    <Template/>
                    <Template/>
                    <Template/>
                    <Template/>
                    <Template/>
                    <Template/>
                    <Template/>
                    <Template/>
                    <Template/>
                </div>
                    
                    


                        {/* <ul class="cardsTemplate">
                        {
                             
                        renderTemplates.map((template) => {
                            // console.log(template);
                            return(
                                <Template ppg={template.pgg}
                                          championships={template.championships}
                                          team={template.team}/>
                            )
                        })
                        }
                        </ul> */}




                    
                            <ul class="cards">
                                {
                                    players.map((player, i) => {
                                        console.log(player);
                                        return (
                                            <div class="carddimensions">
                                                    <li class="cardlist">
                                                        <div class="playersname" >    
                                                            <a href={`/players/${player._id}`}>{player.name}</a> <br/>
                                                        </div>
                                                        <div class="cardpicturediv"> 
                                                            <img class="cardpicture" src={player.imageee} alt=""/> <br/>
                                                        </div>
                                                        <div class="playersdescriptiondiv"> 
                                                            <p class="playersdescription"><br/>
                                                                                          Team: {player.team} <br/>
                                                                                          PPG: {player.ppg} <br/>
                                                                                          Championships: {player.championships}
                                                            </p> <br/>
                                                        </div>            
                                                        <div class="deletebuttondiv">
                                                            {/* /fruits/id_of_the_fruit/override_post_method */}
                                                            <form action={`/players/${player._id}?_method=DELETE`} method="POST">
                                                                <input type="submit" value="Delete"/>
                                                            </form>
                                                        </div>
                                                        <div class="editbuttondiv">
                                                            {/* Create a link to the edit route /fruits/id_of_fruit/edit */}
                                                                <a href={`/players/${player._id}/edit`}>Edit</a>
                                                        </div>
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