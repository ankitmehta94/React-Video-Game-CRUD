/**
 * Created by ankit on 4/8/17.
 */
import React from 'react';
import GameCard from './GameCard.js'

export default function GamesList ({games, deleteGame}) {
    const emptyMessage = (<p>There are no games in your list</p>);
    const gameList = (
        <div className="ui four cards">
            {games.map(game => <GameCard game={game} key={game._id} deleteGame={deleteGame} />)}
    </div>);
        return (
            <div>
                {games.length === 0 ?emptyMessage:gameList}
            </div>
        )
}
GamesList.propTypes = {
    games:React.PropTypes.array.isRequired,
    deleteGame:React.PropTypes.func.isRequired,
};
