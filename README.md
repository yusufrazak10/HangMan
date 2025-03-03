# React Hangman Game

This project was bootstrapped with Create React App and includes routing functionality via react-router-dom.

## Table of Contents

- [Description](#description)
- [Technologies Used](#technologies-used)
- [Installation Instructions](#installation-instructions)
- [Available Scripts](#available-scripts)
- [Running the App](#running-the-app)
- [Rules of the Game](#rules-of-the-game)

## Description

My React App is a simple web application built using React. It serves as a starting point for any React-based project, with routing functionality enabled through react-router-dom to navigate between pages.

The app is designed to be a fun and interactive game where you guess a word one letter at a time. With every wrong guess, a part of a stick figure is drawn. The goal is to guess the word before the stick figure is fully drawn.

## Technologies Used

- **React** - A JavaScript library for building user interfaces.
- **react-router-dom** - For handling routing between different pages in the app.

## Installation Instructions

To get started with this app, follow these steps:

1. Clone the repository (or if you're starting fresh, create a new folder for your project):
   ```bash
   mkdir my-react-app
   cd my-react-app
Create the React app using Create React App:
npx create-react-app my-react-app
Navigate into the project directory:
cd my-react-app
Install additional dependencies like react-router-dom for routing:
npm install react-router-dom
Start the app:
npm start
This will open the app in your default web browser at http://localhost:3000.
Available Scripts

In the project directory, you can run the following scripts:

npm start
Runs the app in the development mode.
Open http://localhost:3000 to view it in your browser.
The page will reload when you make changes.
You may also see any lint errors in the console.
npm run build
Builds the app for production to the build folder.
It correctly bundles React in production mode and optimizes the build for the best performance.
npm test
Launches the test runner in the interactive watch mode.
See the section about running tests for more information.
npm run eject
Note: This is a one-way operation. Once you eject, you can't go back!
If you need more control over the build configuration, you can run npm run eject. This will expose the configuration files and allow you to customize the app's setup.
Running the App

Once you've set up the project and installed the dependencies, you can run the following command to start the development server:

npm start
This will start the app in development mode and automatically open your default web browser to http://localhost:3000.

Additional Notes:
If you're using react-router-dom, make sure to set up routes within your app using the BrowserRouter, Route, and Switch components.
Changes made to the code will automatically reload the app in the browser.
Rules of the Game

Guessing: You will have to guess a word, one letter at a time.
Incorrect Guesses: For each incorrect guess, part of a stick figure will be drawn.
Losing the Game: You lose the game if the entire stick figure is drawn before you guess the word correctly.
Correct Guesses: Each correct letter will appear in its correct place in the word.
Winning the Game: If you guess all the letters correctly before the figure is fully drawn, you win!
