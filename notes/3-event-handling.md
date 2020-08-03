# Event Handling:

The Difference Between these two is subtle but pretty large, the first is a higher order function that executes when you want it to on click, the second will be executed automatically when the page loads:

`onClick = {() => this . onDismiss ( item . objectID )}`

`onClick = { this.onDismiss ( item . objectID )}`




Basic event handling looks like:

```
{this.state.list.map(item =>
  <div key={item.objectId}>
    <span>
      <a href={item.url}>{item.title}</a>
    </span>
    <span>{item.author}</span>
    <span>{item.num_comments}</span>
    <span>{item.points}</span>
    <span>
      <button
        onClick={() => this.onDismiss(item.objectId)}
        type="button"
      >
        Dimiss
      </button>
    </span>
  </div>
)}
```

You can also assign the function to a variable within the map function and then just pass in the variable, this I assume would be useful when you need to do a bunch of different
```
{this.state.list.map(item => {
  const onHandleDismiss = () => this.onDismiss(item.objectId);

  return (
    <div key={item.objectId}>
      <span>
        <a href={item.url}>{item.title}</a>
      </span>
      <span>{item.author}</span>
      <span>{item.num_comments}</span>
      <span>{item.points}</span>
      <span>
        <button
          onClick={onHandleDismiss}
          type="button"
        >
          Dimiss
      </button>
      </span>
    </div>
  );
})}
```


Callback handlers for communicating back up the tree to different components:
A handler function is ?
A handler function passed from one component to another and used there becomes a callback handler

1. In app component you set the function up
```
const handleSearch = event => {
  console.log(event.target.value);
}
```


2. Pass the callback function into the component as a props
```
<Search onSearch={handleSearch} />
```


3. Pass the event data you need back when you call the function in the child component
```
const handleChange = event => {
  setSearchTerm(event.target.value);
  props.onSearch(event);
}
```

Then we moved the state management back up to the parent most component afterward, since we need to pass it's data to sibiling components. You can see how with large component trees this becomes fairly unmanagable (hence the need for state management libraries like Redux, etc.)

"Always manage the state at a component where every component that’s interested in it is one that either manages the state (using information directly from state) or a component below the managing component (using information from props). If a component below needs to update the state, pass a callback handler down to it (see Search component). If a component needs to use the state (e.g. displaying it), pass it down as props."
