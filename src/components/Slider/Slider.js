import "./Slider.css";
import { FaPlay, FaInfoCircle } from "react-icons/fa";
import React, { useState, useEffect } from "react";
import apiConfig from "../../api/apiConfigs";

function Slider() {
    const upComingURL =
        "https://api.themoviedb.org/3/movie/popular?api_key=a687feda573208f21f2b6f1f4378035a&language=en-US&page=1";

    const [name, setName] = useState("");
    const [date, setDate] = useState("");
    const [descrition, setDescripton] = useState("");

    const [movies, setMovies] = useState([]);

    useEffect(() => {
        fetch(upComingURL)
            .then((res) => res.json())
            .then((data) => {
                console.log(data.results);
                setMovies(data.results);
            });
    },[]);

    return (
        <div id="slider">
            <div className="slider__content">
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
            </div>
        </div>
    );
}

export default Slider;
