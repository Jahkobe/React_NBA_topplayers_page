const React = require('react');
const Default = require('./Default');

class Newnew extends React.Component {
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


              <h1>New List Name</h1>
              <input type="text" name="newListName" id=""/><br/>

              <form action="/CreateOwnList" method="POST">
                  firstValue: <input type="text" name="firstValue" /><br/>
                  secondValue:<input type="text" name="secondValue" /><br/>
                  thirdValue:<input type="text" name="fourthValue"/><br/>
                  fourthValue:<input type="text" name="thirdValue"/><br/>
                  fifthValue:<input type="text" name="fifthValue"/><br/>
                  <input type="submit" name="" value="Create Player"/>
               </form>
          </div>
        </Default>  
          );
    }
  }
  
  module.exports = Newnew;