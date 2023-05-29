import React from "react";
import style from './card.module.scss'

function Card(props) {
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
        <button className="button">
        <img width={13} height={13} src="/img/plus.svg" alt="Plus" />
        </button>
    </div>
    </div>
    );
}

export default Card;