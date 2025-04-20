import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import './index.css'
import App from './App.jsx'
import Home from './pages/HomePage';
import Trip from './pages/TripDetails';
import Final from './pages/Finalize';
import Expense from './pages/OtherExpenses';
import DisealBill from './pages/DisealBill';
import Rto from './pages/RtoPc';
import Smailage from './pages/Smailage';

createRoot(document.getElementById('root')).render(
  <StrictMode>
    {/* <App /> */}
    <BrowserRouter>
     <Routes>
      <Route path='/' element={<Home/>}/>
      <Route path='/final' element={<Final/>}/>
      <Route path='/expense' element={<Expense/>}/>
      <Route path='/diseal' element={<DisealBill/>}/>
      <Route path='/rto' element={<Rto/>}/>
      <Route path='/smailage' element={<Smailage/>}/>
      <Route path='/trip' element={<Trip/>}/>
     </Routes>
     </BrowserRouter>
  </StrictMode>,
)
