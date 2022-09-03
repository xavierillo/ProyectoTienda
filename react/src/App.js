import logo from './logo.svg';
import './App.css';
import CompShowClients from './client/Show';
import CompCreateClient from './client/Create';
import CompEditClient from './client/Edit';
import { BrowserRouter, Route, Routes } from 'react-router-dom';

function App() {
  return (
    <div className="App">
      <header className="App-header">        
        Tienda z
      </header>

      <BrowserRouter>
        <Routes>
            <Route path='/' element={ <CompShowClients />} />
            <Route path='/create' element={ <CompCreateClient />} />
            <Route path='/edit/:id' element={ <CompEditClient />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
