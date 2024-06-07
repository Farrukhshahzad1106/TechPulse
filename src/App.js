import { Route, Routes } from 'react-router-dom';
import './App.css';
import Footer from './components/Footer';
import Navbar from './components/Navbar';
import OurStory from './Pages/OurStory';
import BlogDetail from './Pages/BlogDetail';
import ContactUs from './Pages/ContactUs';
import Write from './Pages/Write';
import Profile from './Pages/Profile';
import Home from './Pages/Home';

function App() {
  return (
    // <div className='text-5xl text-center text-blue-500 bg-slate-500'>
    //   Blog App
    // </div>
    <div>
      <Navbar/>
      <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path='/home' element={<Home/>}/>
        <Route path='/OurStory' element={<OurStory/>}/>
        <Route path='/Blogs/:id' element={<BlogDetail/>}/>
        <Route path='/Contact-us' element={<ContactUs/>}/>
        <Route path='/write' element={<Write/>}/>
        <Route path='/Profile' element={<Profile/>}/>
      </Routes>
      <Footer/>
    </div>
  );
}

export default App;
