import React, { useState, useEffect } from "react";
import apiConfig from "../../api/apiConfigs";
import {FaAngleRight, FaAngleLeft} from 'react-icons/fa'

import '../ContentItem/ContentItem.css'
import { Link } from "react-router-dom";

function ContentItem(props){
    const {url, title, type} = props

    const [movies, setMovies] = useState([]);

    useEffect(() => {
        fetch(url)
            .then((res) => res.json())
            .then((data) => {
                setMovies(data.results);
            });
    }, []);


    const next = document.querySelectorAll('.next')
    //const prev = document.querySelectorAll('.prev')
    const movieList = document.querySelectorAll('.list-movie')
    const numberItems = movies.length
    let clickCounter = 0


    // const prevHandler = (index) => {
    //     console.log(movieList)
    // }

    const nextHandler = next.forEach((item, index) => {
        item.addEventListener('click', () => {
            clickCounter++
            if(numberItems - (5 + clickCounter) >= 0){
                movieList[index].style.transform = `translateX(${
                    movieList[index].computedStyleMap().get("transform")[0].x.value 
                    - 230}px)`
            }else{
                movieList[index].style.transform = "translateX(0)"
                clickCounter = 0
            }
        })
        // console.log(numberItems)
    })

    return(
        <div className="content__item">
            <div className="content__item-name">
                <h2 className="content-title">{title}</h2>
                <div className="watch-more">Watch more</div>
            </div>
            <div className="content__item-list">
                {/* <div className="icon prev"><FaAngleLeft/></div> */}
                <ul className="list-movie">
                    {movies.map((movie) => (
                        <li className="movie-item" key={movie.id}>
                            <Link to={`/detail/${type}/${movie.id}`}>
                                <img
                                    className="movie-poster"
                                    src={apiConfig.w500Image(movie.poster_path)}
                                    alt=""
                                />
                                <p className="movie-name">{movie.original_title || movie.name}</p>
                            </Link>
                        </li>
                    ))}
                </ul>
                <div className="icon next" onClick={nextHandler}><FaAngleRight /></div>
            </div>
        </div>
    )
}

export default ContentItem