import React from 'react';
import { Outlet, Route, Routes } from 'react-router-dom';
import styled from 'styled-components';
import SideBar from './components/SideBar';
import UserBox from './components/UserBox';
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


const Page = styled.div`
  display: flex;
  flex-flow: row nowrap;
  width: 100%;
`
const BodyPage = styled.div`
  display: flex;
  flex-flow: column nowrap;
  flex-grow: 1;
  padding: 0 48px;
`

const MyNavbar = styled.div`
  display: flex;
  flex-flow: column nowrap;
  width: 100%;
  height: 72px;

  align-items: flex-end;
  justify-content: center;
`

const SalesContent = styled.div`
  padding-top: 25px;
`
//layout for everything maybe
const SalesLayout: React.FC = () => {

  return (
    <Page>
      <SideBar />
      <BodyPage>
        <MyNavbar>
          <UserBox />
        </MyNavbar>
        <SalesContent>
          <Outlet />
        </SalesContent>
      </BodyPage>
    </Page>
  )
}

export default App;
