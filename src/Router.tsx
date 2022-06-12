import { BrowserRouter, Routes, Route } from "react-router-dom";
import Nav from "./components/Nav/Nav";
import Main from "./pages/Main/index";
import { BrowserView, MobileView } from "react-device-detect";

export default function Router() {
  return (
    <>
      <BrowserView>
        <BrowserRouter basename={process.env.PUBLIC_URL}>
          <Nav />
          <Routes>
            <Route path="/" element={<Main />} />
          </Routes>
        </BrowserRouter>
      </BrowserView>
      <MobileView>
        <BrowserRouter basename={process.env.PUBLIC_URL}>
          <Nav />
          <Routes>
            <Route path="/" element={<Main />} />
          </Routes>
        </BrowserRouter>
      </MobileView>
    </>
  );
}
