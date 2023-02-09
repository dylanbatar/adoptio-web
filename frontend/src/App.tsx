import { BrowserRouter, Routes, Route } from "react-router-dom";

import { HomePage } from "./screens/home";
import { Footer } from "./shared/components/footer";
import { Navbar } from "./shared/components/navbar";
import "animate.css";

import { PetPage } from "./screens/pet";

const App = () => {
  return (
    <div className="">
      <Navbar />
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/pet/:catId" element={<PetPage />} />
        </Routes>
      </BrowserRouter>
      <Footer />
    </div>
  );
};

export default App;
