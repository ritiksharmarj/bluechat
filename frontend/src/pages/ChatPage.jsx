import axios from 'axios';
import { useEffect } from 'react';

const ChatPage = () => {
  useEffect(() => {
    const fetchChats = async () => {
      const { data } = await axios.get('http://localhost:5000/api/chat');
      console.log(data);
    };
    fetchChats();
  }, []);

  return <div>ChatPage</div>;
};

export default ChatPage;
