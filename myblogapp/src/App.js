import Main from './content/Main';
import {Routes, Route} from 'react-router-dom';
import MainLayout from './content/MainLayout';
import Home from './pages/Home';
import Members from './pages/Members'
import About from './pages/About';

function App() {
  return (
    <Routes>
        <Route element={<MainLayout />}>
        <Route path="/" element={<Home/>} />
        <Route path="/main" element={<Main/>} />
        <Route path="/members" element={<Members/>} />
        <Route path="/about" element={<About/>} />
        </Route>
    
    </Routes>
     
  );
}

export default App;
