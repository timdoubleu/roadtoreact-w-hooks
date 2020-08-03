



onDismiss function here being a handler for a click event
onDismiss(id) {
  // Old school way to do this:
  // const updatedList = this.state.list.filter(function isNotId(item){
  //   return item.objectID !== id;
  // })

  // Step 1 cleanup, extract the function:
  // function isNotId(item) {
  //   return item.objectID !== id;
  // }
  // const updatedList = this.state.list.filter(isNotId)
  
  // Step 2 cleanup, move them both to arrow function
  // const isNotId = item => item.objectID !== id;
  // const updatedList = this.state.list.filter(isNotId);

  // Step 3 merge them into 1 arrow function
  const updatedList = this.state.list.filter(item => item.objectId !== id);
  this.setState({ list: updatedList });
}


Binding in class components:
  You can do it else where but always do it in the constructor of a class component, doing it in the render function will hurt application performance:

  You also could implement business logic in your ondmiss function in the constructor but this is bad practice as you'll end up majorly cluttering you constructor function. Keep it to just the bindings happening in the constructor, and business logic implemented in local functions. The constructor is there to instantiate your class 

  constructor(props) {
    super(props);
    this.onDismiss = this.onDismiss.bind(this);
  }

  Unidirection data flow, the idea of clicking a button and updating state is then the application re-renders, it differs from other frameworks which do one way data binding like Angular (used to at least, newer versions use UDF).
    https://medium.com/@luillyfe/unidirectional-data-flow-vs-two-way-binding-e34f1f08677
    https://stackoverflow.com/questions/34519889/can-anyone-explain-the-difference-between-reacts-one-way-data-binding-and-angula