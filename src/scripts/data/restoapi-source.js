import API_ENDPOINT from '../globals/api-endpoint';

class RestoApiSource {
  static async restaurantList() {
    const response = await fetch(API_ENDPOINT.RESTAURANTS);
    const responseJson = await response.json();
    return responseJson;
  }

  static async restaurantDetail(id) {
    const response = await fetch(API_ENDPOINT.RESTAURANT_DETAIL(id));
    const responseJson = await response.json();
    return responseJson;
  }
}

export default RestoApiSource;
