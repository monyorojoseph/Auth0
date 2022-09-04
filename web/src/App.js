import { BrowserRouter, Route, Routes} from 'react-router-dom'
import Navbar from './components/Navbar';
import Home from './pages/Home';
import Settings from './pages/settings/Settings';
import Profile from './pages/settings/Profile';
import Notfound from './pages/Notfound';
import Signin from './pages/authentication/Signin';
import Signup from './pages/authentication/Signup';
import Resetpassword from './pages/authentication/Resetpassword';
import ProtectedRoute from './ProtectedRoute';


function App() {
  return (
    <div>
      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='settings/' element={<ProtectedRoute><Settings /></ProtectedRoute>}>
            <Route index element={<Profile />} />
          </Route>
          <Route path='sign-in' element={<Signin />} />
          <Route path='sign-up' element={<Signup />} />
          <Route path='reset-password' element={<Resetpassword />} />
          <Route path='*' element={<Notfound />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
