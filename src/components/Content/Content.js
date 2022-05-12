import React from "react";
import apiConfig from "../../api/apiConfigs";
import ContentItem from "../ContentItem/ContentItem";

import "./Content.css";

function Content(props) {
    const types = ["movie", "tv"]
    const movies = {
        trending: "Trending Movies",
        topRated: "Top Rated Movie",
        popular: "Popular Movies",
    }

    const tv = {
        trending: "Trending TV Shows",
        topRated: "Top Rated TV Shows",
        popular: "Popular TV Shows",
    }


    return (
        <div id="content">
            <ContentItem url={apiConfig.trending(types[0])} title={movies.trending} type={types[0]}/>
            <ContentItem url={apiConfig.topRated(types[0])} title={movies.topRated} type={types[0]} />
            <ContentItem url={apiConfig.popular(types[0],"1")} title={movies.popular} type={types[0]} />
            <ContentItem url={apiConfig.trending(types[1])} title={tv.trending} type={types[1]}/>
            <ContentItem url={apiConfig.topRated(types[1])} title={tv.topRated} type={types[1]} />
            <ContentItem url={apiConfig.popular(types[1],"1")} title={tv.popular} type={types[1]} />
        </div>
    );
}

export default Content;
