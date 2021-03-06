const React = require('react');
const Default = require('./Default');
const Template2 = require('./Template2');


class CreateOwnList extends React.Component {
    
    render() {

        const array = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9];

        const { players } = this.props;

        // players.forEach((item)=>{
        //     if(array.length > 0){
        //         array.pop();
        //     }
        // })

      return (
        <Default>
            <div class="containerr">
                                <nav className="">
                                    <ul class="navbarheader">
                                        <li class="navitem">
                                            <a href="/players">Home</a>
                                        </li>
                                        <li class="navitem">
                                            <a href="/players/trivia">Trivia</a>
                                        </li>
                                        <li class="navitem">
                                            <a href="">Contact</a>
                                        </li>
                                    </ul>
                                    </nav>
                                    <nav>
                                        <h1>New List</h1>
                                    </nav>

                                    <div class="directionOfCards">
                               

                                   
                                                        {
                                                            players.map((player, i) => {
                                                                console.log(player);
                                                                return (
                                                                    <div class="carddimensions">
                                                                            <li class="cardlist">
                                                                                <div class="playersname" >    
                                                                                    <a href={`/players/${player._id}`}>{player.firstValue}</a> <br/>
                                                                                </div>
                                                                                <div class="cardpicturediv"> 
                                                                                    <img class="cardpicture" src={player.fifthValue} alt=""/> <br/>
                                                                                </div>
                                                                                <div class="playersdescriptiondiv"> 
                                                                                    <p class="playersdescription"><br/>
                                                                                                                Team: {player.secondValue} <br/>
                                                                                                                PPG: {player.thirdValue} <br/>
                                                                                                                Championships: {player.fourthValue}
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
                                                            
                                                    {
                                                        array.map((value, index) => {
                                                            console.log(value);
                                                            return <Template2 key={index}>{value}</Template2>
                                                                                    })
                                                    }        
                                        </div>
            
            </div>
                                      
                                    
        </Default>  
          );
    }
  }
  
  module.exports = CreateOwnList;