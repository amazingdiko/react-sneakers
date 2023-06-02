import React from "react";

function Drawer({onClose, items = []}){
  let priceDrawer = 0;
  items.forEach((obj) => {
    priceDrawer += obj.price;
  })
    return (
    <div className="overlay">
    <div className="drawer">
    <h2 className="mb-30 justify-between d-flex">Корзина: 
    <img className="removeBtn cu-p" onClick={onClose} src="img/btn-remove.svg" alt="remove" />
    </h2>
    <div className="items">
      {
        items.map((obj) => (
          <><div className="cartItem d-flex align-center mb-20">
            <div style={{ backgroundImage: `url(${obj.url})` }} className="cartItemImg"></div>
            <div className="mr-20 flex">
              <p className="mb-5">{obj.title}</p>
              <b>{obj.price} руб.</b>
            </div>
            <img className="removeBtn" src="img/btn-remove.svg" alt="remove" />
          </div></>
        ))
        }
    </div>

    <div className="cartTotalBlock">
    <ul>
      <li>
        <span>Итого:</span>
        <div></div>
        <b>{priceDrawer} руб.</b>
      </li>
      <li>
        <span>Налог 5%:</span>
        <div></div>
        <b>{priceDrawer * 0.05} руб.</b>
      </li>
    </ul>
    <button className="greenButton">Оформить заказ<img src="/img/arrow.svg" alt="arrow" /></button>
    </div>
  </div>
  </div>);
}

export default Drawer;