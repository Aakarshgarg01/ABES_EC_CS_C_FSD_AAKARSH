import Product from "./Product"
const Body = ({ products = [] }) => {
    return (
        <div className="body">
            <div className="products">
                    {products.length ? products.map((product, i) => <Product key={product.title ?? i} product={product} />) : <div className="no-results">No products found</div>}
                </div>
        </div>
    )
}

export default Body