import React from 'react'
import InputGroup from './InputGroup'

const SearchBar = ({action}) => {
  return (
    <>
    <InputGroup
    labelText="Buscar"
    action={action}
    inputId="search_input"
    error=""
    placeholder="Buscar pelicula"
    id="search_bar"
    />
      
    </>
  )
}

export default SearchBar