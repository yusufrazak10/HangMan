import React, { Component } from 'react';
import { Link } from 'react-router-dom'; 
import { Button } from 'react-bootstrap'; 

class Help extends Component {
  render() {
    return (
      <div className="help-container">
        <h2>Hangman Game Rules</h2>
        {/* Unordered list to display game rules */}
        <ul>
          <li>You will have to guess a word, one letter at a time.</li>
          <li>For each incorrect guess, part of a stick figure will be drawn.</li>
          <li>You lose the game if the entire figure is drawn before you guess the word.</li>
          <li>Each correct letter will appear in its correct place in the word.</li>
          <li>If you guess all the letters correctly before the figure is fully drawn, you win!</li>
        </ul>
        <p>Good luck!</p>

        {/* Button to navigate back to Game component */}
        <Link to="/">
          <Button variant="primary" className="back-btn">
            Back to Game
          </Button>
        </Link>
      </div>
    );
  }
}

export default Help;


