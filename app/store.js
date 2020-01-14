import { createStore, applyMiddleware, compose } from "redux";
import { persistStore, persistCombineReducers } from "redux-persist";
import { AsyncStorage } from 'react-native';
import thunk from "redux-thunk";
import reducers from "./reducers";

const config = {
  key: "root",
  storage: AsyncStorage,
  blacklist: ["status"]
};

const reducer = persistCombineReducers(config, reducers);

const middleware = [thunk];

const configureStore = () => {
  const store = createStore(
    reducer,
    window.__REDUX_DEVTOOLS_EXTENSION__ &&
      window.__REDUX_DEVTOOLS_EXTENSION__(),
    compose(applyMiddleware(...middleware))
  );

  const persistor = persistStore(store, null, () => {
    store.getState();
  });

  return { persistor, store };
};

export default configureStore;
