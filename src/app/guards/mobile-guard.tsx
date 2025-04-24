import { JSX } from 'react';
import { Navigate } from 'react-router-dom';

const MobileRouteGuard = ({ children }: { children: JSX.Element }) => {
  const isMobile = window.innerWidth <= 400;
  if (!isMobile) {
    return <Navigate to="/" replace />;
  }
  return children;
};

export default MobileRouteGuard;
