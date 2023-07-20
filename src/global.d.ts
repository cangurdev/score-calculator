interface Player {
    name: string,
    id  : number
}
interface Players {
    [id: string]: string
}

interface Round {
    [key: string]: number;
}

export {
    Round,
    Players
};