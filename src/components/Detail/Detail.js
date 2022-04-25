import { FaPlay} from "react-icons/fa";

import './Detail.css'

function Detail(props) {

    return (
        <>
            <div id="detail">
                <div className="detail__box"
                    style={{
                        backgroundImage: `linear-gradient(to bottom, rgba(0,0,0,0.4) 0%,rgba(0,0,0,0.6) 100%),
                        url("https://image.tmdb.org/t/p/original//5P8SmMzSNYikXpxil6BYzJ16611.jpg")`}}
                >
                    <div className="movie-content">
                        <div className="poster">
                            <img src="https://image.tmdb.org/t/p/w500//74xTEgt7R36Fpooo50r9T25onhq.jpg" alt="" />
                        </div>
                        <div className="movie-info">
                            <div className="movie-name">The Batman</div>
                    <div className="description">
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. 
                        Vero aperiam rerum saepe, recusandae iusto earum nemo veritatis quasi cumque, 
                        corrupti laudantium nobis nam, 
                        cupiditate alias asperiores possimus at nihil minima!
                    </div>
                    <div className="realease-date">
                        Ngày phát hành: 12/12/2021
                    </div>
                    <ul className="movies-type">
                        <li className="type-item">Action</li>
                        <li className="type-item">Drama</li>
                    </ul>
                    <div className="movie-votes">
                        
                    </div>
                    <div className="button-event">
                        <button className="watch-now"><FaPlay/>Xem ngay</button>
                    </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Detail