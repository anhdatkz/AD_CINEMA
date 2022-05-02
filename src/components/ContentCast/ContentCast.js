import React from "react";
import Actor from "../Actor/Actor";
import ContentItem from "../ContentItem/ContentItem"
import apiConfig from "../../api/apiConfigs";

import "./ContentCast.css";

function ContentCast(props) {

    return (
        <div id="content-cast">
            <Actor/>
            <ContentItem url={apiConfig.similar(453395)} title="Similar"/>
        </div>
    );
}

export default ContentCast;
