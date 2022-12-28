import * as utils   from "../utils";

function ScoreBoard (props: any) {
    const players = utils.getPlayers();
    const rounds = utils.getRounds() || {};

    const getPlayerNames = () => {
        return Object.keys(players).map(key => (
            <div key={key}>{ players[key] }</div>
        ));
    }

    const getScores = () => {
        return rounds.map((round: any, i: number) => (
            <div className="mr-4">
                {
                    Object.keys(round).map( (id: string ) => 
                        (
                            <div key={i + id}>{ round[id] }</div>
                        )
                    )
                }
            </div>
        ));
    }

    return (
        <div className="flex justify-center">
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