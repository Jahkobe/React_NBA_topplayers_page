const React = require('react');
const Default = require('./Default');

class Trivia extends React.Component {
    
    render() {
      return (
        <Default>
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
                                      
                                    
        </Default>  
          );
    }
  }
  
  module.exports = Trivia;