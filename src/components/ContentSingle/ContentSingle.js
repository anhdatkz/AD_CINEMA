import {useState, useEffect} from 'react'
import apiConfig from '../../api/apiConfigs';
import { Link } from 'react-router-dom';
import "./ContentSingle.css"


function ContentSingle(props){
    const {title, type} = props

    // const [currentMovie, setCurrentMovie] = useState(0);

    const [movies, setMovies] = useState([]);
    const [pages, setPages] = useState(1)
    const [page, setPage] = useState(1)
    const [loading, setLoading] = useState(false)

    useEffect(() => {
        fetch(apiConfig.popular(type, page))
            .then((res) => res.json())
            .then((data) => {
                console.log(data.results);
                setMovies([...movies,...data.results]);
            });
    },[page]);

    const LoadMore = () => {
        return setPage(page+1)
    }

    return(
        <>
        <div className="content-single">
            <div className="content__title">
                <h3 className="title">{title}</h3>
            </div>
            <ul className="content__box">
                {movies.map(movie => {
                    return (
                        <li className="content-item" key={movie.id}>
                            <Link to={`/detail/${type}/${movie.id}`}>
                            <img
                                className="movie-poster"
                                src={apiConfig.w500Image(movie.poster_path)}
                                alt=""
                            />
                            <p className="movie-name">{movie.original_title || movie.name}</p>
                            </Link>
                        </li>
                    )
                })}
            </ul>
            <div className="load-more">
                <button className='load-more-btn' onClick={LoadMore}>Load more</button>
            </div>
        </div>
        </>
    )
}

export default ContentSingle