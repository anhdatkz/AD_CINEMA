import Home from './pages/Home';
import TVSeries from './pages/TVSeries';
import Movies from './pages/Movies'
import Details from './pages/Details'
import Watch from './pages/Watch'
import { Route, Routes } from 'react-router-dom';



import './App.css';
import Header from './components/Header/Header';

function App() {
  return (
    <>
    <Header/>
    <Routes>
      <Route path='/' element={<Home/>} />
      <Route path='/movies' element={<Movies/>} />
      <Route path='/tv-series' element={<TVSeries/>}/>
      <Route path='/detail' element={<Details/>}/>
      <Route path='/watch' element={<Watch/>}/>
    </Routes>
    </>
  );
}

export default App;
