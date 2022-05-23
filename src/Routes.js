import Home from './pages/Home'
import TVSeries from './pages/TVSeries'
import Movies from './pages/Movies'
import Details from './pages/Details'
import Watch from './pages/Watch'
import Search from './pages/Search'
import WatchMore from './pages/WatckMore'


const publicRoutes = [
    { path: "/", component: Home },
    { path: "/movies", component: Movies },
    { path: "/tv-series", component: TVSeries },
    { path: "/detail/:type/:id", component: Details },
    { path: "/watch/:type/:id", component: Watch },
    { path: "/watch/:type/:id/season=:season/episode=:episode", component: Watch },
    { path: "/search/all/query=:query", component: Search},
    { path: "/:media_type/:style", component: WatchMore}  
]

const privateRoutes = [
    {}
]

export { publicRoutes, privateRoutes }
