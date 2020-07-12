import { applyMiddleware, createStore } from 'redux'
import thunk from 'redux-thunk'
import {rootReducer} from './index';
import { composeWithDevTools } from 'redux-devtools-extension';

export default function configureStore(preloadedState: any) {
    const middlewareEnhancer = applyMiddleware(thunk)
  
    const enhancers = [middlewareEnhancer]
    const composedEnhancers = composeWithDevTools(...enhancers)
  
    const store = createStore(rootReducer, preloadedState, composedEnhancers)
  
    return store
}