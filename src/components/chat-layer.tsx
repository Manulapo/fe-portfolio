import { ChatData } from '@/types';
import { useState } from 'react';
import ChatBar from './chat';
import ChatFull from './chat-full';

const ChatLayer = () => {
  const [chatOpened, setChatOpened] = useState<ChatData[]>([]);
  return (
    <div className="fixed flex w-full gap-3 bottom-[-5px] right-0 z-50 justify-end direction-reverse">
      {chatOpened.map((chat, index) => (
        <ChatFull
          chatData={chat}
          key={index}
          chatClosedTrigger={(chatClosed: ChatData) => {
            setChatOpened((prev) => {
              return prev.filter((chat) => chat.user !== chatClosed.user);
            });
          }}
          className="w-80 flex flex-col gap-4 p-4 rounded-sm shadow-md transition-all duration-200"
        />
      ))}
      <ChatBar
        onChatSelect={(chat) => setChatOpened(chat)}
        className="w-75 flex flex-col gap-4 p-4 rounded-sm shadow-md transition-all duration-200"
      />
    </div>
  );
};

export default ChatLayer;
