import { isString, isObject } from "./utils";

export const SyncActionsSuffix = {
  TRIGGER: "_TRIGGER",
  FULLFILL: "_FULLFILL"
}

export const LodingActionSuffix = {
  SUCCESS: "_SUCCESS",
  FAIL: "_FAIL",
  ...SyncActionsSuffix
};

export const createSyncActions = actionType => {
  const {   TRIGGER, FULLFILL } = SyncActionsSuffix;
  return {
    TRIGGER: `${actionType}${TRIGGER}`,
    FULLFILL: `${actionType}${FULLFILL}`
  }
}

export const getLoadingActions = actionType => {
  const { SUCCESS, FAIL, TRIGGER, FULLFILL } = LodingActionSuffix;
  return {
    SUCCESS: `${actionType}${SUCCESS}`,
    FAIL: `${actionType}${FAIL}`,
    LOADING: actionType,
    ...createSyncActions( actionType )
  };
};

export const createSyncActionFunctions = actionType => {
  const { TRIGGER, FULLFILL } = createSyncActions( actionType );
  return {
    trigger: ( data = {}, meta ) => {
      return {
        type: TRIGGER,
        meta
      }
    },
    fullfill: ( data = {}, meta ) => {
      return {
        type: FULLFILL,
        meta
      }
    }
  };
}
export const createSuccessAction = actionType => {
  return (data = {}, meta) => {
    const { SUCCESS } = getLoadingActions(actionType);
    return {
      type: SUCCESS,
      payload: {
        ...data
      },
      meta
    };
  };
};

export const createFailAction = actionType => {
  return (error = {}, meta = {}) => {
    const { FAIL } = getLoadingActions(actionType);
    return {
      type: FAIL,
      payload: error.error ? error : { error },
      meta
    };
  };
};

const generateAction = (actionType, { async = false } = {} ) => {
  const defaultAction = (payload, meta) => {
    return {
      type: actionType,
      payload: payload,
      meta: meta
    };
  };

  const syncActions = {};
  
  if (async) {
    const successAction = createSuccessAction(actionType);
    const failAction = createFailAction(actionType);
    return {
      LOADING: defaultAction,
      SUCCESS: successAction,
      FAIL: failAction
    };
  }
  return defaultAction;
};

export const generateActionsAndFunctions = (actionType, { async = false } = {} ) => {
  const {
    SUCCESS,
    FAIL,
    LOADING,
    TRIGGER,
    FULLFILL
  } = getLoadingActions( actionType );

  let syncActions = {
    TRIGGER,
    FULLFILL,
    ...createSyncActionFunctions( actionType )
  }

  if( async ){
    const { 
      LOADING: loading, 
      SUCCESS: success, 
      FAIL: fail
    } = generateAction( actionType, { async } );

    syncActions = {
      ...syncActions,
      SUCCESS,
      FAIL,
      LOADING,
      success,
      fail,
      loading
    }
  }

  return syncActions;
}

const handleActionType = actionType => {
  if (isObject(actionType)) {
    const { name, options: { async = false } = {} } = actionType;
    return generateAction(name, { async });
  } else if (isString(actionType)) {
    return generateAction(actionType);
  }
};

export const getActions = actionTypes => {
  if (Array.isArray(actionTypes)) {
    return actionTypes.reduce(
      ( actions, actionType ) => {
        actions.push(handleActionType(actionType));
        return actions;
      }, []
    );
  }
  return handleActionType(actionTypes);
};

const getActionName = actionType => {
  if (isObject(actionType)) {
    const { name, options: { async = false } = {} } = actionType;
    return [ name, { async } ];
  } else if (isString(actionType)) {
    return [ actionType ];
  }
}

export const getActionObjects = ( actionTypes ) => {
  if( Array.isArray( actionTypes ) ){
    const actionObjects = {};
    actionTypes.reduce(
      ( object, action ) => {
        const actionArray = getActionName( action )
        return actionObjects[ actionArray[0] ] = generateActionsAndFunctions( ...actionArray );
      }, {}
    );

    return actionObjects;
  }
}

export default getActions;
