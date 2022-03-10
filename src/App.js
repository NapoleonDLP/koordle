import './App.css';

import Game from './Components/Game';
import Login from './Components/Login';

import { BrowserRouter, Route, Routes, Switch } from 'react-router-dom';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path='/' element={ <Game /> } />
          <Route path='/login' element={ <Login /> } />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
