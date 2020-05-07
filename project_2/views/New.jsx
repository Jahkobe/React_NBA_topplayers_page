const React = require('react');
const Default = require('./Default');

class New extends React.Component {
    render() {
      return (
        <Default>
          <div>
              <h1>New Player page</h1>
              <form action="/players" method="POST">
                  Name: <input type="text" name="name" /><br/>
                  Team: <input type="text" name="team" /><br/>
                  Championships: <input type="text" name="championships"/><br/>
                  PPG: <input type="text" name="ppg"/><br/>
                  Img: <input type="text" name="imageee"/><br/>
                  <input type="submit" name="" value="Create Player"/>
               </form>
          </div>
        </Default>  
          );
    }
  }
  
  module.exports = New;