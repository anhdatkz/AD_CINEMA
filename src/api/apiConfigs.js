const apiConfig = {
    baseUrl: 'https://api.themoviedb.org/3/',
    apiKey: 'a687feda573208f21f2b6f1f4378035a',
    originalImage: (imgPath) => `https://image.tmdb.org/t/p/original/${imgPath}`,
    w500Image: (imgPath) => `https://image.tmdb.org/t/p/w500/${imgPath}`,
    detail: (type, id) => `https://api.themoviedb.org/3/${type}/${id}?api_key=a687feda573208f21f2b6f1f4378035a&language=en-US`,
    trending:"https://api.themoviedb.org/3/trending/all/week?api_key=a687feda573208f21f2b6f1f4378035a",
    movie: "",
    tvShows:"https://api.themoviedb.org/3/tv/popular?api_key=a687feda573208f21f2b6f1f4378035a&language=en-US&page=1",
    popular:"https://api.themoviedb.org/3/movie/popular?api_key=a687feda573208f21f2b6f1f4378035a&language=en-US&page=1",
    topRated:"https://api.themoviedb.org/3/movie/top_rated?api_key=a687feda573208f21f2b6f1f4378035a&language=en-US&page=1",
    similar: (id) => `https://api.themoviedb.org/3/movie/${id}/similar?api_key=a687feda573208f21f2b6f1f4378035a&language=en-US&page=1`,
    movieApi: (id) => `https://www.2embed.ru/embed/tmdb/movie?id=${id}`,
    tvshowApi: (id, season, episode) => `https://www.2embed.ru/embed/tmdb/tv?id=${id}&s=${season}&e=${episode}`,
    casts: (idMovie) => `https://api.themoviedb.org/3/movie/${idMovie}/casts?api_key=a687feda573208f21f2b6f1f4378035a`
}


export default apiConfig;