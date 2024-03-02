import { useState } from 'react';
import * as Styled from '../styled/components';
import { VscSearch } from 'react-icons/vsc';


export default function SearchBar(){
  const [textInput, setTextInput] = useState('');

  const handleSubmit = () => {
    console.log('search');
  };

  return(
    <Styled.SearchBar>
      <input id='searchCoins'
        className='input-field'
        type='text'
        placeholder='Search'
        value={textInput}
        onChange={(e) => setTextInput(e.target.value)}
        onKeyUp={(e) => (e.key === 'Enter' ? handleSubmit() : null)}
      />
      <button onClick={() => handleSubmit()} className='search-btn'>
        <VscSearch fontSize={19} color='white' />
      </button>
  </Styled.SearchBar>
  )
}