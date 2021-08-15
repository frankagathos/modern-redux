# Modern Redux Examples 

Examples of modern redux in action.
### Clean architecture simplified

Optionally structure dirs in your app into three folders:

 - Application : contains business logic, redux store. 
 - Infrastructure : contains apis 
 - Presentation : contains React components
 
 This architecture comes with great benefits such as separation of concerns and scalability. 
## Useful links

We also try to follow below style of writing code.

- [Redux Style Guide](https://redux.js.org/style-guide/style-guide)
- ["ducks" pattern](https://github.com/erikras/ducks-modular-redux)

## Examples (Classic Redux) 
- simple state update. [Message] (https://github.com/frankagathos/modern-redux/blob/main/src/presentation/components/Msg.js) 
- async thunk data fetching   [Country capital] (https://github.com/frankagathos/modern-redux/blob/main/src/presentation/components/Country.js)
## Examples (Modern Redux) 
- state update in modern Redux  [Theme](https://github.com/frankagathos/modern-redux/blob/main/src/presentation/components/Theme.js) 
- async thunk data fetching example in modern Redux [Cat image]  (https://github.com/frankagathos/modern-redux/blob/main/src/presentation/components/Cat.js)
### `npm start` in your console to start dev env