import { Route, Routes, Router } from 'react-router-dom'
import {publicRoutes} from "./Routes"
import { FaRegArrowAltCircleUp } from "react-icons/fa"

import './App.css';
import Header from './components/Header/Header';

const scrollTop = () => {
  window.scrollTo({
    top: 0,
    behavior: "smooth",
  });
};

export {scrollTop}

function App() {
  const scrollTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };
  
  return (
    <>
    <Header/>
    <Routes>
        {publicRoutes.map((route, index) => {
          // const Page = route.component

          return <Route key={index} path={route.path} element={<route.component/>} /> 
        })}
    </Routes>
    <div className="scroll-top" onClick={scrollTop}>
                <FaRegArrowAltCircleUp/>
            </div>
    </>
  );
}

export default App;
