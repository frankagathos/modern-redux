# Modern Redux 

Separate the app into three folders:

 - application : contains redux store 
 - infrastructure : contains apis
 - presentation : contains our components

## Step 1

- install redux and react-redux 
- create a redux store with one creator, one reducer and one selector (we can use a duck style of writing: https://github.com/erikras/ducks-modular-redux)
  - Store is default export
  - action creators , selectors are exports
- wrap the application with a component Provider passing the store exported from the store

## Step 2 

- install redux-toolkit

1) wrap the store with configureStore function to add redux-thunk for async actions and redux-dev-tools

### `npm start`

