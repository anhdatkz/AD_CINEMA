import React, { useState, useEffect, useRef } from "react";
import apiConfig from "../../api/apiConfigs";
import {FaAngleRight, FaAngleLeft} from 'react-icons/fa'
import { scrollTop } from "../../App";

import '../ContentItem/ContentItem.css'
import { Link } from "react-router-dom";

function ContentItem(props){
    const {url, title, type, style} = props

    const [movies, setMovies] = useState([])
    const sliderRef = useRef()
    const moiveRef = useRef()

    const numberItems = movies.length
    let clickCounter = 0

    useEffect(() => {
        fetch(url)
            .then((res) => res.json())
            .then((data) => {
                setMovies(data.results);
            });
    }, []);

    const nextHandler = () =>{
        const numberOfMovies = Math.floor(sliderRef.current.clientWidth / 220)

        clickCounter++
        if (numberItems - ( numberOfMovies + clickCounter) >= 0) {
            sliderRef.current.style.transform = `translateX(${sliderRef.current.computedStyleMap().get("transform")[0].x.value
                - 220}px)`
        } else {
            sliderRef.current.style.transform = "translateX(0)"
            clickCounter = 0
        }
        console.log(clickCounter)
        console.log(numberOfMovies)
    }
    // const next = document.querySelectorAll('.next')
    // //const prev = document.querySelectorAll('.prev')


    const prevHandler = () => {
        if (clickCounter > 0) {
            sliderRef.current.style.transform = `translateX(${sliderRef.current.computedStyleMap().get("transform")[0].x.value
                + 220}px)`
            clickCounter--
        }
        console.log(clickCounter)
    }

    // const nextHandler = next.forEach((item, index) => {
    //     item.addEventListener('click', () => {
    //         clickCounter++
    //         if(numberItems - (5 + clickCounter) >= 0){
    //             movieList[index].style.transform = `translateX(${
    //                 movieList[index].computedStyleMap().get("transform")[0].x.value 
    //                 - 220}px)`
    //         }else{
    //             movieList[index].style.transform = "translateX(0)"
    //             clickCounter = 0
    //         }
    //     })
    //     // console.log(numberItems)
    // })

    return(
        <div className="content__item">
            <div className="content__item-name">
                <h2 className="content-title">{title}</h2>
                {(style === "similar" ? <></> :(
                    <Link to={`/${type}/${style}`} onClick={scrollTop}><div className="watch-more">Watch more</div></Link>
                ))}
            </div>
            <div className="content__item-list">
                <ul className="list-movie" ref={sliderRef}>
                    {movies.map((movie) => (
                        <li className="movie-item" key={movie.id} onClick={scrollTop} ref={moiveRef}>
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
                <div className="icon prev" onClick={prevHandler}><FaAngleLeft/></div>
                <div className="icon next" onClick={nextHandler}><FaAngleRight/></div>
            </div>
        </div>
    )
}

export default ContentItem