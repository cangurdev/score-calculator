import { useState } from "react";
import Textfield    from "./textfield"; 
import Button       from "./button"; 
import * as utils   from "../utils";

function ScoreModal(props: any) {
    const players = utils.getPlayers();
    const playerCount = Object.keys(players).length;
    const [ scores, setScores ] = useState({});

    if (!props.isOpen)
        return null;

    const updateScores = () => {
        utils.updateScore(scores);
        props.setIsOpen(false);
    }

    const updatePlayerScore = (id: number, score: number) => {
        setScores(prevState => ({
            ...prevState,
            [id]: score
        }));
    }

    const getPlayerInputs = () => {
        return [...Array(playerCount)].map( (_p, i) => (
            <div key = {i} className="flex justify-between items-center mb-6 w-72">
                <span className="text-white">{ players[i] } </span>
                <Textfield 
                    onChange = { (score: number ) => updatePlayerScore(i, score) }
                    type     = { 'number' }
                />
            </div>
        )
        )
     }
    return (
        <div className="flex items-center justify-center">
            <div className="absolute w-80 h-80 bg-primary rounded-lg flex items-center justify-center flex-col">
                { getPlayerInputs() } 
                <Button 
                    label   = { 'Ekle' }
                    onClick = { () => updateScores() }
                />
            </div>
        </div>      
        
    );
  }
  
export default ScoreModal;