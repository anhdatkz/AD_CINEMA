import React from "react";
import Actor from "../Actor/Actor";
import ContentItem from "../ContentItem/ContentItem"
import apiConfig from "../../api/apiConfigs";
import { useParams } from "react-router-dom";

import "./ContentCast.css";

function ContentCast(props) {
    const params = useParams()
    const {type, id} = params

    return (
        <div id="content-cast">
            <Actor/>
            <ContentItem url={apiConfig.similar(type,id)} title="Similar" type={type}/>
        </div>
    );
}

export default ContentCast;
