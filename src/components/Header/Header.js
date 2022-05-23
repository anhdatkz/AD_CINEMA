import { Link, useNavigate } from 'react-router-dom'
import { FaTv, FaSearch } from 'react-icons/fa'
import { scrollTop } from '../../App'
import "./Header.css"
import { useState } from 'react'


function Header() {
    const [navState, setNavStatte] = useState(1)
    const [query, setQuery] = useState('')

    let navigate = useNavigate()

    const handleClick = (index)=>{
        setNavStatte(index)
    }

    const onSubmitSearch = (e) => {
        e.preventDefault()
        if(query.trim() === "") return;

        navigate(`/search/all/query=${query}`)
        setQuery("")
        scrollTop()
    }

    const onChangeQuery = (e) => {
        setQuery(e.target.value)
    }
    
    return (
        <header id="header">
            <div className="header-item" onClick={scrollTop}>
                <Link to="/" onClick={() => handleClick(1)}>
                    <div className="logo">
                        <FaTv />
                        <h1>AD CINEMA</h1>
                    </div>
                </Link>
                <nav className="nav">
                    <ul className="nav__list">
                        <li className={navState === 1 ? "nav__list-item  active" : "nav__list-item"} onClick={() => handleClick(1)}>
                            <Link to="/">Home</Link>
                        </li>
                        <li className={navState === 2 ? "nav__list-item  active" : "nav__list-item"} onClick={() => handleClick(2)}>
                            <Link to="/movies">Movies</Link>
                        </li>
                        <li className={navState === 3 ? "nav__list-item  active" : "nav__list-item"} onClick={() => handleClick(3)}>
                            <Link to="/tv-series">TV Serries</Link>
                        </li>
                    </ul>
                </nav>
            </div>
            <div className="header-item">
                <form className="search" onSubmit={onSubmitSearch}>
                    <FaSearch />
                    <input
                        onChange={onChangeQuery}
                        value={query}
                        type="text" 
                        placeholder="Movies, actor, genres..."
                    />
                </form>
                <div className="login">
                    Login
                </div>
            </div>
        </header>
    )
}

export default Header