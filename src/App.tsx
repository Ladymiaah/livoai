import HeroSection from "./component/HeroSection";
import Navbar from "./component/Navbar"

const Home: React.FC = () => {
  return(
    <div>
      <Navbar/>
      <HeroSection/>
    </div>
  )
}

export default Home;