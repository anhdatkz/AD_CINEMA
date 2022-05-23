import Content from "../components/Content/Content"
import Footer from "../components/Footer/Footer"
import Slider from "../components/Slider/Slider"
import { Route, Routes } from 'react-router-dom';

function Home(props){
    const listContent = ["movie", "trending", "tv"]

    return(
        <>
        <Slider/>
        <Content/>
        </>
    )
}


export default Home