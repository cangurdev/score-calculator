import { useContext, useState } from "react";

import Button     from "./button";
import ScoreBoard from "./score-board";
import ScoreModal from "./score-modal";
import * as utils from "../utils";
import { AppContext } from '../context';

function Game() {
    const [isModalOpen, setIsModalOpen] = useState(false);
    const { dispatch } = useContext(AppContext);
    
    const reset = () => {
        dispatch('ADD_PLAYERS', {})
        utils.setInitialSetup(true);
    }
    return (
        <div>
            <ScoreBoard />
            <div className="flex justify-between">
                <Button
                    onChange={() => setIsModalOpen(true)}
                    label={'Yeni Skor'}
                />
                <Button
                    onChange={() => reset()}
                    label={'Sıfırla'}
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