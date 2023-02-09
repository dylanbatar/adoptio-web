import { HomePage } from "./screens/home";
import { Footer } from "./shared/components/footer";
import { Navbar } from "./shared/components/navbar";
import 'animate.css';


const App = () => {
  return (
    <div className="">
      <Navbar/>
      <HomePage />
      <Footer/>
    </div>
  );
};

export default App;
