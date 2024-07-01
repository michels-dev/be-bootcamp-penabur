import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import './App.css'
import Navbar from './components/Navbar/Navbar';
import Sidebar from './components/Sidebar/Sidebar';
import Dashboard from './pages/Dashboard/Dashboard';
import DataSiswa from './pages/Siswa/DataSiswa';
import PageVideos from './pages/Videos/PageVideos';

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
            <Route path='/DataSiswa' element={<DataSiswa/>} />
            <Route path='/PageVideos' element={<PageVideos/>} />
          </Routes>
          </div>
        </div>
      </div>
    </Router>
    </>
  );
}

export default App;
