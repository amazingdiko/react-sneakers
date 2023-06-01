import React from "react";
import style from './card.module.scss'

function Card(props) {
    const [isAdded, setIsAdded] = React.useState(false);

    const handleOnClickPlus = () => {
        setIsAdded(!isAdded);
    }
    return (
    <div className={style.card}>
    <div className={style.favorite}>
        <img src="/img/heart-unliked.svg" alt="Unliked" />
    </div>
    <img width={133} height={112} src={props.url} alt="Sneaker1" />
    <h5>{props.title}</h5>
    <div className="d-flex justify-between align-center">
    <div className="d-flex flex-column">
        <span>Цена: </span>
        <b>{props.price}р</b>
        </div>
        <img className={style.plus} onClick={handleOnClickPlus} src={isAdded ? "/img/btn-checked.svg" : "/img/btn-plus.svg"} alt="Plus" />
    </div>
    </div>
    );
}

export default Card;