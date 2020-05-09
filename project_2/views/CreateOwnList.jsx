const React = require('react');
const Default = require('./Default');
const Template2 = require('./Template2');


class CreateOwnList extends React.Component {
    
    render() {
        const array = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9];
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
                                    <div class="directionOfCards">

                            
                                    {
                                        array.map((value, index) => {
                                            console.log(value);
                                            return <Template2 key={index}>{value}</Template2>
                                                                    })
                                    } 
                                    </div>       
            </nav>
            </div>
                                      
                                    
        </Default>  
          );
    }
  }
  
  module.exports = CreateOwnList;