
import { useEffect, useState } from 'react'
import './app.css'
const Header = () => {
  return (
    <div className="header">Header</div>
  )
}
const Search = ({ filterHandler }) => {
  return (
    <div className="search">
      <input type="text" name="search" id="search" onChange={(e) => filterHandler(e.target.value)} />
      <button>search</button>
    </div>
  )
}
const Product = ({ product }) => {
  return (
    <div className="product">
      <img src={product.img} alt="img-here" />
      <h2>{product.title}</h2>
      <h3>{product.price}</h3>
    </div>
  )
}
const Body = () => {
  const [products, setProducts] = useState([]);
  const [filteredData, setFilteredData] = useState([]);
  useEffect(() => {
    // public/product.json is served from the project root — use an absolute path
    fetch("/product.json")
      .then((res) => res.json())
      .then((data) => {
        setProducts(data);
        setFilteredData(data);
      })
      .catch((err) => console.log("unable to load data", err))
  }, [])
  const filterHandler = (query) => {
    const data = products.filter(
      (product) => (product.title.toLowerCase()).includes(query.toLowerCase())
    );
    setFilteredData(data);
  }
  return (<div className="body">
    <Search filterHandler={filterHandler} />
    <div className="products">
      {filteredData.map((product, i) => <Product key={product.title ?? i} product={product} />)}
    </div>
  </div>)
}
const Footer = () => {
  return (
    <div className="footer">Footer</div>
  )
}
function App() {
  return (
    <div className="app">
      <Header />
      <Body />
      <Footer />
    </div>
  )
}
export default App
