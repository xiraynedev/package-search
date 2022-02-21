import {combineReducers} from 'redux';
import {ActionType} from '../enums';
import {Action} from '../types';
import {PackageState} from '../interfaces';

const initialState: PackageState = {
  loading: false,
  error: '',
  data: [],
};

const packageReducer = (state = initialState, action: Action): PackageState => {
  switch (action.type) {
    case ActionType.SEARCH_PACKAGES:
      return {loading: true, error: '', data: []};
      break;
    case ActionType.SEARCH_PACKAGES_SUCCESS:
      return {loading: false, error: '', data: action.payload};
      break;
    case ActionType.SEARCH_PACKAGES_ERROR:
      return {loading: false, error: action.payload, data: []};
      break;
    default:
      return state;
  }
};

export const reducers = combineReducers({
  packageReducer,
});
