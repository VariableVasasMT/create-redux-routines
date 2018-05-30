import { isString, isObject, isFunction, isUndefined } from "./utils";
import { getLoadingActions, createSyncActions } from "./createActions";
import flatten from "./helpers/flatCombineReducer";

const attachReducerToKey = (reducer, key, actionTypes = []) => {
  if (!isString(key)) {
    const e = new Error("Expected key to be a string.");
    throw e;
  }
  return (state = {}, action) => {
    if (actionTypes.includes(action.type)) {
      return {
        ...state,
        [key]: reducer(state[key], action)
      };
    } else {
      return state;
    }
  };
};

const getReducer = (actionType, { key, initialState = {}, processor } = {}) => {
  const { FULLFILL }  = createSyncActions( actionType )
  const defaultReducer = (state = initialState, action) => {
    switch (action.type) {
      case FULLFILL:
      case `${actionType(action)}`:
        return processor
          ? processor(state, action)
          : !isUndefined(action.payload)
            ? {
                ...state,
                ...action.payload
              }
            : {};
      default:
        return state;
    }
  };
  if (key) {
    const strActionType = actionType();
    return attachReducerToKey(defaultReducer, key, [strActionType]);
  }
  return defaultReducer;
};

const processAsyncData = ({ stateData, data }) => {
  if (isUndefined(stateData)) {
    return data;
  } else if (isObject(stateData) && isObject(data)) {
    return {
      ...stateData,
      ...data
    };
  } else if (Array.isArray(stateData) && Array.isArray(data)) {
    return [...stateData, ...data];
  }
  return data;
};

class CreateReducer{
  constructor( actionTypes, options = {}, customError ) {
    this.reducers = this.createReducers( actionTypes, options );
    this.customError = customError || this.customError;
  }

  customError = ( error ) => { return error; }

  getAsyncReducer = (
    actionType,
    { key, initialState = {}, processor, merge = true }
  ) => {
    initialState = {
      isLoading: false,
      loaded: false,
      hasError: false,
      ...initialState
    };
    if (processor)
      throw new Error("processor option will not work with async option");
    if (isFunction(actionType))
      throw new Error("actionType must be a string when using async option");

    const { LOADING, SUCCESS, FAIL, RESET, FULLFILL } = getLoadingActions(actionType);

    const defaultAsyncReducer = (state = initialState, action) => {
      let { data, error, ...rest } = action.payload || {};
      let { payload: userData = {}, loadingData } = action.meta || {};
      switch (action.type) {
        case LOADING:
          return {
            ...state,
            isLoading: true,
            loaded: false,
            hasError: false,
            loadingData: loadingData,
            error: undefined
          };
        case SUCCESS:
          return {
            ...state,
            isLoading: false,
            loaded: true,
            loadingData: undefined,
            data: merge
              ? processAsyncData({ stateData: state.data, data })
              : data,
            hasError: false,
            error: undefined,
            ...rest
          };
        case FAIL:
          return {
            ...state,
            isLoading: false,
            loaded: true,
            data: undefined,
            loadingData: undefined,
            hasError: true,
            error: {
              ...this.customError(error),
              payload: userData
            },
            ...rest
          };
        case FULLFILL:
          return {
            ...state,
            isLoading: false,
            loaded: true
          }
        case RESET:
          return {
            isLoading: false,
            loaded: false,
            data: undefined,
            hasError: false,
            error: undefined,
            loadingData: undefined
          };
        default:
          return state;
      }
    };

    return key
      ? attachReducerToKey(defaultAsyncReducer, key, [ LOADING, SUCCESS, FAIL, FULLFILL ])
      : defaultAsyncReducer;
  };

  handleActionType = (actionType, initialState) => {
    if (isObject(actionType)) {
      const {
        name,
        options: { key = null, async = false, processor, merge } = {}
      } = actionType;
      actionType = isString(name) ? () => name : name;
      return async
        ? this.getAsyncReducer(name, { key, initialState, processor, merge })
        : getReducer(actionType, { key, initialState, processor });
    } else if (isString(actionType)) {
      return getReducer(() => actionType, initialState);
    } else if (isFunction(actionType)) {
      return getReducer(actionType, initialState);
    }
  };

  createReducers = (
    actionTypes,
    { initialState = {}, resetActionType } = {}
  ) => {
    if (Array.isArray(actionTypes)) {
      const allReducers = actionTypes.reduce((reducers, actionType) => {
        reducers.push(this.handleActionType(actionType, initialState));
        return reducers;
      }, []);
      return flatten(allReducers, { resetActionType, initialState });
    }
    if (resetActionType)
      throw new Error(
        "Reset functionality will only work with multiple reducers."
      );
    return this.handleActionType(actionTypes, initialState);
  };
}

export default CreateReducer;
