import ChatLayer from '@/components/chat-layer';
import { useIsMobile } from '@/hooks/use-mobile';
import './../styles/App.css';
import AppRouter from './router';

function App() {
  const isMobile = useIsMobile();
  return (
    <div className="relative">
      <AppRouter />
      {!isMobile && (
        <ChatLayer className="fixed flex md:w-max w-full h-max gap-3 z-50 justify-end items-end p-0" />
      )}
    </div>
  );
}

export default App;
