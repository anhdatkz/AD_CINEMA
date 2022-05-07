import { useEffect, useState } from 'react'
import { Link, useParams } from 'react-router-dom'
import apiConfig from '../../api/apiConfigs'
import './WatchBox.css'


function WatchBox(props) {
    const {type, id} = useParams()
    const [movie, setMovie] = useState({})
    const [similar, setSimilar] = useState([])

    useEffect(() => {
        fetch(apiConfig.detail(type,id))
            .then((res) => res.json())
            .then((data) => {
                setMovie(data)
            })
    }, [])

    useEffect(() => {
        fetch(apiConfig.similar(type, id))
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
                        src={(type === "movie") ? apiConfig.movieApi(id) : apiConfig.tvshowApi(id, 1, 1)} allowFullScreen>
                    </iframe>
                </div>
                <div className="movie-watch-info">
                    <div className="movie-name">{movie.name || movie.original_title}</div>
                    <div className="movie-description">{movie.overview}</div>
                    <div className="movie-release">Release-date: {(type === "movie") ? movie.release_date : movie.first_air_date}</div>
                    <div className="movie-runtime">Run time: {(type === "movie") ? movie.runtime : movie.episode_run_time}'</div>
                </div>
            </div>
            <div className="movie-similar">
                    <ul className="similar-list">
                        {similar.map((movie, index) => (
                            <li className="similar-item" key={index}>
                                <Link to={`/detail/${type}/${movie.id}`}>
                                    <div className="similar-movie-img">
                                        <img src={apiConfig.originalImage(movie.poster_path)} alt="" />
                                    </div>
                                    <div className="similar-movie-info">
                                        <div className="similar-movie-name">{(type === "movie") ? (movie.title || movie.original_title) : (movie.name || movie.original_name)}</div>
                                        <div className="similar-movie-vote">Vote avg: {movie.vote_average}</div>
                                    </div>
                                </Link>
                            </li>
                        ))}
                    </ul>
            </div>
        </div>
        </>
    )
}

export default WatchBox