import { createStore, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import rootReducer from './reducer.js';
import { composeWithDevTools } from "redux-devtools-extension";
import { persistStore, persistReducer } from 'redux-persist';
import storage from 'redux-persist/lib/storage'; // default: localStorage if web, AsyncStorage if react-native

// Configuración de Redux Persist
const persistConfig = {
  key: 'root',
  storage,
  // Puedes configurar opciones adicionales aquí, como el blacklist o whitelist de reducer keys
};

const persistedReducer = persistReducer(persistConfig, rootReducer);

// Crear el store con Redux Persist middleware
const store = createStore(
  persistedReducer,
  composeWithDevTools(applyMiddleware(thunk))
);

// Configuración de persistencia
const persistor = persistStore(store);

export { store, persistor };