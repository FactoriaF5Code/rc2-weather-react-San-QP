import './App.css'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import { Home } from "./components/Home/Home";
import { Details } from "./components/Details/Details";


function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={ <Home /> } />
          <Route path="/weatherDetails/:location" element={<Details />}/>
        </Routes>
      </BrowserRouter>      
    </>
  )
}

export default App