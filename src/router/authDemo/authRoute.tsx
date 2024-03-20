import { useAppSelector } from '@/store/hooks';
import { Navigate, useLocation } from 'react-router-dom';

function AuthRoute({ children }: { children: JSX.Element }) {
  const { role, menus } = useAppSelector((state) => state.user);
  const location = useLocation();
  if (!role) {
    return <Navigate to="/login" state={{ from: location }} replace />;
  }
  return children;
}

export default AuthRoute;
