import { HomePage } from "./screens/home";
import { Footer } from "./shared/components/footer";
import { Navbar } from "./shared/components/navbar";
import "animate.css";

import { PetPage } from "./screens/pet";

const data = {
  id: 0,
  name: "Leo",
  gender: "male",
  imageFileName: "leo.jpeg",
  description:
    "Leo is a supercute boy who really wants his forever home for Christmas. He is quite a chilled cat and is used to people and other cats. Come and meet Leo and give him the loving home he is yearning for.",
  age: "10 years old",
};

const App = () => {
  return (
    <div className="">
      <Navbar />
      <PetPage {...data} />
      <Footer />
    </div>
  );
};

export default App;
