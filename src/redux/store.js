import { 
  createStore,
  combineReducers,
  compose,
  applyMiddleware
} from 'redux';
import thunk from 'redux-thunk';
import notifications from '../reducers/notifications';
import scheduler from '../reducers/scheduler';

const rootReducer = combineReducers({
  notifications,
  scheduler
})

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
export default function generateStore(){
  let store = createStore(
    rootReducer,
    composeEnhancers(applyMiddleware(thunk))    
  )
  return store
}
