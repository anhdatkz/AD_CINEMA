import React from "react";
import apiConfig from "../../api/apiConfigs";
import ContentItem from "../ContentItem/ContentItem";

import "./Content.css";

function Content(props) {
    const types = ["movie", "tv"]
    const styles = ["trending", "top_rated", "popular"]
    const movies = {
        trending: "Trending Movies",
        top_rated: "Top Rated Movie",
        popular: "Popular Movies",
    }

    const tv = {
        trending: "Trending TV Shows",
        top_rated: "Top Rated TV Shows",
        popular: "Popular TV Shows",
    }


    return (
        <div id="content">
            <ContentItem url={apiConfig.trending(types[0],1)} title={movies.trending} type={types[0]} style={styles[0]}/>
            <ContentItem url={apiConfig.topRated(types[0], 1)} title={movies.top_rated} type={types[0]} style={styles[1]} />
            <ContentItem url={apiConfig.popular(types[0], 1)} title={movies.popular} type={types[0]} style={styles[2]} />
            <ContentItem url={apiConfig.trending(types[1],1)} title={tv.trending} type={types[1]} style={styles[0]}/>
            <ContentItem url={apiConfig.topRated(types[1], 1)} title={tv.top_rated} type={types[1]} style={styles[1]} />
            <ContentItem url={apiConfig.popular(types[1], 1)} title={tv.popular} type={types[1]} style={styles[2]} />
        </div>
    );
}

export default Content;
