import { Routes, Route } from 'react-router-dom';
import MainPage from './pages/Mainpage';
import SigninSignup from './pages/Signin_Signup';
import Application from './pages/student/Application';
import Home from './pages/student/Home';
import Student from './pages/student/index';
import YourApplication from './pages/student/YourApplication';
import Admin from "./pages/admin/index"
import AllApplicant from  "./pages/admin/allApplicant"
import AdminHome from  "./pages/admin/Home"
import Branch from './pages/admin/AllBranch';
import BranchChange from './pages/admin/branchChange';

function App() {

  



  return (
    <Routes>
      {/* Root route */}
      <Route path='/' element={<MainPage />} />

      {/* Student */}
      <Route path='register' element={<SigninSignup />} />
      <Route path='student' element={<Student />}>
        <Route path='home' element={<Home />} />
        <Route path='application' element={<YourApplication />} />
        <Route path='apply' element={<Application />} />
      </Route>


      {/* Admin */}
      <Route path='admin' element={<Admin />}>
        <Route path='home' element={<AdminHome />} />
        <Route path='branch' element={<Branch />} />
        <Route path='applicants' element={<AllApplicant />} />
        <Route path='change' element={<BranchChange />} />
      </Route>
    </Routes>

  );
}



export default App;
