export const savePlayers = (players: Object) => {

    if (!localStorage.getItem('game'))
        localStorage.setItem('game', JSON.stringify({ players: players }));

    const state = JSON.parse(localStorage.getItem('game') || '{ players:[] }');

    setItem(state);
} 

export const reset = () => {
    localStorage.removeItem('game');
} 

export const updateScore = (scores: number[]) => {
    const game = JSON.parse(localStorage.getItem('game') || '{ rounds:[] }');
    game.rounds.push(scores);

    setItem(game.rounds);
} 

const setItem = (item: any) => {
    localStorage.setItem('game', JSON.stringify(item));
}