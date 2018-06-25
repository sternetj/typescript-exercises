# Create a Player
Create a `Player` class with the following properties:

+ A `string` name
+ A `string` token

# Expand the `abstract` class `Game`
Add the following to the class:
+ A private property (`players`) that maintains a list of `Player`s
+ An abstract property (`maximumPlayers`) that sets determines the maximum number of players 
+ An `addPlayer` method that allows you to add a player to the game.
  + If adding the player would exceed the maximum number of players the method should throw: `new Error("No remaining positions")`
+ Add a `whosTurn` method that returns the player whos turn it is. Assume the first player in the list goes first.
+ Add a `completeTurn` method that advances the turn so that the next player in the list will be returned from `whosTurn`.

# Create `TicTacToe`
+ Create an new class called `TicTacToe` in a new module
+ Add this class to the index of the `1-classes` module.
+ Have the `TicTacToe` class `extend` the `Game` class.
+ Give `TicTacToe` a `maximumPlayers` value of `2`
+ Add a `takeTurn` method that advances the turn using the base function `completeTurn` and accepts a number `0-8` for the square to fill with the `whosTurn` player's token. You can represent the game state using an array to represent each cell of the board. 

<table border="1" style="margin: 0 auto">
<tr>
<td>0</td><td>1</td><td>2</td>
</tr><tr>
<td>3</td><td>4</td><td>5</td>
</tr><tr>
<td>6</td><td>7</td><td>8</td>
</tr>
</table>

+ Add a `calculateWinner` function that returns the winning player if the game is over and returns `undefined` if there is no winner.

Code snippet for each line to test:
```javascript
  const lines = [
    [0, 1, 2],
    [3, 4, 5],
    [6, 7, 8],
    [0, 3, 6],
    [1, 4, 7],
    [2, 5, 8],
    [0, 4, 8],
    [2, 4, 6],
  ];
  for(let [a, b, c] of lines) {
    // a, b, and c are the cell indices that represent a winnable line
  }
```

### Continue to `2-generics-interfaces`