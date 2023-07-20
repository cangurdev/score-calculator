import * as utils   from "../../utils";
import { Round, Players } from '../../global';

function ScoreBoard () {
    const players: Players  = utils.getPlayers();
    const rounds: [Round]   = utils.getRounds() || {};

    const getPlayerNames = () => {
        return Object.keys(players).map(key => (
            <div className="flex justify-center text-xl w-24" key={ `player-${key}` }>
                { players[key].toUpperCase() }
            </div>
        ));
    }

    const getScores = () => {
        return rounds.map((round: Round, i: number) => (
            <div className="mr-4 flex justify-center" key={ `round-${i}` }>
                {
                    Object.keys(round).map( (id: string ) => 
                        (
                            <div className="mr-4" key={ `round-${id}` }>
                                { round[id] }
                            </div>
                        )
                    )
                }
            </div>
        ));
    }

    return (
        <div className="flex flex-col justify-center text-white">
            <div className="flex justify-center">
                { getPlayerNames() }
            </div>
            <div className="ml-4">
                { getScores() }
            </div>
        </div>
    );
  }
  
export default ScoreBoard;