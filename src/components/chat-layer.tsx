import { ChatData } from '@/types';
import { useState } from 'react';
import ChatBar from './chat-main';
import ChatFull from './chat-full';

const ChatLayer = ({ className }: { className: string }) => {
  const [activeChats, setActiveChats] = useState<ChatData[]>([]);
  const [openChatMap, setOpenChatMap] = useState<{ [user: string]: boolean }>(
    {},
  );

  const handleClosingClick = (chatData: ChatData) => {
    setActiveChats((prev) =>
      prev.filter((chat) => chat.user !== chatData.user),
    );
    setOpenChatMap((prev) => {
      const newMap = { ...prev };
      delete newMap[chatData.user];
      return newMap;
    });
  };

  const handleChatRowSelected = (chat: ChatData) =>
    setActiveChats((prev) =>
      prev.some((c) => c.user === chat.user) ? prev : [chat,...prev],
    );

  const toggleChat = (user: string) => {
    setOpenChatMap((prev) => ({
      ...prev,
      [user]: !prev[user],
    }));
  };

  return (
    <div className={className} style={{ bottom: '-5px', right: '3em' }}>
      {activeChats.map((chat, index) => (
        <ChatFull
          className="w-95 flex flex-col gap-4 p-3 rounded-sm shadow-md transition-all duration-200"
          isOpen={!openChatMap[chat.user]}
          onToggle={() => toggleChat(chat.user)}
          chatData={chat}
          key={index}
          chatClosedTrigger={(chatClosed: ChatData) =>
            handleClosingClick(chatClosed)
          }
        />
      ))}
      <ChatBar
        className="w-75 flex flex-col gap-4 p-4 rounded-sm shadow-md transition-all duration-200"
        onChatRowSelect={(chat: ChatData) => handleChatRowSelected(chat)}
      />
    </div>
  );
};

export default ChatLayer;
