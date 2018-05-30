import CreateReducers from './src/createReducers';
import { getActionObjects } from './src/createActions';

class ReduxObject extends CreateReducers {
  constructor( actionTypes, options, customError ){
    super( actionTypes, options, customError );
    this.actions = getActionObjects( actionTypes ); 
  }
}

window.ReduxObject = ReduxObject;
export default ReduxObject;