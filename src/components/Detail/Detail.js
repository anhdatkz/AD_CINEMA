import { Fragment, useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import { FaPlay } from "react-icons/fa";
import apiConfig from "../../api/apiConfigs";

import { FaImdb } from 'react-icons/fa'

import './Detail.css'

function Detail(props) {
    const params = useParams()
    const {type, id} = params

    const [movie, setMovie] = useState([])
    const [genres, setGenres] = useState([])

    useEffect(() => {
        fetch(apiConfig.detail(type, id))
            .then((res) => res.json())
            .then((data) => {
                setGenres(data.genres)
                setMovie(data)
            })
    }, [])

    return (
        <>
            <div id="detail">
                <div className="detail__box"
                    style={{
                        backgroundImage: `linear-gradient(to bottom, rgba(0,0,0,0.4) 0%,rgba(0,0,0,0.6) 100%),
                        url("${apiConfig.originalImage(movie.backdrop_path)}")`
                    }}
                >
                    <div className="movie-content">
                        <div className="poster">
                            <img src={apiConfig.w500Image(movie.poster_path)} alt="" />
                        </div>
                        <div className="movie-info">
                            <div className="movie-name">{movie.name || movie.original_title}</div>
                            <div className="description">
                                {movie.overview}
                            </div>
                            <div className="realease-date">
                                Release date: {(type === "movie") ? movie.release_date : movie.first_air_date}
                            </div>
                            <ul className="movies-type">
                                {genres.map((genre) => (
                                    <li className="type-item" key={genre.id}>{genre.name}</li>
                                ))}
                                {/* <li className="type-item">{console.log(genres)}</li> */}
                            </ul>
                            {(type === "movie") ? <Fragment/> : (
                                <Fragment>
                                    <div className="number-of-ep">Number of eps: {movie.number_of_episodes}</div>
                                </Fragment>
                            )}
                            <div className="movie-votes">
                                {movie.vote_average} <FaImdb />
                            </div>
                            <div className="button-event">
                                <Link to={(type === "movie") ? `/watch/${type}/${id}` : `/watch/${type}/${id}/season=${1}/episode=${1}`}>
                                    <button className="watch-now"><FaPlay />Xem ngay</button>
                                </Link>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Detail