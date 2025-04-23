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
        <ChatLayer className="fixed flex w-full h-full gap-3 z-50 justify-end items-end" />
      )}
    </div>
  );
}

export default App;
