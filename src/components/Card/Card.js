import React from "react";
import style from './card.module.scss'

function Card({title, url, price, onFavorite, onPlus }) {
    const [isAdded, setIsAdded] = React.useState(false);

    const handleOnClickPlus = () => {
        if(!isAdded)
            onPlus({title, url, price});
        setIsAdded(!isAdded);
    }
    return (
    <div className={style.card}>
    <div className={style.favorite} onClick={onFavorite}>
        <img src="/img/heart-unliked.svg" alt="Unliked" />
    </div>
    <img width={133} height={112} src={url} alt="Sneaker1" />
    <h5>{title}</h5>
    <div className="d-flex justify-between align-center">
    <div className="d-flex flex-column">
        <span>Цена: </span>
        <b>{price}р</b>
        </div>
        <img className={style.plus} onClick={handleOnClickPlus} src={isAdded ? "/img/btn-checked.svg" : "/img/btn-plus.svg"} alt="Add" />
    </div>
    </div>
    );
}

export default Card;