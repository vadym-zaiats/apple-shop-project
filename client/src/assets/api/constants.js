export const API_URL = '/api/';
export const productsEP = `${API_URL}products/`;
export const productsFilterEP = `${API_URL}products/filter/`;
export const categoriesEP = (id) => `${API_URL}catalog/${id || ''}`;
export const currentProductEP = (itemNo) => `${API_URL}products/${itemNo}`;
export const productFiltersEP = `${API_URL}product-filters`;
export const orderEP = `${API_URL}orders`;
export const searchEP = `${API_URL}products/search`;
export const customerEP = `${API_URL}customers/`;
export const loginEP = `${API_URL}customers/login`;
export const userInfoEP = `${API_URL}customers/customer`;
export const ordersEP = `${API_URL}orders/`;
export const wishlistEP = (id = '') => `${API_URL}wishlist/${id}`;
export const cartEP = (id = '') => `${API_URL}cart/${id}`;
