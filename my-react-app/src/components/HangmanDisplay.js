import React, { Component } from 'react';

class HangmanDisplay extends Component {
  render() {
    // Destructure from parent.
    const { incorrectGuesses } = this.props;

    const hangmanStages = [
      // Stage 0: Initial image (no incorrect guesses)
      `
          +-------+
          |
          |
           | 
          |
          |
       ==============
      `,
      // Stage 1: Head
      `
          +-------+
          |       |
          |       0
   | 
  |
  |
       ==============
      `,
      // Stage 2: Body
      `
          +-------+
          |       |
          |       0
          |       |
  |
  |
       ==============
      `,
      // Stage 3: Left arm
      `
          +-------+
          |       |
          |       0
          |      -|
  |
  |
       ==============
      `,
      // Stage 4: Both arms
      `
          +-------+
          |       |
          |       0
           |      -|-
  |
  |
       ==============
      `,
      // Stage 5: Left leg
      `
          +-------+
          |       |
          |       0
           |      -|-
         |      /
  |
       ==============
      `,
      // Stage 6: Both legs
      `
          +-------+
          |       |
          |       0
           |      -|-
           |      / \\
  |
       ==============
      `
    ];


    return (
      <div>
        {/* Display the appropriate hangman stage based on the number of incorrect guesses */}
        <pre>{hangmanStages[incorrectGuesses]}</pre>
      </div>
    );
  }
}

export default HangmanDisplay;





