import {SearchPackages, SearchPackagesSuccess, SearchPackagesError} from '../interfaces';
import {reducers} from '../reducers';

export type Action = SearchPackages | SearchPackagesSuccess | SearchPackagesError;
export type RootState = ReturnType<typeof reducers>;
