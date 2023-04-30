import Navbar from "@/components/navbar";
import { useEffect, useState } from "react";
import { SelectedPage } from "./shared/types";
import Home from "@/components/home";
import Benefits from "@/components/benefits";
import Gallery from "@/components/gallery";

function App() {
  const [selectedPage, setSelectedPage] = useState<SelectedPage>(SelectedPage.Home);
  const [isTop, setIsTop] = useState<boolean>(true);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY === 0) {
        setIsTop(true);
        setSelectedPage(SelectedPage.Home);
      }
      if (window.scrollY !== 0) setIsTop(false);
    }
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <>
      <div className="app bg-gray-20 ">
        <Navbar
          isTop={isTop}
          selectedPage={selectedPage}
          setSelectedPage={setSelectedPage} />
        <Home setSelectedPage={setSelectedPage} />
        <Benefits setSelectedPage={setSelectedPage} />
        <Gallery setSelectedPage={setSelectedPage} />
      </div>
    </>
  );
}

export default App;
