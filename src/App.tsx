import React from 'react';
import { Outlet, Route, Routes } from 'react-router-dom';
import RequireAuth from './features/Auth/RequireAuth';
import LoginPage from './pages/Login';
import SalesHomePage from './pages/Sales/HomePage';

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path='/login' element={<LoginPage/>} />
        <Route element={<RequireAuth />}>
          <Route element={<SalesLayout />}>
            <Route path='/' element={<SalesHomePage />} />
          </Route>
        </Route>
      </Routes>
    </div>
  );
}

//layout for everything maybe
const SalesLayout: React.FC = () => {

  return (
    <>
      <div>Hello from sales Layout</div>
      <Outlet />
    </>
  )
}

export default App;
