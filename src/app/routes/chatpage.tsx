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
          className="min-h-[640px] w-full flex flex-col transition-all duration-200"
        />
      )}
      {activeChat && (
        <ChatFull
          chatClosedTrigger={() => setActiveChat(null)}
          chatData={activeChat}
          className="min-h-[640px] w-full flex-col transition-all duration-200"
          isOpen={true}
        />
      )}
    </>
  );
};

export default Chatpage;
