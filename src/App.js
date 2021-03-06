import React from 'react';
import './App.css';

const App = () => {
  const stories = [
    {
      title: 'React',
      url: 'https://reactjs.org/',
      author: 'Jordan Walke',
      num_comments: 3,
      points: 4,
      objectID: 0,
    },
    {
      title: 'Redux',
      url: 'https://redux.js.org/',
      author: 'Dan Abramov, Andrew Clark',
      num_comments: 2,
      points: 5,
      objectID: 1,
    },
  ];

  const welcome = {
    greeting: "My React",
    title: "HN Stories",
  }

  const [searchTerm, setSearchTerm] = React.useState(
    localStorage.getItem('search') || 'React'
  );
  
  React.useEffect(() => {
    localStorage.setItem('search', searchTerm);
  }, [searchTerm]);

  const searchedStories = stories.filter(story => 
    story.title
      .toLowerCase()
      .includes(searchTerm.toLowerCase())
  );

  const handleSearch = event => setSearchTerm(event.target.value);

  return (
    <div>
      <h1> {welcome.greeting} {welcome.title} </h1>
      <Search onSearch={handleSearch} search={searchTerm} />
      <hr />
      <List list={searchedStories} />
    </div>
  )
}


const Item = ({ title, url, author, num_comments, points }) =>
  <div>
    <span>
      <a href={url}>{title}</a>
    </span>
    <span>{author}</span>
    <span>{num_comments}</span>
    <span>{points}</span>
  </div>


const List = ({ list }) => list.map(({ objectID, ...item }) => (<Item key={objectID} {...item} />));


const Search = ({ search, onSearch }) => 
  <div>
    <label htmlFor="search">Search: </label>
    <input
      id="search"
      type="text"
      value={search}
      onChange={onSearch}>
    </input>
    <p>
      Searching for: {search}
    </p>
  </div>

export default App;
