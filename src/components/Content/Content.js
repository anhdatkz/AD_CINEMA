import "./Content.css";
import React, { useState, useEffect } from "react";
import apiConfig from "../../api/apiConfigs";
import {FaAngleRight, FaAngleLeft} from 'react-icons/fa'


const contents = [ 'movies', 'tvshows', 'trending', 'watched']

function ContentItem(){

    // const upComingURL =
    //     "https://api.themoviedb.org/3/movie/popular?api_key=a687feda573208f21f2b6f1f4378035a&language=en-US&page=1";
    const upComingURL =
    "https://api.themoviedb.org/3/movie/upcoming?api_key=a687feda573208f21f2b6f1f4378035a&language=en-US&page=1"

    const [movies, setMovies] = useState([]);

    useEffect(() => {
        fetch(upComingURL)
            .then((res) => res.json())
            .then((data) => {
                console.log(data.results);
                setMovies(data.results);
            });
    }, []);


    const next = document.querySelectorAll('.next')
    const prev = document.querySelectorAll('.prev')
    const movieList = document.querySelectorAll('.list-movie')
    const numberItems = movies.length
    let clickCounter = 0


    const prevHandler = (index) => {
        console.log(movieList)
    }

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
        console.log(numberItems)
    })

    return(
        <div className="content__item">
                <div className="content__item-name">
                    <h2>Trending</h2>
                </div>
                <div className="content__item-list">
                    <div className="icon prev" onClick={prevHandler}><FaAngleLeft/></div>
                    <ul className="list-movie">
                        {movies.map((movie) => (
                            <li className="movie-item" key={movie.id}>
                                <img
                                    className="movie-poster"
                                    src={apiConfig.w500Image(movie.poster_path)}
                                    alt=""
                                />
                                <p className="movie-name">{movie.original_title}</p>
                            </li>
                        ))}
                    </ul>
                    <div className="icon next" onClick={nextHandler}><FaAngleRight/></div>
                </div>
            </div>
    )
}

function Content(props) {
    return (
        <div id="content">
           <ContentItem/>
           <ContentItem/>
        </div>
    );
}

export default Content;
