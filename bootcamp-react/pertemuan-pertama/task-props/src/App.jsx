import './App.css';
import Comments from './components/HeroContent/Comments';
import Navbar from './components/Navbar/Navbar';

function App() {
  const menuItems = [
    { label: 'Home', icon: 'pi pi-home' },
    { label: 'About', icon: 'pi pi-info-circle' },
    { label: 'Contact', icon: 'pi pi-envelope' }
  ];

  return (
    <>
      <Navbar home="Props." menuItems={menuItems} />
      <Comments />
    </>
  );
}

export default App;
