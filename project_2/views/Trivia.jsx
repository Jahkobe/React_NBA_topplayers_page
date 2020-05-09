const React = require('react');
const Default = require('./Default');

class Trivia extends React.Component {
    
    render() {
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
                                            <a href="/players/Newnew">Make Your Own List</a>
                                        </li>
                                    </ul>
                                </nav>
            </div>
                                      
                                    
        </Default>  
          );
    }
  }
  
  module.exports = Trivia;