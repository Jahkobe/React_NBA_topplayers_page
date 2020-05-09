const React = require('react');
const Default = require('./Default');

class Template extends React.Component {
    
    render() {
      return (
        <Default>
            
                                        {
                                                <div class="carddimensions">
                                                        <li class="cardlist">
                                                            <div class="playersname" >    
                                                                <a href={`/players/`}></a> <br/>
                                                            </div>
                                                            <div class="cardpicturediv"> 
                                                                <a href="/players/new">
                                                                    <img class="cardpicture" alt=""/> <br/>
                                                                </a>
                                                            </div>
                                                            <div class="playersdescriptiondiv"> 
                                                                <p class="playersdescription"><br/>
                                                                                            Team: <br/>
                                                                                            PPG: <br/>
                                                                                            Championships: <br/>
                                                                    </p> <br/>
                                                            </div>     
                                                            {/* <div class="deletebuttondiv"> */}
                                                                {/* /fruits/id_of_the_fruit/override_post_method */}
                                                                {/* <form action={`/players/?_method=DELETE`} method="POST"> */}
                                                                    {/* <input type="submit" value="Delete"/> */}
                                                                {/* </form> */}
                                                            {/* </div> */}
                                                            {/* <div class="editbuttondiv">  */}
                                                                {/* Create a link to the edit route /fruits/id_of_fruit/edit */}
                                                                    {/* <a href={`/players/edit`}>Edit</a> */}
                                                            {/* </div> */}
                                                        </li>
                                                </div>
                                        }
                                    
        </Default>  
          );
    }
  }
  
  module.exports = Template;