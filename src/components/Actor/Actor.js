
import { useEffect, useState } from 'react'
import apiConfig from '../../api/apiConfigs'
import './Actor.css'

function Actor(props) {

    const [actors, setActors] = useState([])

    useEffect(() => {
        fetch(apiConfig.casts(634649))
            .then((res) => res.json())
            .then((data) => {
                setActors(data.cast)
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