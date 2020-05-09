const React = require('react');
const Default = require('./Default');

class Newnew extends React.Component {
    render() {
      return (
        <Default>
          <div>
              <h1>New Player page</h1>
              <form action="/CreateOwnList" method="POST">
                  firstValue: <input type="text" name="name" /><br/>
                  secondValue:<input type="text" name="team" /><br/>
                  thirdValue:<input type="text" name="championships"/><br/>
                  fourthValue:<input type="text" name="ppg"/><br/>
                  fifthValue:<input type="text" name="imageee"/><br/>
                  <input type="submit" name="" value="Create Player"/>
               </form>
          </div>
        </Default>  
          );
    }
  }
  
  module.exports = Newnew;