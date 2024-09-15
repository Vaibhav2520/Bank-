
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './App.css';
import Bank from './pages/bank';




function App() {
  return (
    <div className="App">
     <BrowserRouter>
      <Routes>
        <Route path='/' element={<Bank/>}  />
      </Routes>
     </BrowserRouter>
    </div>
  );
}

export default App;
