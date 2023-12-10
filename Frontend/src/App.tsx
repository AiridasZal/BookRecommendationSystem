import { useRef } from "react";
import { SearchContext } from "./context/SearchContext";
import NavBar from "./components/NavBar";
import HeroSection from "./components/HeroSection";
import Footer from "./components/Footer";

function App() {
  const searchInputRef = useRef<HTMLInputElement>(null);

  return (
    <>
      <SearchContext.Provider value={{ searchInputRef }}>
        <NavBar />
        <HeroSection />
      </SearchContext.Provider>
      <Footer />
    </>
  );
}

export default App;
