import Content from "../components/Content/Content"
import Footer from "../components/Footer/Footer"
import Slider from "../components/Slider/Slider"

function Home(props){
    const listContent = ["movie", "trending", "tv"]

    return(
        <>
        <Slider/>
        <Content/>
        <Footer/>
        </>
    )
}


export default Home