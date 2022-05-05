import { useEffect, useState } from 'react'
import apiConfig from '../../api/apiConfigs'
import './WatchBox.css'


function WatchBox(props) {
    const [movie, setMovie] = useState({})
    const [similar, setSimilar] = useState([])

    useEffect(() => {
        fetch(apiConfig.detail("movie",634649))
            .then((res) => res.json())
            .then((data) => {
                setMovie(data)
            })
    }, [])

    useEffect(() => {
        fetch(apiConfig.similar(634649))
            .then((res) => res.json())
            .then((data) => {
                console.log(data.results);
                setSimilar(data.results);
            });
    },[]);

    return (
        <>
        <div className="watch-container">
            <div className="movie-player">
                <div className='video-box'>
                    <iframe width="900" height="500"
                        src={apiConfig.movieApi(634649)} allowFullScreen>
                    </iframe>
                </div>
                <div className="movie-watch-info">
                    <div className="movie-name">{movie.name || movie.original_title}</div>
                    <div className="movie-description">{movie.overview}</div>
                    <div className="movie-release">Release-date: {movie.release_date}</div>
                    <div className="movie-runtime">Run time: {movie.runtime}'</div>
                </div>
            </div>
            <div className="movie-similar">
                    <ul className="similar-list">
                        {similar.map((movie) => (
                            <li className="similar-item">
                                <div className="similar-movie-img">
                                    <img src={apiConfig.originalImage(movie.poster_path)} alt="" />
                                </div>
                                <div className="similar-movie-info">
                                    <div className="similar-movie-name">{movie.title || movie.original_title}</div>
                                    <div className="similar-movie-vote">Vote avg: {movie.vote_average}</div>
                                </div>
                            </li>
                        ))}
                    </ul>
            </div>
        </div>
        </>
    )
}

export default WatchBox