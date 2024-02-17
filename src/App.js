import { BrowserRouter as Router,Routes,Route } from 'react-router-dom';
import './App.css';
import Task1 from './Components/Task1';

function App() {
  return (
    <>
    <Router>
      <Routes>
        <Route path='/' element={<Task1/>}/>
        </Routes>
        </Router>

    </>
  );
}

export default App;
