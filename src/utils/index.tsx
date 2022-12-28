export const savePlayers = (players: Object) => {
    const game = JSON.parse(localStorage.getItem('game') || '');

    game.players = players;

    setItem(game);
} 

export const reset = () => {
    localStorage.removeItem('game');
} 

export const updateScore = (scores: Object ) => {
    const game = JSON.parse(localStorage.getItem('game') || '');
    
    game.rounds.push(scores);

    setItem(game);
} 

const setItem = (item: any) => {
    localStorage.setItem('game', JSON.stringify(item));
}

export const setInitialSetup = (isReset: boolean) => {
    const initial = {
        rounds: [],
        players: {}
    };
    
    if (!!localStorage.getItem('game') && !isReset)
        return;
    
    localStorage.setItem('game', JSON.stringify(initial));
}

export const getPlayers = () => {
    const game = localStorage.getItem('game');
    
    if (game)
        return JSON.parse(game).players;
    
    return {};
}

export const getRounds = () => {
    const game = localStorage.getItem('game') || '';

    return JSON.parse(game)?.rounds;
}