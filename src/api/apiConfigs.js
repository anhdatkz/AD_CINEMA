const apiConfig = {
    baseUrl: 'https://api.themoviedb.org/3/',
    apiKey: 'a687feda573208f21f2b6f1f4378035a',
    originalImage: (imgPath) => `https://image.tmdb.org/t/p/original/${imgPath}`,
    w500Image: (imgPath) => `https://image.tmdb.org/t/p/w500/${imgPath}`,
    detail: (type, id) => `https://api.themoviedb.org/3/${type}/${id}?api_key=a687feda573208f21f2b6f1f4378035a&language=en-US`,
    trending:(type, page) => `https://api.themoviedb.org/3/trending/${type}/week?api_key=a687feda573208f21f2b6f1f4378035a&page=${page}`,
    movie: "",
    tvShows:"https://api.themoviedb.org/3/tv/popular?api_key=a687feda573208f21f2b6f1f4378035a&language=en-US&page=1",
    popular:(type, page) =>`https://api.themoviedb.org/3/${type}/popular?api_key=a687feda573208f21f2b6f1f4378035a&language=en-US&page=${page}`,
    topRated:(type, page) =>`https://api.themoviedb.org/3/${type}/top_rated?api_key=a687feda573208f21f2b6f1f4378035a&language=en-US&page=${page}`,
    watchMore:(type, style, page) =>`https://api.themoviedb.org/3/${type}/${style}?api_key=a687feda573208f21f2b6f1f4378035a&language=en-US&page=${page}`,
    similar: (type, id, page) => `https://api.themoviedb.org/3/${type}/${id}/similar?api_key=a687feda573208f21f2b6f1f4378035a&language=en-US&page=${page}`,
    movieApi: (id) => `https://www.2embed.org/embed/${id}`,
    tvshowApi: (id, season, episode) => `https://www.2embed.org/embed/${id}/${season}/${episode}`,
    casts: (type, idMovie) => `https://api.themoviedb.org/3/${type}/${idMovie}/credits?api_key=a687feda573208f21f2b6f1f4378035a`,
    search: (query, page) => `https://api.themoviedb.org/3/search/multi?api_key=a687feda573208f21f2b6f1f4378035a&language=en-US&query=${query}&page=${page}&include_adult=false`,
    errActor: "https://i.pinimg.com/564x/9a/e5/c2/9ae5c20f9349e872f05e9feead42b64e.jpg",
    errPoster: "https://i.pinimg.com/564x/c4/96/91/c496911918bb05469ff404f66fb63990.jpg"
}


export default apiConfig;