# order-food-
for  state variables you should put the declaration on the top. and dont use inside if() or any funvction as it can cause inconcistency in the code 

whenever the state variable updates, react triggers a re-conciliation cycle (re-renders the components )

#Routing in web apps are of two types 
    
     - client side routing 
     - server side routing

 # Redux-toolkit 
 - install @reduxjs/toolkit and react-redux libraries
 -build our store 
 -connect the store to our app
 - create Slice (Cartsslice) and add that slice to the store
 -dispatch (action)
 - selector to subscribe component with cartslice

 # Types of Testing for developers
  - unit testing
  -integration testing
  -end to end testing 

# Setting up testing for our app
 -intsall react testing library
 -install jest (using babel) as we have used bable 
 -installed babel dependencies 
 -configured  bable
 -configure parcel config file to disable the default bable transpilation
 - configure jest => npx  jest --init
 -install jsdom library