import React from 'react';
import './App.css';
import GameInfo from './components/GameInfo';
import Game from './components/Game';
import {
  getPlayers,
  setInitialSetup
} from "./utils";

function App() {
  const isPlayer = Object.keys(getPlayers()).length;

  setInitialSetup(false);

  return (
    <div className="App">
      {
        isPlayer
          ? <Game />
          : <GameInfo />
      }
    </div>
  );
}

export default App;
