import Home from './pages/Home'
import TVSeries from './pages/TVSeries'
import Movies from './pages/Movies'
import Details from './pages/Details'
import Watch from './pages/Watch'
import { Route, Routes, Router } from 'react-router-dom'
import {publicRoutes} from "./Routes"



import './App.css';
import Header from './components/Header/Header';

function App() {
  return (
    <>
    <Header/>
    <Routes>
        {publicRoutes.map((route, index) => {
          const Page = route.component

          return <Route key={index} path={route.path} element={<Page/>} /> 
        })}
      {/* <Route path='/' element={<Home/>} />
      <Route path='/movies' element={<Movies/>} />
      <Route path='/tv-series' element={<TVSeries/>}/>
      <Route path='/detail' element={<Details/>}/>
      <Route path='/watch' element={<Watch/>}/> */}
    </Routes>
    </>
  );
}

export default App;
