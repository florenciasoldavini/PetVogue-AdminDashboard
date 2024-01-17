import { combineReducers } from "redux";

import appointmentsReducer from "./slices/appointmentsSlice";
import ordersReducer from "./slices/ordersSlice";
import petsReducer from "./slices/petsSlice";
import productsReducer from "./slices/productsSlice";
import servicesReducer from "./slices/servicesSlice";
import usersReducer from "./slices/usersSlice";
import loginReducer from "./slices/loginSlice";

const rootReducer = combineReducers({
    appointments: appointmentsReducer, 
    orders: ordersReducer,
    pets: petsReducer, 
    products: productsReducer,
    services: servicesReducer, 
    users: usersReducer, 
    login: loginReducer
  });
  
  export default rootReducer;