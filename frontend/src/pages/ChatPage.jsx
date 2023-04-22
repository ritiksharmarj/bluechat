import axios from 'axios';
import { useEffect, useState } from 'react';

const ChatPage = () => {
  const [chats, setChats] = useState([]);

  useEffect(() => {
    const fetchChats = async () => {
      const { data } = await axios.get('http://localhost:5000/api/chat');
      setChats(data);
      console.log(data);
    };
    fetchChats();
  }, []);

  return <div>{chats[0].chatName}</div>;
};

export default ChatPage;
