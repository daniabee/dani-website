import { useRef } from "react";
import "./App.css";
import ScrollToTop from "../ScrollToTop";
import NavBar from "../NavBar/NavBar";
import Hero from "../Hero/Hero";
import About from "../About/About";
import Resume from "../Resume/Resume";
import Portfolio from "../Portfolio/Portfolio";
import Contact from "../Contact/Contact";
import { Routes, Route } from "react-router-dom";

function App() {
  const about = useRef(null);
  const resume = useRef(null);
  const portfolio = useRef(null);
  const contact = useRef(null);

  return (
    <div className="App">
      <Routes>
        <Route
          exact
          path="/"
          element={
            <div className="App">
              {" "}
              <ScrollToTop />
              <NavBar
                about={about}
                resume={resume}
                portfolio={portfolio}
                contact={contact}
              />
              <Hero />
              <About about={about} />
              <Resume resume={resume} />
              <Portfolio portfolio={portfolio} />
              <Contact contact={contact} />
            </div>
          }
        />
      </Routes>
    </div>
  );
}

export default App;
