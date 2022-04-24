import { Link } from 'react-router-dom'
import { FaTv, FaSearch } from 'react-icons/fa'
import "./Header.css"


function Header() {

    const handleClick = ()=>{
        
    }
    
    return (
        <header id="header">
            <div className="header-item">
                <div className="logo">
                    <FaTv />
                    <h1>AD CINEMA</h1>
                </div>
                <nav className="nav">
                    <ul className="nav__list">
                        <li className="nav__list-item active">
                            <Link to="/">Trang chủ</Link>
                        </li>
                        <li className="nav__list-item" onClick={handleClick}>
                            <Link to="/movies">Phim lẻ</Link>
                        </li>
                        <li className="nav__list-item">
                            <Link to="/tv-series">TV Serries</Link>
                        </li>
                    </ul>
                </nav>
            </div>
            <div className="header-item">
                <div className="search">
                    <FaSearch />
                    <input type="text" placeholder="Phim, diễn viên, thể loại..." />
                </div>
                <div className="login">
                    Đăng nhập
                </div>
            </div>
        </header>
    )
}

export default Header