# Tic-Tac-Toe

## Overview

This is a React application that elegantly demonstrates effective state management techniques, allowing for a seamless user experience. This app encapsulates the fundamentals of component-driven architecture, with a focus on managing game state, player interactions, and game logic using React's hooks. This game exemplifies how state management can enhance interactivity and responsiveness in React applications.

<a href="https://junmike-tictactoe.netlify.app/" target="_blank">View Live Website</a>
</br>
<img src="https://raw.githubusercontent.com/MichaelDAbadJr/assets/refs/heads/main/TicTacToe-Cover.jpg" width="500">


## Features

- **Game Turns Tracking:** The application employs a gameTurns state array to capture each player's move. This allows the game to maintain a history of actions, enabling the app to dynamically render the current state of the board and determine the active player.
- **Active Player Calculation:** Utilizing the deriveActivePlayer function, the app toggles between Player X and Player O based on the current game state. This function efficiently computes the next player, ensuring fair play and an engaging experience.
- **Dynamic Game Board Rendering:** The deriveGameBoard function reconstructs the game board based on the recorded moves. By copying the initial state and applying player actions, the game board updates in real-time, providing immediate feedback to users.
- **Winning Condition Evaluation:** The app incorporates a deriveWinner function that checks for winning combinations after each turn. This function enhances the user experience by promptly informing players of a victory or a draw, contributing to the game's strategic depth.
- **Error Handling:** Robust management of loading states and error messages during API calls for better user feedback.
- **Data Fetching:**  Meals and other data are fetched from a backend API, with loading indicators to improve user experience.

## Getting Started

### Prerequisites

- Familiarity with React, React hooks, HTML, CSS & JavaScript
- npm (or yarn) installed.

### Installation

1. **Clone the repository:**

   ```sh
   git clone https://github.com/MichaelDAbadJr/TicTacToe
   ```

2. **Navigate to the project directory:**

   ```sh
   cd TicTacToe
   ```

3. **Install the dependencies:**

   ```sh
   npm install
   ```

   or

   ```
   yarn install
   ```

4. **To start the development server, use:**

   ```sh
   npm run dev
   ```

   or

   ```
   yarn dev
   ```

5. **Usage:**
   Once the development server is running, open your browser and navigate to http://localhost:5173 or the appropriate localhost on your machine to demo the app.

6. **License:**
   This project is licensed under the MIT License. See the LICENSE file for details.
