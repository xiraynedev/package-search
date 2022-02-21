import {ActionType} from '../enums';

export interface SearchPackages {
  type: ActionType.SEARCH_PACKAGES;
}

export interface SearchPackagesSuccess {
  type: ActionType.SEARCH_PACKAGES_SUCCESS;
  payload: string[];
}

export interface SearchPackagesError {
  type: ActionType.SEARCH_PACKAGES_ERROR;
  payload: string;
}

export interface PackageState {
  loading: boolean;
  error: string;
  data: string[];
}
