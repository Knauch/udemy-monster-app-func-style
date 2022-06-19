import { useState, useEffect } from 'react'
import SearchBox from './components/search-box/search-box.component';
import CardList from './components/card-list/card-list.component.jsx'
import './App.css';


const App = () => {
console.log('App render');

  const [searchField, setSearchField] = useState(''); //[value, setvalue]
  const [monsters, setMonsters] = useState([]); 
  const [filteredList, setFilteredList] = useState([monsters]);

  useEffect(() => {
    console.log('useEffect called')
    fetch('https://jsonplaceholder.typicode.com/users')
    .then( (response) => response.json())
    .then( (users) => setMonsters(users))
  }, []);
 //IF EMPTY ARR then function runs only 1 time!!!!

  useEffect(() => {
    const newFilteredList = monsters.filter( (element)=> {
      return element.name.toLowerCase().includes(searchField)
    } )

    setFilteredList(newFilteredList)
  }, [monsters, searchField]); //when ever [monsters, searchField] is changed

  

  

  const onSearchChange = (event) => {
    const searchFieldString = event.target.value.toLowerCase();
    setSearchField(searchFieldString);
  }

  
  
  return (
    <div className="App">
      <h1 className='app-title'>Monster List</h1>

      <SearchBox 
      onChangeHandler ={onSearchChange}
      placeholder ='search input'
      className='monsters-search-box'
     /> 
      <CardList 
      monsters={filteredList}
      />

    </div>
  )
}



export default App;
