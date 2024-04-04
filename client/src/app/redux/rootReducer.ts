import { combineReducers } from 'redux';
import {QuestReducer} from '../../components/Quest/reducer/questReducer';
// import { AuthReducer } from '../../components/Auth/AuthReducer';
 

const rootReducer = combineReducers({
  quest: QuestReducer,
  // user: AuthReducer
});

export default rootReducer;