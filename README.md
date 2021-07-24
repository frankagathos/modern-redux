# Modern Redux 

Simplified examples of modern redux in action.
### Clean architecture simplified

Separate the app into three folders:

 - Application : contains business logic, redux store. 
 - Infrastructure : contains apis 
 - Presentation : contains React components
## Useful links

- [Redux Style Guide](https://redux.js.org/style-guide/style-guide)
- ["ducks" pattern](https://github.com/erikras/ducks-modular-redux)

## Quick setup for your projects

- install redux , react-redux and redux-toolkit 
- create a redux store with one creator, one reducer and one selector (we can use a duck style of writing: https://github.com/erikras/ducks-modular-redux)
  - Store is default export
  - Action creators , selectors are exports
- wrap the application with a component Provider passing the store exported from the store
- Optionally install redux-logger for logging redux in the console.



## Example 1 
- simple state update. 
## Example 2
- async data fetching
### `npm start` in your console to start dev env

