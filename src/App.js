import { BrowserRouter, Route, Routes } from "react-router-dom";

import Login from './components/Login'; 
import User from './components/User';
import Signup from './components/Signup';

function App() {
  return (
   <BrowserRouter> 
      <Routes>
          <Route path="/" element={<User/>}/>
          <Route path="/login" element={<Login/>}/>
          <Route path="/signup" element={<Signup/>}/>
        </Routes>
    </BrowserRouter>
    );
}

export default App;
