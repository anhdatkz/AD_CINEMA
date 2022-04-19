import "./Slider.css";
import { FaPlay, FaInfoCircle } from "react-icons/fa";
import React, { useState, useEffect } from "react";
import {FaAngleRight, FaAngleLeft} from 'react-icons/fa'
import apiConfig from "../../api/apiConfigs";
import { clear } from "@testing-library/user-event/dist/clear";

function Slider() {
    const upComingURL =
        "https://api.themoviedb.org/3/movie/popular?api_key=a687feda573208f21f2b6f1f4378035a&language=en-US&page=1";

    const [currentMovie, setCurrentMovie] = useState(0);

    const [movies, setMovies] = useState([]);
    const sliderLength = movies.length

    const autoSlider = true
    let sliderInterval
    let time = 5000


    useEffect(() => {
        fetch(upComingURL)
            .then((res) => res.json())
            .then((data) => {
                console.log(data.results);
                setMovies(data.results);
            });
    },[]);

    useEffect(() => {
        setCurrentMovie(0)
    },[])

    useEffect(() => {
        if(autoSlider){
            auto()
        }
        return () => clearInterval(sliderInterval)
    },[currentMovie])

    const nextSlider = () => {
        setCurrentMovie(currentMovie === sliderLength -1 ? 0 : currentMovie + 1)
    }

    const prevSlider = () => {
        setCurrentMovie(currentMovie === 0 ? sliderLength -1 : currentMovie - 1)
    }

    function auto(){
        sliderInterval = setInterval(nextSlider, time)
    }

    return (
        <div id="slider">
            <div className="slider-icon left" onClick={prevSlider}><FaAngleLeft /></div>
            <div className="slider-icon right" onClick={nextSlider}><FaAngleRight /></div>
            {movies.map((movie, index) => {
                return (
                    <>
                        {index === currentMovie && (
                            <div className={index === currentMovie ? "slider-panel current" : "slider-panel"}
                                style={{
                                    backgroundImage: `url(
                                    "${apiConfig.originalImage(movie.backdrop_path)}")`
                                }}
                                key={index}>
                                <div className="slider__content">
                                    <div className="movie-info">
                                        <div className="name">{movie.original_title}</div>
                                        <div className="time">Ngày phát hành: {movie.release_date}</div>
                                        <div className="description">
                                            {movie.overview}
                                        </div>
                                    </div>

                                    <div className="movie-play">
                                        <button className="play">
                                            <FaPlay />
                                            Phát
                                        </button>
                                        <button className="about">
                                            <FaInfoCircle />
                                            Thông tin khác
                                        </button>
                                    </div>
                                </div>
                            </div>
                        )}
                    </>
                )
            })}
            {/* <div className="slider__content">
                    <div className="movie-info">
                        <div className="name">Nhím Sonic 2</div>
                        <div className="time">Ngày phát hành May 12</div>
                        <div className="description">
                            Lorem ipsum dolor sit amet consectetur adipisicing elit. Eum soluta
                            error, quibusdam accusantium cum quia enim corrupti exercitationem
                            ullam nulla aperiam! Officiis laudantium numquam nemo exercitationem
                            et, illum animi beatae?
                        </div>
                    </div>

                    <div className="movie-play">
                        <button className="play">
                            <FaPlay />
                            Phát
                        </button>
                        <button className="about">
                            <FaInfoCircle />
                            Thông tin khác
                        </button>
                    </div>
                </div> */}
        </div>
    );
}

export default Slider;