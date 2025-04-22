import Cta from "./components/cta/cta";
import Footer from "./components/footer/footer";
import Gallery from "./components/gallery/gallery";
import Hero from "./components/hero/hero";
import Navbar from "./components/navbar/navbar";
import Results from "./components/results/results";
import Showcase from "./components/showcase/showcase";

const App = () => {
  return (
    <div>
      <Navbar />
      <Hero />
      <Showcase />
      <Results />
      <Gallery />
      <Cta />
      <Footer />
    </div>
  );
};

export default App;
