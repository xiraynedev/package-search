import axios from 'axios';
import {ActionType} from '../enums';
import {Action} from '../types';
import {Dispatch} from 'redux';

const searchPackages = (searchTerm: string) => {
  return async (dispatch: Dispatch<Action>) => {
    dispatch({
      type: ActionType.SEARCH_PACKAGES,
    });

    try {
      const {data} = await axios.get(`https://registry.npmjs.org/-/v1/search?text=${searchTerm}`);

      const names = data.objects.map((result: any) => {
        return result.package.name;
      });

      dispatch({
        type: ActionType.SEARCH_PACKAGES_SUCCESS,
        payload: names,
      });
    } catch (error: any) {
      dispatch({
        type: ActionType.SEARCH_PACKAGES_ERROR,
        payload: error.message,
      });
    }
  };
};

export const actions = {
  searchPackages,
};