import { Route, Routes, BrowserRouter } from 'react-router-dom';
import { AnimatePresence } from 'framer-motion';
import { Home, About, Skills, Project, Contact } from './pages';
import Container from './components/elements/Container/Container';
import SideBar from './components/layouts/SideBar/SideBar';

const App = () => {
  return (
    <BrowserRouter>
      <Container>
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
      </Container>
    </BrowserRouter>
  );
};

export default App;
