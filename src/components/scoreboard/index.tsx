import * as utils   from "../../utils";
import { Round, Players } from '../../global';

function ScoreBoard () {
    const players: Players  = utils.getPlayers();
    const rounds: [Round]   = utils.getRounds() || {};

    const getPlayerNames = () => {
        return Object.keys(players).map(key => (
            <div className="flex justify-center text-xl w-24" key={ `player-name-${key}` }>
                { players[key].toUpperCase() }
            </div>
        ));
    }

    
    const getScores = () => {
        const scores : Round = {};

        const roundScores = rounds.map((round: Round, i: number) => (
            <div className="mr-4 flex justify-center" key={ `round-${i}` }>
                {
                    Object.keys(round).map( (id: string ) => {
                        if (!scores[id])
                            scores[id] = round[id];
                        else
                            scores[id] += round[id];

                        return (
                            <div className="w-24 text-center" key={ `score-${id}` }>
                                { round[id] }
                            </div>
                        )
                    })
                }
            </div>
        ));

        const total = (
            <div className="flex justify-center mt-4 text-center">
                <div className="w-48">
                    <div>Toplam</div>
                    <div className="flex justify-around">
                        {
                            Object.keys(players).map( (id: string ) => 
                                <div className="mr-4" key={ `total-${id}` }>
                                    { scores[id] }
                                </div>
                            )
                        }
                    </div>
                </div>
            </div>
        );

        roundScores.push(total);
        
        return roundScores;
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