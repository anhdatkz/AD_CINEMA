import Header from "../components/Header/Header"
import Footer from "../components/Footer/Footer"
import ContentSingle from "../components/ContentSingle/ContentSingle"

function TVSeries(){
    const tvSeriesUrl = 'https://api.themoviedb.org/3/tv/top_rated?api_key=a687feda573208f21f2b6f1f4378035a&language=en-US&page=1'


    return(
        <>
        {/* <Header/> */}
        <ContentSingle url={tvSeriesUrl} type="TV Series"/>
        <Footer/>
        </>
    )
}


export default TVSeries