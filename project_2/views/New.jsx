const React = require('react');
const Default = require('./Default');

class New extends React.Component {
  
    render() {
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

                                    <h1 class="newplayerheader">Add a new player to your list</h1>
                                    <form class="newformpage" action="/players" method="POST">
                                        Name: <br/><input class=" textfield" type="text" name="firstValue" /><br/>
                                        Team: <br/><input class="textfield" type="text" name="secondValue" /><br/>
                                        Championships: <br/><input class="textfield" type="text" name="fourthValue"/><br/>
                                        PPG: <br/><input class="textfield" type="text" name="thirdValue"/><br/>
                                        Img: <br/><input class="textfield" type="text" name="fifthValue"/><br/>
                                        <input type="submit" name="" value="Create Player"/>
                                    </form>
          </div>
        </Default>  
          );
    }
  }
  
  module.exports = New;