import React, { useState } from 'react';
import './App.css';
import GameInfo from './components/GameInfo';
import Game from './components/Game';
import {
  getPlayers,
  setInitialSetup
} from "./utils";
import { AppContext } from './context';

function App() {
  const [ players, setPlayers ] = useState(getPlayers());
  const [ rounds, setRounds ] =  useState<{}[]>(
    [],
  );

  setInitialSetup(false);

  const dispatch = (type: string, payload: any) => {
		switch (type) {
			case 'ADD_PLAYERS':
				setPlayers(payload);
				return;
			case 'ADD_ROUND':
        rounds.push(payload);
				setRounds(rounds);
				return;
			default:
				return;
		}
	};

  return (
    <div className="flex h-screen bg-background">
      <AppContext.Provider value={{
          player: {},
          round: [],
          dispatch: (type: string, payload: any) => dispatch(type, payload)
        }}
      >
      {
        Object.keys(players).length
          ? <Game />
          : <GameInfo />
      }
      </AppContext.Provider>
    </div>
  );
}

export default App;
