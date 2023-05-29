import './App.css';
import { Routes, Route} from 'react-router-dom';
import Homepages from './Pages/Homepages';

function App() {
  return (
    <div className="App">
          <Routes>
            <Route path='/' element={<Homepages/>}/>
          </Routes>
    </div>
  );
}

export default App;
