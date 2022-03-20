import { Route, Routes, BrowserRouter } from 'react-router-dom';
import { Home, About, Skills, Project, Contact } from './pages';
import Container from './components/elements/Container/Container';
import SideBar from './components/layouts/SideBar/SideBar';

const App = () => {
  return (
    <BrowserRouter>
      <Container>
        <SideBar />
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/about' element={<About />} />
          <Route path='/project' element={<Project />} />
          <Route path='/skills' element={<Skills />} />
          <Route path='contact' element={<Contact />} />
        </Routes>
      </Container>
    </BrowserRouter>
  );
};

export default App;
