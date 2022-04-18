const apiConfig = {
    baseUrl: 'https://api.themoviedb.org/3/',
    apiKey: 'a687feda573208f21f2b6f1f4378035a',
    originalImage: (imgPath) => `https://image.tmdb.org/t/p/original/${imgPath}`,
    w500Image: (imgPath) => `https://image.tmdb.org/t/p/w500/${imgPath}`
}

export default apiConfig;