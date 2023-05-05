# Three Card Monte ATL/NYC Edition 
Date:

By: Jorge Islas

[LinkedIn](https://www.linkedin.com/in/jorge-islas-47136a275
) | [Github](https://github.com/Jorgeislas97) |
***
# **_Description:_**

- **_Languages Used_**
  - HTML
  - CSS
  - JAVASCRIPT
  

- **_Game Rules_** 
1. The dealer shuffles three cards, Two duds & the highly coveted "money card."
2. The dealer places the cards face-down on a flat surface, such as a table or cardboard box, and shuffles them around, encouraging the player to place a bet on where he believes the money card is located. 
3. If the player correctly identifies the money card, they win the bet. If they choose one of the other cards, they lose.

- **_Game Ethos_**
- The game of Three Card Monte is pretty straight forward in its simplest form. Although that may be the case in theory, the game became one of the most utilized hustling schemes in Atlanta and New York City. The dealer lures in their target with victories on small bets. When the target becomes comfortable with their odds, they start betting significantly more. However, as this happens, their probability of winning becomes impossible, which leads to more bets & ultimatly ends with the prey going broke.
***
# **_User Interface Concept_** 
    
   ![Image Header 1](https://i.imgur.com/AOQjSXV.jpeg)

# **_User Interface Pseudocode_**
- Start game with $100 in the wallet gauge, 3 cards & a text box that determinds the state of the game.  
- A betting function that gives you an option between two buttons ("Bet $1", "Bet $100") to choose from before a player could pick a card.  
- If the player places a bet for $1, The Player  has the regular odds of winning. But if a $100 bet is place the probability of winning decreases to 1%
- A Function to check if the player has won or lost
- If the player is declared the winner, add the amount of money they betted to their wallet & vice versa. If the player's money reaches $0, declare them the loser. If the player's money reaches negative numbers, message "RUN!!!"
- Add click event listeners to each card
- Add click event listener to the bet buttons
- After game is ultimatly lost a reset button appears to repeat the agonizing cycle.
- Add click event listener to the Reset button