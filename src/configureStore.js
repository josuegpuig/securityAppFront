import storage from 'redux-persist/es/storage'
import { apiMiddleware } from 'redux-api-middleware';
import { applyMiddleware, compose, createStore } from 'redux'
import { createFilter   } from 'redux-persist-transform-filter';
import { persistReducer, persistStore } from 'redux-persist'
import { routerMiddleware } from 'connected-react-router'
import { history } from "./history";

import createRootReducer from './reducers'

export default function configureStore(preloadedState) {
  const persistedFilter = createFilter(
    'auth', ['access', 'refresh']);

  const reducer = persistReducer(
    {
      key: 'polls',
      storage: storage,
      whitelist: ['auth'],
      transforms: [persistedFilter]
    },
    createRootReducer)
    
  const store = createStore(
    reducer, 
    preloadedState,
    compose(
      applyMiddleware(
        apiMiddleware, 
        routerMiddleware(history)
      )
    )
  )

  persistStore(store)
  return store
}