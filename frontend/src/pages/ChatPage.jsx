import { ChatState } from '../context/ChatProvider';
import UsersContainer from '../components/UsersContainer';
import Conversation from '../components/Conversation';
import ChatHeader from '../components/ChatHeader';

const ChatPage = () => {
  const { user } = ChatState();

  return (
    <>
      <div>
        {user && <ChatHeader />}
        <div>
          {user && <UsersContainer />}
          {user && <Conversation />}
        </div>
      </div>
    </>
  );
};

export default ChatPage;
