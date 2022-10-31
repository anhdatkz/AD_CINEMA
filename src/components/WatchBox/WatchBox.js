import { Fragment, useEffect, useState } from 'react'
import { Link, useParams } from 'react-router-dom'
import apiConfig from '../../api/apiConfigs'
import { scrollTop } from '../../App'
import './WatchBox.css'


function Episode(props){

    let arrEps = new Array(props.eps).fill(0)
    return(
        <div className="episode-box">
            <div><span>Episodes:</span></div>
            <ul className="episode-list">
                {arrEps.map((ep, index) => (
                    <li className="episode-item" key={index}>
                        <Link to={`/watch/tv/${props.id}/season=${1}/episode=${index + 1}`}>
                            <button onClick={scrollTop}>{index + 1}</button>
                        </Link>
                    </li>
                ))}
            </ul>
        </div>
    )
}

function WatchBox(props) {
    const { type, id, episode } = useParams()
    const [movie, setMovie] = useState({})
    const [episodes, setEpisodes] = useState(1)
    const [similar, setSimilar] = useState([])

    useEffect(() => {
        fetch(apiConfig.detail(type, id))
            .then((res) => res.json())
            .then((data) => {
                setMovie(data)
                setEpisodes(data.number_of_episodes)
                console.log(data.number_of_episodes);
            })
    }, [])

    useEffect(() => {
        fetch(apiConfig.similar(type, id, 1))
            .then((res) => res.json())
            .then((data) => {
                console.log(data.results);
                setSimilar(data.results);
            });
    }, []);

    return (
        <>
            <div className="watch-container">
                <div className="movie-player">
                    <div className='video-box'>
                        <iframe width="100%" height="100%" title='watchVideo' frameBorder="0"
                            src={(type === "movie") ? apiConfig.movieApi(id) : apiConfig.tvshowApi(id, 1, episode)} allowFullScreen>
                        </iframe>
                    </div>
                    <div className="movie-watch-info">
                        <div className="movie-name">{movie.name || movie.original_title}</div>
                        <div className="movie-description">{movie.overview}</div>
                        <div className="movie-release"><span>Release-date: </span> {(type === "movie") ? movie.release_date : movie.first_air_date}</div>
                        <div className="movie-runtime"><span>Run time: </span>{(type === "movie") ? movie.runtime : movie.episode_run_time}'</div>
                    </div>
                    {(type === "movie") ? <Fragment/> : <Episode eps ={episodes} id={id}/>}
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
                                        <div className="similar-movie-vote"><span>Vote avg:</span> {Number(movie.vote_average).toFixed(1)}</div>
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