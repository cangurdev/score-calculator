import { useState } from "react";

import Button from "./button";
import ScoreBoard from "./score-board";
import ScoreModal from "./score-modal";
import * as utils from "../utils";

function Game() {
    const [isModalOpen, setIsModalOpen] = useState(false);

    return (
        <div>
            <ScoreBoard />
            <div className="flex justify-between">
                <Button
                    onChange={() => setIsModalOpen(true)}
                    label={'Yeni Skor'}
                />
                <Button
                    onChange={() => utils.setInitialSetup(true)}
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