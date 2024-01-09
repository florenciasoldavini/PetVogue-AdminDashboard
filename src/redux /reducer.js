import { combineReducers } from "redux";

import appointmentsSlice from "./slices/appointmentsSlice";
import ordersSlice from "./slices/ordersSlice";
import petsSlice from "./slices/petsSlice";
import productsSlice from "./slices/productsSlice";
import servicesSlice from "./slices/servicesSlice";
import usersSlice from "./slices/usersSlice";

const rootReducer = combineReducers({
    appointments: appointmentsReducer, 
    orders: ordersReducer,
    pets: petsReducer, 
    products: productsReducer,
    services: servicesReducer, 
    users: usersReducer, 
  });
  
  export default rootReducer;