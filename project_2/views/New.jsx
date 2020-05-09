const React = require('react');
const Default = require('./Default');

class New extends React.Component {
  
    render() {
      return (
        <Default>
          <div>
              <h1>New Player page</h1>
              <form action="/players" method="POST">
                  Name: <input type="text" name="firstValue" /><br/>
                  Team: <input type="text" name="secondValue" /><br/>
                  Championships: <input type="text" name="fourthValue"/><br/>
                  PPG: <input type="text" name="thirdValue"/><br/>
                  Img: <input type="text" name="fifthValue"/><br/>
                  <input type="submit" name="" value="Create Player"/>
               </form>
          </div>
        </Default>  
          );
    }
  }
  
  module.exports = New;