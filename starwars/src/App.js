import React, {useState, useEffect} from 'react';
import styled from 'styled-components'
import axios from 'axios';
import './App.css';
import Character from './components/Character'
import Search from './components/Search'



const App = () => {
  // Try to think through what state you'll need for this app before starting. Then build out
  // the state properties here.
  const FlexContainer = styled.div`
  display: flex;
  flex-flow: wrap;
  justify-content: space-around;
 `

  const [characters, setCharacters] = useState([])
  const [searchTerm, setSearchTerm] = useState('')

  const filterCharacters = characters => {
    return characters.filter(character => {
      if(!searchTerm){
        return character
      } else if (character.name.toLowerCase().includes(searchTerm.toLowerCase())){

      }
    })
  }
  // Fetch characters from the API in an effect hook. Remember, anytime you have a 
  // side effect in a component, you want to think about which state and/or props it should
  // sync up with, if any.
  useEffect(() => {
    axios.get(`https://rickandmortyapi.com/api/character/`)
      .then(response => {
        setCharacters(response.data.results)
      })
      .catch(error => {
        debugger
      })
  }, [])

  return (
    <div className="App">
      <h1 className="Header">Characters</h1>
      <Search setSearchTerm = {setSearchTerm}/>
      <FlexContainer>
        {characters.map(character => {
          return (
            <Character key = {character.id} name = {character.name} species = {character.species} status = {character.status} image = {character.image}/>
          )
        })}
      </FlexContainer>
    </div>
  );
}

export default App;
