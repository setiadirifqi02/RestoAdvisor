import RestoApiSource from '../../data/restoapi-source';
import { createRestaurantItemTemplate } from '../templates/template-creator';

const HomePage = {
  async render() {
    return `
        <section class="hero">
        <div class="hero__inner">
          <h1 tabindex="0" class="hero__title">Rekomendasi Restoran Terbaik disini</h1>
          <p tabindex="0" class="hero__tagline">Memberikan informasi rekomendasi restauran menarik <br> untukmu yang
            wajib
            dikunjungi</p>
          <button class="hero__btn" aria-label="button to main content">
            <a href="#katalog-restoran">Temukan Disni</a>
          </button>
        </div>
      </section>
      
      <!-- Katalog Section -->
      <section class="katalog container" >
        <h1 tabindex="0" class="katalog__label">Rekomendasi Untukmu</h1>

        <!-- Daftar Restoran Section -->
        <div class="restoran__section" id="restaurant-list">

        </div>
      </section>
      `;
  },

  async afterRender() {
    const restaurantApi = await RestoApiSource.restaurantList();
    console.log(restaurantApi);
    const restoContainer = document.querySelector('#restaurant-list');
    restaurantApi.restaurants.forEach((restaurant) => {
      restoContainer.innerHTML += createRestaurantItemTemplate(restaurant);
    });
  },
};

export default HomePage;
