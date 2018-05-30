# create-redux-routines

```
import { getLoadingActions } from 'create-redux-routines/createActions'
const { LOADING, SUCCESS, FAIL, RESET, FULLFILL } = getLoadingActions( "FETCH_INIT_DATA" );

FAIL: "FETCH_INIT_DATA_FAIL",
LOADING: "FETCH_INIT_DATA",
SUCCESS: "FETCH_INIT_DATA_SUCCESS",
TRIGGER: "FETCH_INIT_DATA_TRIGGER"
FULLFILL: "FETCH_INIT_DATA_FULLFILL",
```


```
import ReduxObject from 'create-redux-routines'
var reduxObject = new ReduxObject([
  {
    name: 'FETCH_INIT_DATA',
    options: { async: true }
  },
  {
    name: 'UPDATE_MODULE_STATE',
    options: {
      key: "moduleState"
    }
  },
  {
    name: 'UPDATE_SECTIONS',
    options: {
      key: "sections"
    }
  },
  {
    name: 'UPDATE_LEVELS',
    options: {
      key: "levels"
    }
  },
  {
    name: 'UPDATE_TASKS',
    options: {
      key: "tasks"
    }
  },
  {
    name: 'MANIPULATE_DATA',
    options: {
      key: "operationStatus",
      async: true
    }
  },
  {
    name: 'MIXPANEL',
    options: {
      key: "mixpanel"
    }
  }
]);
```
gets you 
![alt text](https://i.imgur.com/EcMHW5n.png)


Options:

```
var reduxObject = new ReduxObject([{
  name: 'FETCH_INIT_DATA',
  options: { 
    async: true,
    merge: false 
  }
},{
  name: 'GET_INFO',
  options: { 
    async: true,
    merge: false,
    key: 
  }
}])
```
this is will return

```
ReduxObject: {
  actions: {
    FETCH_INIT_DATA: {
      FAIL: "FETCH_INIT_DATA_FAIL",
      LOADING: "FETCH_INIT_DATA",
      SUCCESS: "FETCH_INIT_DATA_SUCCESS",
      TRIGGER: "FETCH_INIT_DATA_TRIGGER",
      FULLFILL: "FETCH_INIT_DATA_FULLFILL",
      fail: (error = {}, meta = {}) => {
        return {
          type: FAIL,
          payload: error.error ? error : { error },
          meta
        };
      },
      success: (data = {}, meta) => {
        return {
          type: SUCCESS,
          payload: {
            ...data
          }, meta
        };
      },
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
      },
      loading: (payload, meta) => {
        return {
          type: actionType,
          payload: payload,
          meta: meta
        }
      }
    },
    GET_INFO: {
      FAIL: "GET_INFO_FAIL",
      LOADING: "GET_INFO_DATA",
      SUCCESS: "GET_INFO_SUCCESS",
      TRIGGER: "GET_INFO_TRIGGER",
      FULLFILL: "GET_INFO_FULLFILL",
      fail: (error = {}, meta = {}) => {
        return {
          type: FAIL,
          payload: error.error ? error : { error },
          meta
        };
      },
      success: (data = {}, meta) => {
        return {
          type: SUCCESS,
          payload: {
            ...data
          }, meta
        };
      },
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
      },
      loading: (payload, meta) => {
        return {
          type: actionType,
          payload: payload,
          meta: meta
        }
      }
    }
  },
  reducers: (state = initialState, action) => {
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
            data: data,
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
}
```
