js-blackjack
============

What is it?
-----------

A fun, interactive game of blackjack in coded in HTML, CSS and vanilla JavaScript.

The idea for this app and some of the code comes from an `example on modules <https://youtu.be/OeIWgc_kA98?t=3208>`_ presented in LaunchCode's September 2022 `part-time web dev <https://www.launchcode.org/web-development>`_ cohort. The instructor (`Caroline R. Jones <https://github.com/carolista>`_) made a JavaScript based blackjack game that runs entirely through the user interacting with the console. 

I thought this example was really engaging and clever. After working more with the DOM, I wanted to try and make my own version that ran on user feedback from buttons on a webpage versus the console.

How did you do it?
----------------
The original code I was working with came from `this replit repository <https://replit.com/@CarolineRose/ModulesExample-21Game>`_. I implemented the same object structure to build a deck of cards, although I added another key:value property in each card to help display card images later on. I had found a `free set of playing card PNGs <https://superdevresources.com/free-playing-cards-set/>`_ and knew I could use the key:value pair to dynamically display them. 

I had modeled the original version of this game with the same module structure as the example I was working from, but I was having a hard time wrapping my head around how to write the logic for the gameplay. I needed to have a web page for the user to interact with and I switched to writing the HTML and CSS for that, thinking through the main gameplay mechanisms. Once a basic page was done, I returned to the gameplay logic and got it working within the console, like the example I was working from. 

Next came the most challenging portion of this project: connecting my HTML buttons to the gameplay JavaScript. Using buttons for user input versus from ``readline-sync`` in the console fundamentally changed the core game logic's coding. I managed to get a game to initialize from the ``Start Game!`` button but was having major difficulties with the ``Hit`` and ``Stay`` buttons, the core part of Blackjack. 

I struggled against code that continuously ran in a ``while`` loop, trying to figure out a way to pause the loop with enough time to pass in some user input. I thought an ``async function`` could help me achieve this but most of my attempts ended with the live local version breaking. I even had to revert to a previous commit because I had broken the core part of the game's logic. 

I needed a new strategy.

The biggest breakthrough came when I got rid of the ``while`` loop wrapped around the code driving the main gameplay. I realized I needed to separate the different stages of the game and have them tied to different ``click`` events:

  - Initial deal of four cards
  - Player hits or stays
  - Dealer hits until their hand >= 17
  - Game is scored with the option to play again

This meant I needed to drastically overhaul ``mainPlay.js`` including where some of the key variables ``playerHand``, ``dealerHand``, ``playerScore``, ``dealerScore``, ``deck`` were initialized.  Somewhere along the way I also complied all the JavaScript into two files from four—One to run the game and one to interact with the webpage. I mostly did this because I kept getting errors that the page couldn't find certain variables it should have been able to see. 

The final piece of the puzzle was nesting the ``leftButton`` and ``rightButton`` event handlers in the ``startGame`` event listener. I found I also needed to change ``leftButton`` and ``rightButton`` from event listeners to ``onclick`` events because they kept adding too many cards to the user's hand when the game had been reset. 

Most of the changes from this point forward were largely minor functionality improvements or bug fixes.

What did you learn? 
-------------------

Coding can be intoxicating and infuriating. There's a definite rush when you manage to get something working that's been consistently broken. The morning I finally cracked the logic for the ``Hit`` and ``Stay`` buttons I felt like I had conquered the world. These buttons had been consistently breaking my web page and I spent hours searching for a fix to my problems.

I also learned how inefficient raw JavaScript is to code in. At the same time as I was writing this application, we were learning the fundamentals of Angular. JavaScript code that stretched the length of my monitor for this project could be summed up in a few lines in Angular. But I am very glad to have written this application in HTML, CSS and vanilla JavaScript. It reminds me that you can still build functional and attractive (if simple) experiences without a framework. 

What do you wish you did differently?
-------------------------------------

I really wish that I had written tests for my code at the beginning of the development process. There were a handful of times when refactoring ``mainPlay.js`` where a simple test would have caught the error I was scouring my code for. These occurred because I needed to (re)define the parameters for some functions. I find these kinds of logic errors more difficult to find.

I didn't write any tests for my code at the beginning because I wasn't exactly sure how the code would unfold. Looking back, I see this as a little bit of an excuse to be less diligent. If I were to completely redo this task, I would absolutely write tests to check nearly every function to ensure they're working properly and returning the values I need them to.

What are your next steps?
-------------------------

I'm thinking about adding some boxes to show a tally of the differnet game outcomes and maybe calculate some percentages based on those. I think it would be interesting to know how often each outcome occurs. 

  - Player beats Dealer
  - Dealer Beats Player
  - Player Busts
  - Dealer Busts
  - Tie

Of course, these would be reset every time the user visits the page or refreshes it. 

I may also try to write a similar version of this using Angular and some of the capabilities afforded by the framework's components. 
