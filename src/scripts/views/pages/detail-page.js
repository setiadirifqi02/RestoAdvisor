import RestoApiSource from '../../data/restoapi-source';
import UrlParser from '../../routes/url-parser';
import { createDetailRestaurantItem } from '../templates/template-creator';
import LikeButtonInitiator from '../../utils/like-button-initiator';

const DetailPage = {
  async render() {
    return `
        <section class="detail-restaurant" id="katalog-restoran">
          <div id="restaurant"></div>
          <div id="likeButtonContainer"></div>
        </section>
        `;
  },

  async afterRender() {
    const url = UrlParser.parseActiveUrlWithoutCombiner();
    let restaurant = await RestoApiSource.restaurantDetail(url.id);

    restaurant = restaurant.restaurant;

    const restaurantContainer = document.querySelector('#restaurant');
    restaurantContainer.innerHTML = createDetailRestaurantItem(restaurant);

    LikeButtonInitiator.init({
      likeButtonContainer: document.querySelector('#likeButtonContainer'),
      restaurant: {
        id: restaurant.id,
        name: restaurant.name,
        description: restaurant.description,
        city: restaurant.city,
        rating: restaurant.rating,
        pictureId: restaurant.pictureId,
      },

    });
  },
};

export default DetailPage;
