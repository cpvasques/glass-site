import React from 'react'

const Game = ({title, img, price, platform}) => {
    return (
        <div className="card">
            <img src={img} alt="" />
            <div className="card-info">
            <h2>{title}</h2>
            <p>{platform}</p>
            </div>
            <h2 className="percentage">${price}</h2>
        </div>
    )
}

export default Game
