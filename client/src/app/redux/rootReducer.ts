import { combineReducers } from 'redux';
import {QuestReducer} from '../../components/Quest/reducer/questReducer';
import { SignReducer } from '../../components/Sign/reducer/signReducer';
 

const rootReducer = combineReducers({
  quest: QuestReducer,
  users: SignReducer,
});

export default rootReducer;