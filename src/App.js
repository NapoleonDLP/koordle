import './App.css';

import Game from './Components/Game';
import Login from './Components/Login';
import Signup from './Components/Signup';

import { BrowserRouter, Route, Routes, Switch } from 'react-router-dom';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path='/' element={ <Game /> } />
          <Route path='/login' element={ <Login /> } />
          <Route path='/signup' element={ <Signup /> } />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
