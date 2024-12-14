import React, { Component } from 'react';  
import { getRandomWord, checkWin } from './Helpers';  
import HangmanDisplay from './HangmanDisplay';  
import WordDisplay from './WordDisplay';  
import LetterButton from './LetterButton';  
import { Link } from 'react-router-dom'; 
import { Button } from 'react-bootstrap';  

class Game extends Component {
  // Constructor 
  constructor(props) {
    super(props);
    // Set initial state for variables
    this.state = {
      wordToGuess: getRandomWord().toUpperCase(),  
      guessedLetters: [],  
      incorrectGuesses: 0,  
      maxIncorrectGuesses: 6, 
      gameOver: false,  
      message: '',  
    };
  }

  // Function to handle a letter guess
  handleGuess = (letter) => {
    // Ensure letter is uppercase
    letter = letter.toUpperCase(); 

    // Flag to check if the guess was correct
    let correct = false;  
    // Message to display based on the guess
    let message = '';  

    // Check if the guessed letter is correct
    if (this.state.wordToGuess.includes(letter)) {
      correct = true;
      message = (
        <span className="correct-message">
          GOOD GUESS! "{letter}" IS CORRECT.
        </span>
      );
    } else {
      // If incorrect, update the message and increment incorrect guesses
      correct = false;
      message = (
        <span className="incorrect-message">
          OOPS! "{letter}" IS INCORRECT.
        </span>
      );
      this.incrementIncorrectGuesses();
    }

    // Update the state with the guessed letter and message
    this.setState((prevState) => ({
      guessedLetters: [...prevState.guessedLetters, letter],
      message: message  
    }), () => {
      // After state is updated, check if the player has won and if so display win message.
      if (checkWin(this.state.wordToGuess, this.state.guessedLetters)) {
        this.setState({
          message: 'CONGRATULATIONS! YOU GUESSED THE WORD!'  
        });
      }
    });
  };

  // Function to increment incorrect guesses and check for game over
  incrementIncorrectGuesses = () => {
    if (this.state.incorrectGuesses < this.state.maxIncorrectGuesses) {
      // Increment incorrect guesses only if it hasn't reached the maximum
      this.setState((prevState) => {
        const newIncorrectGuesses = prevState.incorrectGuesses + 1;

        // If the number of incorrect guesses reaches the maximum, end the game
        if (newIncorrectGuesses >= this.state.maxIncorrectGuesses) {
          return {
            incorrectGuesses: newIncorrectGuesses,
            gameOver: true,  // Set game over flag to true
            message: 'GAME OVER! YOU HAVE EXCEEDED THE MAXIMUM NUMBER OF INCORRECT GUESSES.',
          };
        }

        return { incorrectGuesses: newIncorrectGuesses };
      });
    }
  };

  // Resets the game state to start over with a new word
  resetGame = () => {
    this.setState({
      wordToGuess: getRandomWord().toUpperCase(), 
      guessedLetters: [],  
      incorrectGuesses: 0,  
      maxIncorrectGuesses: 6, 
      gameOver: false,  
      message: '', 
    });
  };

  render() {
    return (
      <div>
        {/* HangmanDisplay component to show the stick figure based on incorrect guesses */}
        <HangmanDisplay incorrectGuesses={this.state.incorrectGuesses} />
        
        {/* WordDisplay component to show the word with guessed letters revealed */}
        <WordDisplay 
          wordToGuess={this.state.wordToGuess}  
          guessedLetters={this.state.guessedLetters}  
        />
        
        {/* LetterButton component to display alphabet buttons */}
        <LetterButton 
          alphabet={"ABCDEFGHIJKLMNOPQRSTUVWXYZ".split('')}  
          guessedLetters={this.state.guessedLetters}  
          onGuess={this.handleGuess}  
          gameOver={this.state.gameOver} 
        />
        
        {/* Display the current message */}
        <p className="win-message">{this.state.message}</p>
        
        {/* If the game is over, display a game over message with the correct word */}
        {this.state.gameOver && (
          <p className="game-over-message">
            Game Over! You've lost. The word was: <span id="word-to-guess">{this.state.wordToGuess}</span>
          </p>
        )}

        {/* Control button to reset the game */}
        <Button variant="danger" onClick={this.resetGame}>RESTART GAME</Button>

        {/* Link to navigate to Help component */}
        <Link to="/help">
          <Button variant="info">HELP</Button>
        </Link>
      </div>
    );
  }
}

export default Game;











