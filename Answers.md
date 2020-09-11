1. What problem does the context API help solve?

Context API helps to prevent from prop drilling global data that we have to use or share with alot of components or when we have to pass data throught intermediate components

1. In your own words, describe `actions`, `reducers` and the `store` and their role in Redux. What does each piece do? Why is the store known as a 'single source of truth' in a redux application?

-actions tells the reducer how to change th state using type property, and payload.

-reducers is a function that returns some state data.

-Store are object that holds the application state data

1. What is the difference between Application state and Component state? When would be a good time to use one over the other?
We can use application state when we have to use a lot of data, App state means its global data any comp can have acceess to wehre comp state is local to that componenet.

1. Describe `redux-thunk`, what does it allow us to do? How does it change our `action-creators`?
redux-thunk allows us to use middleware that will help us to write action creaters that return a function instead of an action.

1. What is your favorite state management system you've learned and this sprint? Please explain why!
I like context API the best, seems the simplest and i bleive has more abilitys then most beleive. 