import { ChatData } from '@/types';
import { useState } from 'react';
import ChatBar from './chat';
import ChatFull from './chat-full';

const ChatLayer = () => {
  const [chatOpened, setChatOpened] = useState<ChatData[]>([]);
  const handleClosingClick = (chatData: ChatData) => {
    setChatOpened((prev) => prev.filter((chat) => chat.user !== chatData.user));
  };

  const handleChatRowSelected = (chat: ChatData) =>
    setChatOpened((prev) =>
      prev.some((c) => c.user === chat.user) ? prev : [...prev, chat],
    );

  return (
    <div className="fixed flex w-full gap-3 bottom-[-5px] right-0 z-50 justify-end direction-reverse">
      {chatOpened.map((chat, index) => (
        <ChatFull
          chatData={chat}
          key={index}
          className="w-80 flex flex-col gap-4 p-4 rounded-sm shadow-md transition-all duration-200"
          chatClosedTrigger={(chatClosed: ChatData) =>
            handleClosingClick(chatClosed)
          }
        />
      ))}
      <ChatBar
        onChatRowSelect={(chat: ChatData) => handleChatRowSelected(chat)}
        className="w-75 flex flex-col gap-4 p-4 rounded-sm shadow-md transition-all duration-200"
      />
    </div>
  );
};

export default ChatLayer;
