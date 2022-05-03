import { useEffect, useState } from "react";
import { FaPlay } from "react-icons/fa";
import apiConfig from "../../api/apiConfigs";

import { FaImdb } from 'react-icons/fa'

import './Detail.css'

function Detail(props) {

    const [movie, setMovie] = useState([])
    const [genres, setGenres] = useState([])

    useEffect(() => {
        fetch(apiConfig.detail("movie", 453395))
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
                                Ngày phát hành: {movie.release_date}
                            </div>
                            <ul className="movies-type">
                                {genres.map((genre) => (
                                    <li className="type-item" key={genre.id}>{genre.name}</li>
                                ))}
                                {/* <li className="type-item">{console.log(genres)}</li> */}
                            </ul>
                            <div className="movie-votes">
                                {movie.vote_average} <FaImdb />
                            </div>
                            <div className="button-event">
                                <button className="watch-now"><FaPlay />Xem ngay</button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Detail