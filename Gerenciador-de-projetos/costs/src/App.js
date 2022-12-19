import { BrowserRouter as Router, Routes, Route} from 'react-router-dom'

import Home from './Components/pages/Home';
import Contact from './Components/pages/Contact';
import NewProject from './Components/pages/NewProject';
import Company from './Components/pages/Company';
import Projectes from './Components/pages/Projectes';

import Container from './Components/Layouts/Container';
import NavBar from './Components/Layouts/NavBar';
import Footer from './Components/Layouts/Footer';



function App() {
  return (
    
<Router>

     <NavBar></NavBar>
        <Container customClass='ctnHeight'>
          <Routes>
          <Route exact path='/' element={<Home />} />
          <Route exact path='/company' element={<Company />} />
          <Route exact path='/contact' element={<Contact />} />
          <Route exact path='/newproject' element={<NewProject />} />
          <Route exact path='/projectes' element={<Projectes />} />
        </Routes>
        </Container>
    
        <Footer></Footer>
    </Router>
    

  );
}

export default App;
