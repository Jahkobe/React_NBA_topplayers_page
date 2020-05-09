// nba favorite players list
// ill start with a list of some nba players/ a few from each team
// each player has stats/rebounds/points/championships etc

// you will be able to add your own favorite players
// as well as add them to your favorite players list

// Index
// this will display my list along with an edit/ delete buttons
// as well as create a new list

// New
// The new is going to add a new player to the database
// it will have a form where you can add stats and a picture as well

// Create
// this will add a player to the database as well as display that
// player in the list of available players you can choose from

// Edit
// You will be able to edit your list of players / for
// example if someone started averaging more points or won a
// championship then that stat would need to be changed as well

// Delete
// you can delete a player from your list

// Show
// this will allow you to see the players stats more in depth/
// maybe add a few categories/ and maybe even a little description
// of playing career




So for my project I went with a top 10 best basketball players of all time list. My thinking behind this was that I wanted to be able to make a top ten list then use variables inside the schema and new routes so that you could actually change all the values and make your own top ten list for whatever you wanted.It didn't end up working like that but I spent a lot of time trying to make that idea happening. So I think during the process I was definitely planning on being a little more ambititous in my head then I think it turned out looking in the end. But hopfully this isn't the end and I can build upon the functionality of the app once we dive deeper into react and other topics.

Technologies used:
HTML
CSS
Javascript
Express
Nodejs
React
Mongoose
MongoDB
JSX

Features of the app:
As you can see from the home page the app allows you to have your top 10 NBA players. There are 10 cards and you can click on a card which will take you to the new page. This will allow you to type into the input fields and add a new basketball player. There is 5 different categories including PPG, name, Team, an Image, and how many championships they have won. 

They each take a input type of text. Then lastly there is a submit button at the end that will allow send a route to the Post request and will add the player onto the top 10 list. That will redirect you to back to the home/ index page that displays the top players.

I think the most technical part of the project was the way I was using the kind of empty templates/ empty game cards that you could click on and it would take you to a new route. Where you could add another player. Then when added it will then redirect you to the home page. Will take that player, no matter which one you clicked on and will add the player to the beggining of the list.


Challenges:
Therein lies a lot of my biggest challenges. At first when the players were added they would just go to the end of the list and nothing new would get added to the front. I was able to do this eventually by creating a for loop in the index page. This loop took an array of 10 numbers total and looped 10 times or as long as the length of the array. From there everytime a new template would get loaded onto the page. and each time a new player is added then they would get added ahead of the template and the last template would get a .pop() called on it and delete it from the list.

Another challenge for me was to get the pictures to post using the url. I think I was having a hard time at the beggining using the different input types. I know that a lot of it for me was the fact that there is an image input type and i got hung up on that for a long time. Eventually I just did a text input field and then posted that value into the Source for an image tag back on the main index/home page.


 I was trying forever to get the player to fill the space that I was clicking on and not having the player go to the front of the list. That never really got solved but another challenge


