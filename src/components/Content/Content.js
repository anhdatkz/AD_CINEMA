import React from "react";
import apiConfig from "../../api/apiConfigs";
import ContentItem from "../ContentItem/ContentItem";

import "./Content.css";

function Content(props) {
    const contents = {
        trending: "Trending Movies",
        topRated: "Top Rated",
        popular: "Popular Movies",
        tvShows: "TV Shows",
    }

    return (
        <div id="content">
            <ContentItem url={apiConfig.trending} title={contents.trending}/>
            <ContentItem url={apiConfig.topRated} title={contents.topRated}/>
            <ContentItem url={apiConfig.popular} title={contents.popular}/>
            <ContentItem url={apiConfig.tvShows} title={contents.tvShows}/>
        </div>
    );
}

export default Content;
