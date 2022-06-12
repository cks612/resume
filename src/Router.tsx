import { BrowserRouter, Routes, Route } from "react-router-dom";
import Nav from "./components/Nav/Nav";
import Main from "./pages/Main/index";
import { BrowserView, MobileView } from "react-device-detect";
import { useEffect } from "react";

export default function Router() {
  function setScreenSize() {
    let vh = window.innerHeight * 0.01;
    document.documentElement.style.setProperty("--vh", `${vh}px`);
  }
  useEffect(() => {
    setScreenSize();
  });
  return (
    <>
      <BrowserRouter basename={process.env.PUBLIC_URL}>
        <BrowserView>
          <Nav />
          <Routes>
            <Route path="/" element={<Main />} />
          </Routes>
        </BrowserView>
        <MobileView>
          <Routes>
            <Route path="/" element={<Main />} />
          </Routes>
        </MobileView>
      </BrowserRouter>
    </>
  );
}
