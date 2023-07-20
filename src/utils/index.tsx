import { Round, Players } from '../global';

export const savePlayers = (players: Players) : void => {
    const game = JSON.parse(localStorage.getItem('game') || '');

    game.players = players;

    setItem(game);
} 

export const reset = () : void => {
    localStorage.removeItem('game');
} 

export const updateScore = (scores: Object) : void => {
    const game = JSON.parse(localStorage.getItem('game') || '');
    
    game.rounds.push(scores);

    setItem(game);
} 

const setItem = (item: any) : void => {
    localStorage.setItem('game', JSON.stringify(item));
}

export const setInitialSetup = (isReset: boolean) : void => {
    const initial = {
        rounds: [],
        players: {}
    };
    
    if (!!localStorage.getItem('game') && !isReset)
        return;
    
    localStorage.setItem('game', JSON.stringify(initial));
}

export const getPlayers = () : Players => {
    const game = localStorage.getItem('game');
    
    if (game)
        return JSON.parse(game).players;
    
    return {};
}

export const getRounds = () : [Round]=> {
    const game = localStorage.getItem('game') || '';

    return JSON.parse(game)?.rounds;
}