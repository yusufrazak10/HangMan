import React from 'react';
import { Button } from 'react-bootstrap'; 

// LetterButton component responsible for rendering the letter buttons for the game
const LetterButton = ({ alphabet, guessedLetters, onGuess, gameOver }) => {
  return (
    <div className="letter-buttons">
      {/* Iterate over each letter in the alphabet array and render a button for each */}
      {alphabet.map((letter) => (
        <Button
          key={letter}
          onClick={() => onGuess(letter)}  
          disabled={guessedLetters.includes(letter) || gameOver} 
          variant="outline-success"  
          className="letter-btn"  
        >
          {/* Display the letter inside the button */}
          {letter}
        </Button>
      ))}
    </div>
  );
};

export default LetterButton;





