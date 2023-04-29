import { ChatState } from '../context/ChatProvider';
import UsersContainer from '../components/UsersContainer';
import Conversation from '../components/Conversation';
import ChatHeader from '../components/ChatHeader';

const ChatPage = () => {
  const { user } = ChatState();

  return (
    <>
      <div id='chat-container' className='h-screen w-full bg-white'>
        {user && <ChatHeader />}
        {user && <UsersContainer />}
        {user && <Conversation />}
      </div>
    </>
  );
};

export default ChatPage;
