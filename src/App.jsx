import { Route, Routes, BrowserRouter } from 'react-router-dom';
import { AnimatePresence } from 'framer-motion';
import { Home, About, Skills, Project, Contact } from './pages';
import { MenuContextProvider } from './context/MenuContext';
import MenuButton from './components/elements/MenuButton/MenuButton';
import Body from './components/elements/Body/Body';
import SideBar from './components/layouts/SideBar/SideBar';

const App = () => {
  return (
    <MenuContextProvider>
      <BrowserRouter>
        <Body>
          <SideBar />
          <MenuButton />
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
    </MenuContextProvider>
  );
};

export default App;
