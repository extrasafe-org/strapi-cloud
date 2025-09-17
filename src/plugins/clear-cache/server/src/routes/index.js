import adminPIRoutes from './admin-api';
import contentAPIRoutes from './content-api';

const routes = {
  admin: {
    type: 'admin',
    routes: adminPIRoutes,
  },
  'content-api': {
    type: 'content-api',
    routes: contentAPIRoutes,
  },
};

export default routes;
