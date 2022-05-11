import { Link } from 'react-router-dom'
import { FaTv, FaSearch } from 'react-icons/fa'
import "./Header.css"
import { useState } from 'react'


function Header() {
    const [navState, setNavStatte] = useState(1)

    const handleClick = (index)=>{
        setNavStatte(index)
    }
    
    return (
        <header id="header">
            <div className="header-item">
                <Link to="/">
                    <div className="logo">
                        <FaTv />
                        <h1>AD CINEMA</h1>
                    </div>
                </Link>
                <nav className="nav">
                    <ul className="nav__list">
                        <li className={navState === 1 ? "nav__list-item  active" : "nav__list-item"} onClick={() => handleClick(1)}>
                            <Link to="/">Trang chủ</Link>
                        </li>
                        <li className={navState === 2 ? "nav__list-item  active" : "nav__list-item"} onClick={() => handleClick(2)}>
                            <Link to="/movies">Phim lẻ</Link>
                        </li>
                        <li className={navState === 3 ? "nav__list-item  active" : "nav__list-item"} onClick={() => handleClick(3)}>
                            <Link to="/tv-series">TV Serries</Link>
                        </li>
                        {/* <li className="nav__list-item">
                            <Link to="/detail">Chi tiết</Link>
                        </li>
                        <li className="nav__list-item">
                            <Link to="/watch">Xem phim</Link>
                        </li> */}
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