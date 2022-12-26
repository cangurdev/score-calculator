import { useState } from "react";
import Textfield    from "./textfield"; 
import * as utils   from "../utils";

function GameInfo() {
    const [ playerCount, setPlayerCount ]   = useState(2);
    const [ players, setPlayers ]           = useState({});

    const changePlayerName = (id: number, name: string) => {
        setPlayers(prevState => ({
            ...prevState,
            [id]: name
        }));
    }

    const playerNames = [...Array(playerCount)].map( (_p, i) =>
            <div className="flex justify-between my-2" key={ 'player-' + i }>
                <span>Oyuncu { i + 1 } </span>
                <Textfield 
                    onChange = { (name: string ) => changePlayerName(i, name) }
                />
            </div>
        );

    const start = () => {
        utils.savePlayers(players);
    };

    return (
        <div className="flex flex-col w-80 m-auto">
            <div className="flex justify-between my-2">
                <span>Oyuncu Adedi </span>
                <select onChange = { (e: any ) => setPlayerCount(parseInt(e.target.value)) }>
                    {
                        [...Array(8)].map( (_v, i) =>
                            <option value={i + 2} key={'option-' + i+2}>{i + 2}</option>
                        )
                    }
                </select>
            </div>
            { playerNames }
            <button onClick = {() => start() }>
                Başla
            </button>
        </div>
    );
  }
  
  export default GameInfo;