import {useState, useEffect} from 'react'
import apiConfig from '../../api/apiConfigs';
import { Link } from 'react-router-dom';
import { scrollTop } from '../../App';
import { useParams } from 'react-router-dom';
import "./ContentSingle.css"


function ContentSingle(props){
    const {title, type, form} = props
    const {query} = useParams()

    const [movies, setMovies] = useState([]);
    const [pages, setPages] = useState(1)
    const [page, setPage] = useState(1)

    const LoadMore = () => {
        return setPage(page+1)
    }

    useEffect(() => {
        fetch((form === "single") ? apiConfig.popular(type, page) : apiConfig.search(query, page))
            .then((res) => res.json())
            .then((data) => {
                console.log(data.results);
                setMovies([...movies,...data.results]);
                setPages(data.total_pages)
            });
    },[page, query]);

    if(movies.length === 0) {
        return (
            <div className="content-single">
                <div className="no-results">
                    <h1>
                        No Results!
                    </h1>
                </div>
            </div>
        )
      }

    return(
        <>
        <div className="content-single">
            <div className="content__title">
                <h3 className="title">{(form === "single") ? `${title}`: `${title} "${query}"`}</h3>
            </div>
            <ul className="content__box">
                {movies.map((movie, index) => {
                    return (
                        <li className="content-item" key={index} onClick={scrollTop}>
                            <Link to={`/detail/${type || movie.media_type}/${movie.id}`}>
                            <img
                                className="movie-poster"
                                src={(movie.poster_path) ? apiConfig.w500Image(movie.poster_path) : apiConfig.errPoster}
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