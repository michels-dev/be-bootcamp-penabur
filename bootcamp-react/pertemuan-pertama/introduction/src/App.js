import Navbar from "./components/Navbar";
import HeroContent from "./components/sub/HeroContent";

function App() {
  return (
    <div>
      <Navbar home="React JS" menuItems={['Home', 'About', 'Contact']} />
        <HeroContent />
    </div>
  );
}

export default App;
