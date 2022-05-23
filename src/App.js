import { Route, Routes, Router } from 'react-router-dom'
import { publicRoutes } from "./Routes"
import { FaRegArrowAltCircleUp } from "react-icons/fa"

import './App.css';
import Header from './components/Header/Header';
import Footer from "./components/Footer/Footer"
import { Fragment, useEffect, useState } from 'react';

const scrollTop = () => {
  window.scrollTo({
    top: 0,
    behavior: "smooth",
  });
};

export { scrollTop }

function App() {
  const [showGoToTop, setShowGoToTop] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setShowGoToTop(window.scrollY >= 700)
    }

    window.addEventListener("scroll", handleScroll)
  }, [])

  return (
    <>
      <Header />
      <Routes>
        {publicRoutes.map((route, index) => {
          // const Page = route.component

          return <Route key={index} path={route.path} element={<route.component/>} />
        })}
      </Routes>
      {(showGoToTop) ? (
        <div className="scroll-top" onClick={scrollTop}>
          <FaRegArrowAltCircleUp />
        </div>
      ) : <Fragment />}
      <Footer/>
    </>
  );
}

export default App;
