import { Routes, Route, useLocation } from "react-router-dom";
import { useState } from "react";
import Intro from "./components/Intro";
import Layout from "./components/Layout";
import Home from "./pages/Home";
import About from "./pages/About";
import Therapies from "./pages/Therapies";
import Workshops from "./pages/Workshops";
import Contact from "./pages/Contact";

function App() {
  const location = useLocation();
  const [hasPlayedIntro, setHasPlayedIntro] = useState(
    () => window.location.pathname !== "/",
  );

  const showIntro = location.pathname === "/" && !hasPlayedIntro;

  return (
    <>
      {showIntro ? <Intro onComplete={() => setHasPlayedIntro(true)} /> : null}
      <Routes>
        <Route element={<Layout />}>
          <Route
            path="/"
            element={<Home />}
          />
          <Route
            path="/hakkimda"
            element={<About />}
          />
          <Route
            path="/terapiler"
            element={<Therapies />}
          />
          <Route
            path="/atolyeler"
            element={<Workshops />}
          />
          <Route
            path="/iletisim"
            element={<Contact />}
          />
        </Route>
      </Routes>
    </>
  );
}

export default App;
