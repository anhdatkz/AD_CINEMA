
import { useEffect, useState } from 'react'
import apiConfig from '../../api/apiConfigs'
import './Actor.css'

function Actor(props) {

    const [actors, setActors] = useState([])

    useEffect(() => {
        fetch("https://api.themoviedb.org/3/movie/453395/casts?api_key=a687feda573208f21f2b6f1f4378035a")
            .then((res) => res.json())
            .then((data) => {
                setActors(data.cast)
                console.log(data.cast)
            })
    }, [])

    return (
        <>
            <div className="actors">
                <h2 className="actors__title">Cast</h2>
                <ul className="actors__list">
                    {actors.map((actor) => (
                        <li className="actor" key={actor.id}>
                            <div className="actor-img">
                                <img src={apiConfig.w500Image(actor.profile_path)} alt="" />
                            </div>
                            <div className="actor-name">{actor.name || actor.original_name }</div>
                            <div className="actor-character">{actor.character}</div>
                        </li>
                    ))}
                </ul>
            </div>
        </>
    )
}

export default Actor