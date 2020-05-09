const React = require('react');
const Default = require('./Default');

class CreateOwnList extends React.Component {
    
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
                                            <a href="">Contact</a>
                                        </li>
                                    </ul>
            </nav>
            </div>
                                      
                                    
        </Default>  
          );
    }
  }
  
  module.exports = CreateOwnList;