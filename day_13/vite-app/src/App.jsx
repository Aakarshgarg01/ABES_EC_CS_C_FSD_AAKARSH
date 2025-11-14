import Header from "./Component/Header"
import Body from "./Component/Body"
import Footer from "./Component/Footer"
import Home from "./Component/Home";
import About from "./Component/About";
import {BrowserRouter as Router,Routes,Route} from 'react-router-dom';
import { useEffect, useState } from 'react'
function App() {
  const [productsData, setProductsData] = useState([])
  const [filteredProductData, setFilteredProductData] = useState([])

  useEffect(() => {
    fetch('/product.json')
      .then((r) => r.json())
      .then((data) => {
        setProductsData(data)
        setFilteredProductData(data)
      })
      .catch((e) => console.error('fetch products failed', e))
  }, [])

  const searchHandler = (query) => {
    if (!query) return setFilteredProductData(productsData)
    const data = productsData.filter((p) => p.title.toLowerCase().includes(query.toLowerCase()))
    setFilteredProductData(data)
  }

  return (
    <div className="app">
      <Router>
        <Header onSearch={searchHandler} />
        <Routes>
          <Route path="/" element={<Home />}></Route>
          <Route path="/about" element={<About />}></Route>
          <Route path="/products" element={<Body products={filteredProductData} />}></Route>
        </Routes>
      </Router>
      <Footer />
    </div>
  )
}

export default App