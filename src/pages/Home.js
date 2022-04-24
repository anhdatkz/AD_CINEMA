import Content from "../components/Content/Content"
import Footer from "../components/Footer/Footer"
import Header from "../components/Header/Header"
import Slider from "../components/Slider/Slider"

function Home(props){
    const listContent = ["movie", "trending", "tv"]

    return(
        <>
        <Header/>
        <Slider/>
        <Content/>
        <Footer/>
        </>
    )
}


export default Home