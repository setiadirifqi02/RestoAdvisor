import FavouriteRestaurantDb from '../../data/favorite-restaurant-idb';
import { createRestaurantItemTemplate } from '../templates/template-creator';

const FavouritePage = {
  async render() {
    return `
    <div class="content-favourite">
      <section class="katalog container" id="katalog-restoran">
        <h1 tabindex="0" class="katalog__label">Your Favourite Restaurant</h1>
        <div class="container restoran__section" id="restaurant-list">

        </div>
      </section>
    </div>
        `;
  },

  async afterRender() {
    const restaurants = await FavouriteRestaurantDb.getAllRestaurants();
    const restaurantsContainer = document.querySelector('#restaurant-list');

    restaurants.forEach((restaurant) => {
      restaurantsContainer.innerHTML += createRestaurantItemTemplate(restaurant);
    });
  },
};

export default FavouritePage;
