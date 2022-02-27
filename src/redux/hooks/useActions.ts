import { useDispatch} from 'react-redux';
import { bindActionCreators} from 'redux';
import {actions} from '../actions';

export const useActions = () => {
  return bindActionCreators(actions, useDispatch());
};


