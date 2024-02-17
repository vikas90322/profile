import { BrowserRouter as Router,Routes,Route } from 'react-router-dom';
import './App.css';
import Task1 from './Components/Task1';
import Footer from './Components/Footer';

function App() {
  return (
    <>

    <Router>
      <Routes>
                <Route path='/profile' element={<Task1/>}/>
                <Route path='/Footer' element={<Footer/>}/>

        </Routes>
        </Router>

    </>
  );
}

export default App;
