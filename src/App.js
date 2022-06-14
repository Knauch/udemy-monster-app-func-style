import { useState, useEffect } from 'react'
import SearchBox from './components/search-box/search-box.component';
import CardList from './components/card-list/card-list.component.jsx'
import './App.css';


const App = () => {


  const [searchField, setSearchField] = useState(''); //[value, setvalue]
  const [monsters, setMonsters] = useState([]); 

  useEffect(() => {
    fetch('https://jsonplaceholder.typicode.com/users')
    .then( (response) => response.json())
    .then( (users) => setMonsters(users))
  }, [])
 //IF EMPTY ARR then function runs only 1 time!!!!

  const filteredList = monsters.filter( (element)=> {
    return element.name.toLowerCase().includes(searchField)
  } )

  console.log('filteredList', filteredList)

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
