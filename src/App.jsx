

import { Outlet } from 'react-router-dom'; 
import Nav from './Components/Nav'; 

function App() {
  return (
    <div>
      <Nav /> 
      <p className="text-blue-700 mb-4 text-center">
  Welcome to Tuwaiq! We are thrilled to have you join us on this incredible journey of learning and growth. Our camp is dedicated to providing you with enriching experiences that foster creativity, teamwork, and personal development. Get ready to embark on exciting adventures and make lifelong memories with friends!
</p>

        <Outlet />
      </div>

  );
}

export default App;
