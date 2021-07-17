import{ createStore,  compose} from 'redux';
import reducers from './reducers';

let loginStatus=()=>{
    if(sessionStorage.getItem('token') && (typeof sessionStorage.getItem('token')!=='undefined'))
    {
      return true;
    }
    else
    {
      return false;
    }
  }
  let loginDetail=()=>{
    return sessionStorage.getItem('user')?sessionStorage.getItem('user'):null;
  }
  const initialStates = {
    auth: {
      loggedIn: loginStatus(),
      user: loginDetail()
    }
  };

const store = createStore(
    reducers,
    initialStates,
    window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
);

export default store;