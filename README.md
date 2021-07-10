# Modern Redux - General guidance

we will separate the app into three folders 

application : contains redux store 
infrastructure : contains our apis
presentation : contains our components

# Redux level 1

1) install redux and react-redux 
2) create a redux store with one creator, one reducer and one selector
  - Store is default export
  - action creators , selectors should be exported 
3) wrap the application with Provider passing the store

## Redux level 2 


### `npm start`

