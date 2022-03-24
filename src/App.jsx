import { Route, Routes, BrowserRouter } from 'react-router-dom';
import { AnimatePresence } from 'framer-motion';
import { Home, About, Skills, Project, Contact } from './pages';
import Body from './components/elements/Body/Body';
import SideBar from './components/layouts/SideBar/SideBar';

const App = () => {
  return (
    <BrowserRouter>
      <Body>
        <SideBar />
        <AnimatePresence>
          <Routes>
            <Route path='/' element={<Home />} />
            <Route path='/about' element={<About />} />
            <Route path='/project' element={<Project />} />
            <Route path='/skills' element={<Skills />} />
            <Route path='contact' element={<Contact />} />
          </Routes>
        </AnimatePresence>
      </Body>
    </BrowserRouter>
  );
};

export default App;
