import ChatBar from '@/components/chat-main';
import ChatFull from '@/components/chat-full';
import { ChatData } from '@/types';
import { useState } from 'react';

const Chatpage = () => {
  const [activeChat, setActiveChat] = useState<ChatData | null>(null);
  return (
    <>
      {!activeChat && (
        <ChatBar
          onChatRowSelect={(chat) => setActiveChat(chat)}
          className="w-full flex flex-col gap-4 p-4 rounded-sm shadow-md transition-all duration-200"
        />
      )}
      {activeChat && (
        <ChatFull
          chatClosedTrigger={() => setActiveChat(null)}
          chatData={activeChat}
          className="w-screen flex flex-col gap-4 p-3 transition-all duration-200"
          isOpen={true}
        />
      )}
    </>
  );
};

export default Chatpage;
