import React, { Component } from 'react';

class WordDisplay extends Component { 

  // Function to create a display of underscores for unguessed letters
  createDisplayWords(word) {
    // Create an array of underscores based on the length of the word
    let display = Array(word.length).fill("_");

    // If there are guessed letters, replace underscores with the actual letters
    for (let i = 0; i < word.length; i++) {
      // Check if the letter is guessed
      if (this.props.guessedLetters.includes(word[i].toUpperCase())) {
        display[i] = word[i]; 
      }
    }

    // Join the display array into a string.
    return display.join(" ");
  }

  render() {
    // Destructure from parent.
    const { wordToGuess } = this.props; 
    return (
      <div>
        {/* Call createDisplayWords to show the word with underscores */}
        <h2>{this.createDisplayWords(wordToGuess)}</h2>
      </div>
    );
  }
}

export default WordDisplay;



