import ChatLayer from '@/components/chat-layer';
import { useIsMobile } from '@/hooks/use-mobile';
import './../styles/App.css';
import AppRouter from './router';
import DelayedLoader from '@/components/loading-screen';

function App() {
  const isMobile = useIsMobile();
  const delay = 1500; 

  return (
    <DelayedLoader delay={delay} className="w-full mx-auto animate-spin">
      <div className="relative">
        <AppRouter />
        {!isMobile && (
          <ChatLayer className="fixed flex md:w-max w-full h-max gap-3 z-50 justify-end items-end p-0" />
        )}
      </div>
    </DelayedLoader>
  );
}

export default App;
