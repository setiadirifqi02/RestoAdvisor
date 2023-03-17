import HomePage from '../views/pages/home-page';
import DetailPage from '../views/pages/detail-page';
import FavouritePage from '../views/pages/favourite-page';

const routes = {
  '/': HomePage, // default page
  '/home': HomePage,
  '/detail/:id': DetailPage,
  '/favourite': FavouritePage,
};

export default routes;
