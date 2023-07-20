import { useContext, useState } from "react";

import Button     from "../button";
import ScoreBoard from "../scoreboard";
import ScoreModal from "../score-modal";
import * as utils from "../../utils";
import { AppContext } from '../../context';

function Game() {
    const [isModalOpen, setIsModalOpen] = useState(false);
    const { dispatch } = useContext(AppContext);
    
    const reset = () => {
        dispatch('ADD_PLAYERS', {})
        utils.setInitialSetup(true);
    }
    return (
        <div className="w-full">
            <ScoreBoard />
            <div className="flex justify-center">
                <Button
                    onClick = { () => setIsModalOpen(true) }
                    label   = { 'Yeni Skor' }
                />
                <Button
                    onClick = { () => reset() }
                    label   = { 'Sıfırla' }
                />
            </div>
            <ScoreModal
                isOpen    = { isModalOpen }
                setIsOpen = { ( v: boolean ) => setIsModalOpen(v) }
            />
        </div>
    );
}

export default Game;