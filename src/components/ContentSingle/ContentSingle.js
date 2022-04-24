import {useState, useEffect} from 'react'
import apiConfig from '../../api/apiConfigs';
import "./ContentSingle.css"


function ContentSingle(props){
    const upComingURL =
        "https://api.themoviedb.org/3/movie/popular?api_key=a687feda573208f21f2b6f1f4378035a&language=en-US&page=1";

    const [currentMovie, setCurrentMovie] = useState(0);

    const [movies, setMovies] = useState([]);

    useEffect(() => {
        fetch(upComingURL)
            .then((res) => res.json())
            .then((data) => {
                console.log(data.results);
                setMovies(data.results);
            });
    },[]);

    return(
        <>
        <div className="content-single">
            <div className="content__title">
                <h3 className="title">Phim lẻ</h3>
            </div>
            <div className="content__box">
                {movies.map(movie => {
                    return (
                        <div className="content-item" key={movie.id}>
                            <img
                                className="movie-poster"
                                src={apiConfig.w500Image(movie.poster_path)}
                                alt=""
                            />
                            <p className="movie-name">{movie.original_title || movie.name}</p>
                        </div>
                    )
                })}
            </div>
        </div>
        </>
    )
}

export default ContentSingle