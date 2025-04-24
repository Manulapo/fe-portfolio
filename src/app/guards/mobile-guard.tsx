import { Navigate } from 'react-router-dom';
import { useIsMobile } from '@/hooks/use-mobile';
import { JSX } from 'react';

const MobileRouteGuard = ({ children }: { children: JSX.Element }) => {
  const isMobile = useIsMobile();
  if (!isMobile) {
    return <Navigate to="/" replace />;
  }
  return children;
};

export default MobileRouteGuard;
