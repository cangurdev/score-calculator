import { useContext, useState } from "react";
import Textfield    from "../textfield"; 
import Button       from "../button"; 
import * as utils   from "../../utils";
import { AppContext } from '../../context';

function GameInfo() {
    const [ playerCount, setPlayerCount ]   = useState(2);
    const [ players, setPlayers ]           = useState({});
    const { dispatch } = useContext(AppContext);
    
    const changePlayerName = (id: number, name: string) => {
        setPlayers(prevState => ({
            ...prevState,
            [id]: name
        }));
    }

    const playerNames = [...Array(playerCount)].map( (_p, i) =>
            <div className="flex justify-between my-2 text-white" key={ 'player-' + i }>
                <span>Oyuncu { i + 1 } </span>
                <Textfield 
                    onChange = { (name: string ) => changePlayerName(i, name) }
                />
            </div>
        );

    const start = () => {
        dispatch('ADD_PLAYERS', players);
        utils.savePlayers(players);
    };

    return (
        <div className="flex flex-col w-96 m-auto p-6 rounded-lg bg-primary">
            <div className="flex justify-between my-2">
                <span className="text-white">Oyuncu Adedi </span>
                <select onChange = { (e: React.ChangeEvent<HTMLSelectElement> ) => setPlayerCount(parseInt(e.target.value)) }>
                    {
                        [...Array(8)].map( (_v, i) =>
                            <option value={i + 2} key={'option-' + i+2}>{i + 2}</option>
                        )
                    }
                </select>
            </div>
            { playerNames }
            <Button 
                onClick   = { () => start() }
                label     = { 'Başla' }
            />
        </div>
    );
  }
  
  export default GameInfo;