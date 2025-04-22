import { useIsMobile } from '@/hooks/use-mobile';
import './../styles/App.css';
import AppRouter from './router';
import ChatBar from '@/components/chat';

function App() {
  const isMobile = useIsMobile();
  return (
    <>
      <AppRouter />
      {!isMobile && <ChatBar />}
    </>
  );
}

export default App;
