// Function to get a random word
function getRandomWord() {
    // Array containing a list of possible words to guess
    const words = ['Cat', 'Dog', 'Run', 'Boat', 'Desk', 'King', 'Apple', 'Chair', 'Table', 'Window', 'Garden', 'Market', 'Journey', 'Capture', 'Fantasy'];
    
    // Generate a random index between 0 and the length of the array.
    const randomIndex = Math.floor(Math.random() * words.length);
    
    return words[randomIndex].toUpperCase();
  }
  
  // Check if the word is fully guessed (win condition)
  function checkWin(wordToGuess, guessedLetters) {
    // Check if all letters of the word are guessed
    const wordGuess = wordToGuess.split('').every(letter => guessedLetters.includes(letter));
    
    // Display a win message in the console
    if (wordGuess) {
      console.log("Congratulations! You Win!");
    }
    
    return wordGuess; 
  }
  
export { getRandomWord, checkWin };
  