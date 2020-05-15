1. What problem does the context API help solve?

The context API aims to solve the problem of prop drilling. It enables us to store data on the context object and pass it to the components that need it.

1. In your own words, describe `actions`, `reducers` and the `store` and their role in Redux. What does each piece do? Why is the store known as a 'single source of truth' in a redux application?

In Redux, the store is the central hub for all the state of an App. The state is stored as an object and is immutable. Actions are objects that enable data to be sent to the store, using `dispatch`. Actions come with a `type` property that detail what state will change, and a `payload` property that carries the actual data being changed. This is passed through to the reducer. The reducer takes in the state and the action to return a new state to be passed into the store, which will make the necessary changes to the data.

1. What is the difference between Application state and Component state? When would be a good time to use one over the other?

Application state is global and accessible to all components. Component state, on the other hand, is usually stored locally and only accessible to that component (and its child components, if passed through as props). If there is a lot of complex state change, it may be better to utilize a framework like Redux to manage state. For smaller state changes, structuring components with its own state will be sufficient. (don't make things more complicated than necessary)

1. Describe `redux-thunk`, what does it allow us to do? How does it change our `action-creators`?

Redux Thunk allows us to make the action to reducer flow asynchronous. Through the use of a middleware, we can make asynchronous calls to an API. The thunk will intercept the data and dispatch the action.

1. What is your favorite state management system you've learned and this sprint? Please explain why!

Initially, Redux was intimidating with the all the changes in how state in React applications was structured. After understanding props from Vanilla React, this new framework was a lot to take in. After building things withRedux, I became more familiar and appreciative of how its structure changed how I organized React Applications. I can see myself using Redux when necessary, like building things that require complex state management. In this regard, Redux is straightforward and very organized.
