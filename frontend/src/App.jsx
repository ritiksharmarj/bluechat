import { Routes, Route } from 'react-router-dom';
import HomePage from './pages/HomePage';
import ChatPage from './pages/ChatPage';

import './App.css';

const App = () => (
  <>
    <Routes>
      <Route path='/' element={<HomePage />}></Route>
      <Route path='/chats' element={<ChatPage />}></Route>
    </Routes>
  </>
);

export default App;
