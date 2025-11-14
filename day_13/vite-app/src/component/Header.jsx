import {Link} from 'react-router-dom'
import './Header.css';
import Search from './Search'

const Header = ({ onSearch }) => {
    return (
        <div className="header">
            <nav className="nav-items">
                <Link to="/">Home</Link>
                <Link to="/about">About</Link>
                <Link to="/products">Products</Link>
            </nav>
            {/* show search in header so it's always available */}
            <div style={{ marginTop: 12 }}>
              <Search searchHandler={onSearch} />
            </div>
        </div>
    )
}

export default Header