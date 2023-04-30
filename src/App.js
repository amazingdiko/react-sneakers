

function App() {
  return (
    <div className="wrapper clear">
      <div className="overlay">
        <div className="drawer">
          <h2 className="mb-30">Корзина:</h2>
          <div className="items">
          <div className="cartItem d-flex align-center mb-20">
            <div style={{backgroundImage: 'url(img/sneakers/sneakers1.jpg)'}} className="cartItemImg"></div>
            <div className="mr-20 flex">
              <p className="mb-5">Мужские Кроссовки Nike Air Max 270</p>
              <b>12 999руб.</b>
            </div>
            <img className="removeBtn" src="img/btn-remove.svg" alt="remove" />
          </div>
          <div className="cartItem d-flex align-center">
            <div style={{backgroundImage: 'url(img/sneakers/sneakers1.jpg)'}} className="cartItemImg"></div>
            <div className="mr-20 flex">
              <p className="mb-5">Мужские Кроссовки Nike Air Max 270</p>
              <b>12 999руб.</b>
            </div>
            <img className="removeBtn" src="img/btn-remove.svg" alt="remove" />
            </div>
          </div>

          <ul className="cartTotalBlock">
            <li>
              <span>Итого:</span>
              <div></div>
              <b>21 498 руб.</b>
            </li>
            <li>
              <span>Налог 5%:</span>
              <div></div>
              <b>1074 руб.</b>
            </li>
          </ul>
        </div>
      </div>
      <header className='d-flex justify-between align-center p-40'>
       <div className="d-flex align-center">
       <img width={40} height={40} src="img/logo.png" />
        <div>
          <h3 className="text-uppercase">React sneakers</h3>
          <p className="opacity-5">Магазин лучших кроссовок</p>
          </div>
       </div>
          <ul className="d-flex">
            <li className="mr-30">
            <img width={18} height={18} src="img/cart.svg" />
            <span>1205 rub.</span>
            </li>
            <li>
            <img width={18} height={18} src="img/user.svg" />
            </li>
          </ul>
      </header>
      <div className="content p-40">
        <div className="d-flex align-center justify-between mb-40">
        <h1>Все кроссовки</h1>
        <div className="search-block">
          <img src="/img/search.svg" alt="Search" />
          <input placeholder="Поиск..." />
        </div>
        </div>
        <div className="d-flex">
        <div className="card">
          <div className="favorite">
          <img src="/img/heart-unliked.svg" alt="Unliked" />
          </div>
          <img width={133} height={112} src="/img/sneakers/sneakers1.jpg" alt="Sneaker1" />
          <h5>Мужские Кроссовки Nike Blazer Mid Suede</h5>
          <div className="d-flex justify-between align-center">
            <div className="d-flex flex-column">
              <span>Цена: </span>
              <b>12 999р</b>
            </div>
            <button className="button">
              <img width={13} height={13} src="/img/plus.svg" alt="Plus" />
              </button>
          </div>
        </div>
        <div className="card">
          <img width={133} height={112} src="/img/sneakers/sneakers2.jpg" alt="Sneaker2" />
          <h5>Мужские Кроссовки Nike Blazer Mid Suede</h5>
          <div className="d-flex justify-between align-center">
            <div className="d-flex flex-column">
              <span>Цена: </span>
              <b>12 999р</b>
            </div>
            <button className="button">
              <img width={13} height={13} src="/img/plus.svg" alt="Plus" />
              </button>
          </div>
        </div>
        <div className="card">
          <img width={133} height={112} src="/img/sneakers/sneakers3.jpg" alt="Sneaker3" />
          <h5>Мужские Кроссовки Nike Blazer Mid Suede</h5>
          <div className="d-flex justify-between align-center">
            <div className="d-flex flex-column">
              <span>Цена: </span>
              <b>12 999р</b>
            </div>
            <button className="button">
              <img width={13} height={13} src="/img/plus.svg" alt="Plus" />
              </button>
          </div>
        </div>
        <div className="card">
          <img width={133} height={112} src="/img/sneakers/sneakers4.jpg" alt="Sneaker4" />
          <h5>Мужские Кроссовки Nike Blazer Mid Suede</h5>
          <div className="d-flex justify-between align-center">
            <div className="d-flex flex-column">
              <span>Цена: </span>
              <b>12 999р</b>
            </div>
            <button className="button">
              <img width={13} height={13} src="/img/plus.svg" alt="Plus" />
              </button>
          </div>
        </div>
        </div>
      </div>
    </div>
  );
}

export default App;
