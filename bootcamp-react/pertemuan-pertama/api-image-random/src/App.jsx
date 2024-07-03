import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import './App.css'
import Navbar from './components/Navbar/Navbar';
import Sidebar from './components/Sidebar/Sidebar';
import Dashboard from './pages/Dashboard/Dashboard';
import PageVideos from './pages/Videos/PageVideos';
import PageJam from './pages/Jam/PageJam';
import Redux from './pages/Redux/Redux';

function App() {
  const menuItems = [
    { label: 'BOOTCAMP WGS'}
  ];

  return (
    <>
    <Router>
      <div className='flex h-screen'>
        <Sidebar />
        <div className='flex-1 flex flex-col'>
          <Navbar home="Dashboard" menuItems={menuItems} />
          <div className='flex-1 p-4 overflow-auto'>
          <Routes>
            <Route path='/' element={<Dashboard/>} />
            <Route path='/PageVideos' element={<PageVideos/>} />
            <Route path='/PageJam' element={<PageJam/>} />
            <Route path='/Redux' element={<Redux/>} />
          </Routes>
          </div>
        </div>
      </div>
    </Router>
    </>
  );
}

export default App;
