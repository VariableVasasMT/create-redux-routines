# create-redux-routines

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
