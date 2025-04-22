import ChatLayer from '@/components/chat-layer';
import { useIsMobile } from '@/hooks/use-mobile';
import './../styles/App.css';
import AppRouter from './router';

function App() {
  const isMobile = useIsMobile();
  return (
    <div className="relative">
      <AppRouter />
      {!isMobile && <ChatLayer />}
    </div>
  );
}

export default App;
