# React crash course

This is the work of "Traversy Media" from youtube. Video found here [https://www.youtube.com/watch?v=w7ejDZ8SWv8](https://www.youtube.com/watch?v=w7ejDZ8SWv8)

*Unless otherwise noted, all content below will either be quotes or synopsis from slides and audio in the tutorial video.*

#### To install:

#### To run:

# Notes

React is a JS library for building user interfaces". It's also basically a frontend framework.

* SPA (Single Page App)
* Can be used to build full stack apps by communicating with a server/API (eg. MERN stack -> mongodb (database), express (a backend framework), react (a frontend framework), node.js (a javascript runtime))
  * React is only front-end but it can be combined with other technologies to create a fullstack application.

### So why would we want to use React?

It allows us to structure the "view" layer of the MVC design pattern for our applications.

* Model
  * Deals with data
* View
  * The UI
* Controller
  * Requests and routing

React allows you to build your UI with reusable components that carry their own state. Every part of the user interface is a component that can hold its own data. We don't have to separate our markup from our logic because React uses the "JavaScript Syntax Engine" or `JSX`.

#### JSX

We can use this to write dynamic HTML. It is technically JS but it's formatted like HTML. We can even embed JS expressions, variables, etc.

#### Virtual DOM

Allows you to update parts of the page that need to be updated without reloading. So let's say you have a list of tasks and you want to delete one of them, you don't have to relad the page because it will handle it. For example, if you delete something from a list using HTML, for each delete you will need to refresh the page, but with this the elements update. This makes things much faster.

#### One-way data binding

The state data is immutable in React. You can't change the data in your state directly. React provides ways for you to recreate your state every time that it needs to be changed.


## UI Components

Imagine your UI is a set of components. Everything from an input box to a form as a whole to a button to a header are all individual components.

### Functions vs. Classes

```js
// A component called header that returns a div containing an H1
export const Header = () => {
  return (
    <div>
      <h1>My Header</h1>
    </div>
  }
}
```

```js
// This is the same component as above, but as a class.
// We are extending the React.Component class so we have access to everything in the React.Component class
export default class Header extends React.Component {
  // We can call render() because we extend React.Component
  render() {
    return (
      <div>
        <h1>My Header</h1>
      </div>
    )
  }
}
```

* Components render and return `JSX` (JavaScript Syntax Extension).
  * So it looks like HTML, but in reality its syntactic sugar. This is great because we can put JS expressions directly into the html to make it dynamic.

Once you have your component created you can embed it into other components using the syntax like below:

```HTML
<Header title="My Title" />
```

* Components can also take in "props" or properties.
  * In the above the above example `title="My Title"` is a property being passed in like an attribute.


### Working with State

* Components can have "state" which is an object that determines how a component renders and behaves.
* `App` or `global` state refers to state that is available to the entire UI, not just a single component.
  * Sometimes you want to share your data across multiple components. In that situation you can use `app` or `global` state.
    * However, this can sometimes lead to an overwhelming amount of global (or app-level) state to manage. When that happens you could:
      * [Use the `Context` API](https://reactjs.org/docs/context.html) that is provided with React.
      * Use a 3rd party app like [Redux](https://redux.js.org/tutorials/fundamentals/part-1-overview)
* Prior to React 16.8, we had to use class-based components to use state. Now we can use functional components with `hooks`.
  * Functional components used to be called "dumb components" because they couldn't hold state. But, with the introduction of `hooks`, we are able to use state and other lifecycle functions within function components.

#### React Hooks

**React Hooks** are functions that let us `hook` into the `React` state and lifecycle features from function components.

* `useState`
  * Returns a stateful value and a function to update it.
* `useEffect`
  * Perform side effects in function components
    * One of the most common reasons for using `useEffect` is actually making an `http request` for data when the page loads.
* `useContext`, `useReducer`, and `useRef` are beyond the scope of this crash course.

***You can also create your own custom hooks!***
