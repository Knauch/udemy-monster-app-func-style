import { useState } from 'react'
import CardList from './components/card-list/card-list.component';
import SearchBox from './components/search-box/search-box.component';
import './App.css';


const App = () => {
  console.log('render')

  const [searchField, setSearchField] = useState(); //[value, setvalue]
  console.log(searchField)

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

    </div>
  )
}



// class App extends Component {
 
//   constructor() {
//     super();
//     this.state = {
//       monsters: [],
//       searchField: '',
//     }
//     console.log('1-constructor')
//   }
 
//   componentDidMount() {
    
//     console.log('2-componentDidMount')
//     fetch('https://jsonplaceholder.typicode.com/users')
//       .then(response => response.json() )
//       .then( (users) => this.setState( 
//       () => {
//         return {monsters: users}
//       },

//       ))
//   }
 


//   render() {
//   console.log('3-render')

//   const { monsters, searchField } = this.state;
//   const { onSearchChange } =this;
  
//   const filteredList = monsters.filter( (elem) => {
//     return elem.name.toLowerCase().includes(searchField)
//   })
  
  

//   return (
//     <div className="App">

//     <h1 className="app-title">Monster List</h1>

//       
        
//      <CardList 
//       monsters={filteredList}
//       />

//     </div>
//   );
//   }
// }
 
export default App;
