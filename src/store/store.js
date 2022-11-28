import { compose, createStore, applyMiddleware } from "redux"
import logger from "redux-logger";
import storage from 'redux-persist/lib/storage'
import { persistStore, persistReducer } from "redux-persist"
import { rootReducer } from "./root-reducer";
// import thunk from "redux-thunk"
import { rootSaga } from "./root-saga";
import createSagaMiddleware from "redux-saga";
const persistConfig = {
    key: 'root',
    storage,
    whitelist: ['cart']
}
const composeEnhancer =
  (process.env.NODE_ENV !== 'production' &&
    window &&
    window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__) ||
  compose;
  
const sagaMiddleware = createSagaMiddleware()
const persistedReducer = persistReducer(persistConfig, rootReducer)

const middleWares = [process.env.NODE_ENV !== "production" && logger, 
sagaMiddleware
//thunk
].filter(Boolean)

const composeEnhancers = composeEnhancer(applyMiddleware(...middleWares))

export const store = createStore(persistedReducer, undefined, composeEnhancers)

sagaMiddleware.run(rootSaga)

export const persistor = persistStore(store);