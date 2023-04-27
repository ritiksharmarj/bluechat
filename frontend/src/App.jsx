import './App.css';
import { Routes, Route } from 'react-router-dom';
import { Toaster } from 'react-hot-toast';
import HomePage from './pages/HomePage';
import ChatPage from './pages/ChatPage';
import SignupPage from './pages/auth/SignupPage';
import LoginPage from './pages/auth/LoginPage';

const App = () => (
  <>
    <Routes>
      <Route path='/' element={<HomePage />}></Route>
      <Route path='/chats' element={<ChatPage />}></Route>
      <Route path='/signup' element={<SignupPage />}></Route>
      <Route path='/login' element={<LoginPage />}></Route>
    </Routes>

    <Toaster />
  </>
);

export default App;
