import { useState } from "react";
import Textfield    from "../textfield"; 
import Button       from "../button"; 
import * as utils   from "../../utils";

interface scoreModalProps {
    isOpen   : boolean,
    setIsOpen: (value: boolean) => void
}

function ScoreModal(props: scoreModalProps) {
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
            <div key = { 'input-' + i} className="flex justify-between items-center mb-6 w-72">
                <span className="text-white">{ players[i] } </span>
                <Textfield 
                    onChange = { (score: string ) => updatePlayerScore(i, parseInt(score)) }
                    type     = { 'number' }
                />
            </div>
        )
        )
     }
    return (
            <div className="absolute bg-primary rounded-lg w-80 h-80 p-3 left-0 right-0 bottom-0 top-0 m-auto">
                { getPlayerInputs() } 
                <Button 
                    label   = { 'Ekle' }
                    onClick = { () => updateScores() }
                />
            </div>
        
    );
  }
  
export default ScoreModal;