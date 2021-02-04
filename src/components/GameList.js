import Game from './Game'

const GameList = ({games}) => {
    return (
        <div className="cards">
          {games.map((game)=>(
            <Game
              key={game.id}
              title={game.title}
              img={game.img}
              price={game.price}
              platform={game.platform}
            />
          ))}
          </div>
    )
}

export default GameList
