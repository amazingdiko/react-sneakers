import Card from './components/Card/Card';
import Drawer from './components/Drawer';
import Header from './components/Header';
import React from 'react';


function App() {
  const [items, setItems] = React.useState([]);
  const [cartItems, setCartItems] = React.useState([]);
  const [cardOpened, setCardOpened] = React.useState(false);
  const [currentPrice, setCurrentPrice] = React.useState(0);
  React.useEffect(() => {
    fetch('https://6478bf59362560649a2e6456.mockapi.io/items').then(res => {
    return res.json();
  }).then(json => {
    setItems(json);
  });
  }, []);

  const onAddToCard = (obj) => {
    setCartItems(prev => [...prev, obj]);
  };

  return (
    <div className="wrapper clear">
      {cardOpened && <Drawer items={cartItems} onClose={() => setCardOpened(false)} />}
      <Header onClickCard={() => setCardOpened(true)} price={currentPrice}/>
      <div className="content p-40">
        <div className="d-flex align-center justify-between mb-40">
        <h1>Все кроссовки</h1>
        <div className="search-block">
          <img src="/img/search.svg" alt="Search" />
          <input placeholder="Поиск..." />
        </div>
        </div>
        <div className="d-flex flex-wrap">
          {
            items.map((item) => (
              <Card title={item.name}
              price={item.price}
              url={item.imageUrl}
              onFavorite={() => console.log('add zakladka')}
              onPlus={(obj) => onAddToCard(obj)} />
            ))}
        </div>
      </div>
    </div>
  );
}

export default App;
