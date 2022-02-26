// Public routes
const HOME = '/';
const ABOUT = '/about';
const SIGN_UP = '/signup';
const LOG_IN = '/login';

// Post routes
const ITEMS = '/items';
const ITEM = '/item/:id';
const ITEM_INSERT = '/item/create';
const ITEM_UPDATE = '/item/update/:id'; 
// Add routes from Login.js
const REGISTER = '/register';
const FORGOT_PASSWORD = '/forgot-password';

export const routes = {
  HOME,
  ABOUT,
  SIGN_UP,
  LOG_IN,
  ITEMS,
  ITEM,
  ITEM_INSERT,
  ITEM_UPDATE,
  REGISTER,
  FORGOT_PASSWORD, 
};
