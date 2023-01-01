import * as utils   from "../utils";

function ScoreBoard () {
    const players = utils.getPlayers();
    const rounds = utils.getRounds() || {};

    const getPlayerNames = () => {
        return Object.keys(players).map(key => (
            <div key={ `player-${key}` }>
                { players[key] }
            </div>
        ));
    }

    const getScores = () => {
        return rounds.map((round: any) => (
            <div className="mr-4">
                {
                    Object.keys(round).map( (id: string ) => 
                        (
                            <div key={ `round-${id}` }>
                                { round[id] }
                            </div>
                        )
                    )
                }
            </div>
        ));
    }

    return (
        <div className="flex justify-center text-white">
            <div>
                { getPlayerNames() }
            </div>
            <div className="flex ml-4">
                { getScores() }
            </div>
        </div>
    );
  }
  
export default ScoreBoard;