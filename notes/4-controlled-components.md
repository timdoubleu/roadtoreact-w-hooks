# Controlled Components:

  The concept of passing React state values into HTML elements, thereby bascially taking "control" over the html elements.

  It also demonstrates Unidirection Data Flow:
    -> UI (renders with some initial state) 
    -> Side Effect (User clicks something, edits something, apii data returns)
    -> State (State is updated based on the side effect that happened)
    -> UI (Rendering happens again)

  The useEffect hook may seem kind of weird at first, since it makes it look like in the function that is would reset the state on every re-render with the string passed in. React tracks this internally and only renders that value when it is initialized, after that it will take the most recent value.

  `const [searchTerm, setSearchTerm] = React.useState('React');`


  Advanced prop handling:
    Destructuring the props in the function arguments `const Search = ({ search, onSearch }) => `
    You can do it in a nested way, but it introduces a lot of clutter in the argument instead of the function or in the parent component passing it in.
    Instead of passing all the props key/value in expcliity we can take advantage of the rest operator, this becomes useful anytime you are passing a decent amount of props to another component.

    Ends with:

    `const List = ({ list }) => list.map(({ objectID, ...item }) => (<Item key={objectID} {...item} />));`
    `const Item = ({ title, url, author, num_comments, points }) => `


Side effects:

  useEffect hook
  When we setup the useState hook, `const [searchTerm, setSearchTerm] = React.useState('')'` we defined the setSearchTerm value, if you want to have other effects happen when using that for example storing a search term in local storage:

  ```
  const handleSearch = event => {
    setSearchTerm(event.target.value);
    localStorage.setItem('search', event.target.value);
  }
  ```

  You need to basically notify react of the effect you want to happen otherwise calling setSearchTerm in other places won't trigger the localstorage call. useEffect takes two arguments, 1) The function where the side effect occurs and 2) An array of dependancey variables that react will watch and trigger the effect if one changes. If the dependancy is an empty array it calls the side effect only once on page load:

  ```
  const handleSearch = event => {
    setSearchTerm(event.target.value);
    localStorage.setItem('search', event.target.value);
  }
  ```