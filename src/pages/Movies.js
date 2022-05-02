import ContentSingle from "../components/ContentSingle/ContentSingle"
import Footer from "../components/Footer/Footer"
import Header from "../components/Header/Header"

function Movies(){
    const moviesUrl =
        "https://api.themoviedb.org/3/movie/popular?api_key=a687feda573208f21f2b6f1f4378035a&language=en-US&page=1";



    return(
        <>
        {/* <Header/> */}
        <ContentSingle url={moviesUrl} type="Phim lẻ"/>
        <Footer/>
        </>
    )
}

export default Movies