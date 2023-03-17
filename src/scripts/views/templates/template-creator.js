import CONFIG from '../../globals/config';

const createListByArrayForMenu = (items) => {
  let lists = '';
  items.forEach((item) => {
    lists += `<li>${item.name}</li>`;
  });
  return lists;
};

const createReviewList = (reviews) => {
  let reviewList = '';
  reviews.forEach((review) => {
    reviewList += `
            <div class="review-item">
                <p class="review-item__name">${review.name}</p>
                <p class="review-item__review">${review.review} - <span class="review__review-item-review-date">${review.date}</span></p>
            </div>`;
  });

  return reviewList;
};

const createRestaurantItemTemplate = (restaurant) => `<article tabindex="0" class="card">
    <img tabindex="0" class="card__image" src="${CONFIG.BASE_IMAGE_URL_SMALL + restaurant.pictureId}" alt="Picture of Restaurant ${restaurant.name}" height="250">

    <div class="card__info">
    <div class="card__info-title">
        <p tabindex="0" class="card__info-name">${restaurant.name}</p>
        <span tabindex="0" class="card__rating">
            <i title="icon rating" class="fa fa-star"></i>
            <span>${restaurant.rating}</span>
         </span>
    </div>
    <p tabindex="0" class="card__info-city">${restaurant.city} </p>
    <p tabindex="0" class="card__info-description truncate">${restaurant.description}</p>

    <div class="card_detail-restaurant">
            <a href="./#/detail/${restaurant.id}" aria-label="Kunjungi restoran ${restaurant.name} di ${restaurant.city}">Kunjungi Restoran</a>
    </div>
</div>
</article>`;

const createDetailRestaurantItem = (restaurant) => `
    <article class="detail-restaurant">
        <div class="detail-main">
            <div class="detail-main__hero">
                <img src="${CONFIG.BASE_IMAGE_URL_LARGE + restaurant.pictureId}" alt="picture of restaurant"></img>
                <div class="main-title">
                    <div>
                        <h2 class="main-title__title">${restaurant.name}</h2>
                        <p class="main-title__location">${restaurant.address}, ${restaurant.city}</p>
                    </div>
                    <p class="restaurant-rating">Rating: ${restaurant.rating}</p>
                </div>
            </div>
            <div class="detail-main__container">
                <div class="detail-main__description">
                    <h3>Deskripsi</h3>
                    <hr>
                    <p>${restaurant.description}</p>
                </div>
                <div class="detail-main-menu">
                    <h3>Menu</h3>
                    <hr>
                    <div class="detail-main-menu__container">
                        <div class="detail-main__menu">
                            <p>Foods</p>
                            <ul class="food-list-container">
                                ${createListByArrayForMenu(restaurant.menus.foods)}
                            </ul>
                        </div>
                        <div class="detail-main__drinks">
                            <p>Drinks</p>
                            <ul class="drink-list-container">
                                ${createListByArrayForMenu(restaurant.menus.drinks)}
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
        </div>

        <div class="detail-main__review">
            <div class="review__review-title">
                <h3>Review</h3>
            </div>
            <hr>
            <div class="review__review-container">
                ${createReviewList(restaurant.customerReviews)}
            </div>
        </div>
    </article>`;

const createLikeButtonTemplate = () => `
    <button aria-label="like this restaurant" id="likeButton" class="like">
       <i class="fa-regular fa-heart" aria-hidden="true"></i>
    </button>
  `;

const createLikedButtonTemplate = () => `
    <button aria-label="unlike this restaurant" id="likeButton" class="like">
      <i class="fa-solid fa-heart" aria-hidden="true"></i>
    </button>
  `;
export {
  createLikeButtonTemplate,
  createLikedButtonTemplate,
  createRestaurantItemTemplate,
  createDetailRestaurantItem,
};
