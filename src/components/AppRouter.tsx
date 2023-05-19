import {Routes, Route, Navigate } from 'react-router-dom';
import {authRoutes, publicRoutes} from "../routes";
import { INDEX_PAGE_ROUTE } from "../utils/constRoutes";

function AppRouter() {
  //user.isAuth && 
  return (
    <Routes>
      {authRoutes.map(({path, Component}) => 
        <Route key={path} path={path} element={<Component />} />
      )}

      {publicRoutes.map(({path, Component}) =>
        <Route key={path} path={path} element={<Component />} />
      )}

      <Route path="*" element={<Navigate to={INDEX_PAGE_ROUTE} replace />}
    />
    </Routes>
  );
}

export default AppRouter;