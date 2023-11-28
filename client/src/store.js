import { createStore, combineReducers, applyMiddleware } from "redux";
import thunk from "redux-thunk";
import { composeWithDevTools } from "redux-devtools-extension";
import {
  forgotPasswordReducer,
  profileReducer,
  userReducer,
  allUsersReducer,
  userDetailsReducer,
} from "./reducers/userReducer";
import {
  newProductReducer,
  newReviewReducer,
  productDetailsReducer,
  productReducer,
  productsReducer,
  productReviewsReducer,
  reviewReducer,
} from "./reducers/productReducer";
import { cartReducer } from "./reducers/cartReducer";
import { saveForLaterReducer } from "./reducers/saveForLaterReducer";
import {
  allOrdersReducer,
  myOrdersReducer,
  newOrderReducer,
  orderDetailsReducer,
  orderReducer,
  paymentStatusReducer,
} from "./reducers/orderReducer";
import { wishlistReducer } from "./reducers/wishlistReducer";

const reducer = combineReducers({
  user: userReducer,
  profile: profileReducer,
  forgotPassword: forgotPasswordReducer,
  products: productsReducer,
  productDetails: productDetailsReducer,
  newReview: newReviewReducer,
  cart: cartReducer,
  saveForLater: saveForLaterReducer,
  newOrder: newOrderReducer,
  myOrders: myOrdersReducer,
  paymentStatus: paymentStatusReducer,
  orderDetails: orderDetailsReducer,
  allOrders: allOrdersReducer,
  order: orderReducer,
  newProduct: newProductReducer,
  product: productReducer,
  users: allUsersReducer,
  userDetails: userDetailsReducer,
  reviews: productReviewsReducer,
  review: reviewReducer,
  wishlist: wishlistReducer,
});

const store = createStore(
    reducer,
    composeWithDevTools(applyMiddleware(thunk))
  );

export default store;
