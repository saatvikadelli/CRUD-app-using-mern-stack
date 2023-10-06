//import logo from './logo.svg';
import './App.css';
import AddUser from './component/User'; 
import NavBar from './component/NavBar';
import CodeForInterview from './component/CodeFor';
import AllUsers from './component/AllUsers';
import EditUser from './component/Edit';
//import UserRoleSelection from './component/UserSelectionRole';
import AdminPage from './component/Admin';
import PublicUserDetails from './component/PublicUserDetails';


import { BrowserRouter, Route, Routes } from 'react-router-dom';



function App() {
  return (
    <BrowserRouter>
    
      <NavBar />
      <Routes>
        <Route path='/' element ={<CodeForInterview />} />
        <Route path='/all' element ={<AllUsers />} />
        <Route path ='/add' element={<AddUser />} />
        <Route path ='/edit/:id' element ={<EditUser />} />
        <Route path ='/admin' element={<AdminPage />} />
       
        <Route path ='/public-users' element ={<PublicUserDetails />} />
      </Routes>
    </BrowserRouter> 
   
  );
}

export default App;
