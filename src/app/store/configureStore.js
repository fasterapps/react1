import { createStore, applyMiddleware } from "redux";
import { composeWithDevTools } from "redux-devtools-extension";


import rootReducer from "../../app/reducers/rootReducer";

export const configureStore = preloadedstate => {
  const middlewares = [];

  const middlewareEnhancer = applyMiddleware(...middlewares);

  const storeEnhancers = [middlewareEnhancer];

  const composedEnhancer = composeWithDevTools(...storeEnhancers);

  const store = createStore(rootReducer, preloadedstate, composedEnhancer);

  if(process.env.NODE !== 'production') {
      if (module.hot) {
          module.hot.accept('../reducers/rootReducer', () =>{
            const newRootReducer = require('../reducers/rootReducer').default;
            store.replaceReducer(newRootReducer);

          })
      }
  }

  return store;
};
