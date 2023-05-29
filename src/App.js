import Card from './components/Card/Card';
import Drawer from './components/Drawer';
import Header from './components/Header';

const arr = [{name: 'Мужские Кроссовки Nike Blazer Mid Suede', price: 12999, imageUrl: "/img/sneakers/sneakers1.jpg"},
{name: 'Мужские Кроссовки Nike Air Max 270', price: 15600, imageUrl: "/img/sneakers/sneakers2.jpg"},
{name: 'Мужские Кроссовки Nike Blazer Mid Suede', price: 8499, imageUrl: "/img/sneakers/sneakers3.jpg"},
{name: 'Кроссовки Puma X Aka Boku Future Rider', price: 8999, imageUrl: "/img/sneakers/sneakers4.jpg"}];

function App() {
  return (
    <div className="wrapper clear">
      <Drawer />
      <Header />
      <div className="content p-40">
        <div className="d-flex align-center justify-between mb-40">
        <h1>Все кроссовки</h1>
        <div className="search-block">
          <img src="/img/search.svg" alt="Search" />
          <input placeholder="Поиск..." />
        </div>
        </div>
        <div className="d-flex">
          {
            arr.map((obj) => (
              <Card title={obj.name}
              price={obj.price}
              url={obj.imageUrl} />
            ))}
        </div>
      </div>
    </div>
  );
}

export default App;
