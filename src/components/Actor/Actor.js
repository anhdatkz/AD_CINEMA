
import { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import apiConfig from '../../api/apiConfigs'
import './Actor.css'

function Actor(props) {
    const param = useParams()
    const {type, id} = param

    const [actors, setActors] = useState([])

    useEffect(() => {
        fetch(apiConfig.casts(type, id))
            .then((res) => res.json())
            .then((data) => {
                console.log(data.cast)
                setActors(data.cast)
            })
    }, [param])

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