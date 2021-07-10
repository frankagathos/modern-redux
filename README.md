# Modern Redux 

Separate the app into three folders:

 - application : contains redux store 
 - infrastructure : contains apis
 - presentation : contains our components

## Quick setup for projects

- install redux , react-redux and redux-toolkit 
- create a redux store with one creator, one reducer and one selector (we can use a duck style of writing: https://github.com/erikras/ducks-modular-redux)
  - Store is default export
  - action creators , selectors are exports
- wrap the application with a component Provider passing the store exported from the store
- Optionally install redux-logger for logging redux in the console.
## Example 1 

- no async , simple state update. 


### `npm start` in your console to start dev env

