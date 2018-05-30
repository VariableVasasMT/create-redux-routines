import CreateReducers from './src/createReducers';
import { getActionObjects, getLoadingActions } from './src/createActions';

class ReduxObject extends CreateReducers {
  constructor( actionTypes, options, customError ){
    super( actionTypes, options, customError );
    this.actions = getActionObjects( actionTypes ); 
  }
}

window.ReduxObject = ReduxObject;

export * from './src/createActions';
export * from './src/createReducers';
export default ReduxObject;