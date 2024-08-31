import './App.css';
import { useState, useEffect } from 'react';
import { Logo } from './components/Logo.jsx';
import { Movies } from './components/Movies.jsx';

//API KEY: f894c396
const API_URL = 'http://www.omdbapi.com?apikey=f894c396';

function App() {

  const searchMovies = async (title) => {
    const response = await fetch(`${API_URL}&s=${title}`);
    const data = await response.json();

    console.log(data.Search);
  }

  useEffect(() => {
    searchMovies('batman');
  }, []);


  const movie1 = {
    "Title": "Batman Begins",
    "Year": "2005",
    "imdbID": "tt0372784",
    "Type": "movie",
    "Poster": "https://m.media-amazon.com/images/M/MV5BOTY4YjI2N2MtYmFlMC00ZjcyLTg3YjEtMDQyM2ZjYzQ5YWFkXkEyXkFqcGdeQXVyMTQxNzMzNDI@._V1_SX300.jpg"
}

  return (
    <>
      <div className='App' style={{rowGap: "40px"}}>
        <Logo></Logo>
        <div style={{display: "flex", alignItems: "center", justifyContent: "center"}}>
          <input type="text" placeholder='Search a movie' style={{height: "47px", width: "500px", fontSize: "20px", paddingInlineStart: "20px", borderRadius: "10px 0 0 10px"}}
          
          onChange={(e) => {}}
          />
          <button style={{height: "50px", width: "50px", borderRadius: "0px 10px 10px 0px", backgroundColor: "#fe7b00"}}
          onClick={(e) => {}}
          ><i class="ri-search-line" style={{fontSize: "27px", fontWeight: "600"}}></i></button>
        </div>
        <Movies movie={movie1}></Movies>
      </div> 
    </>
  );
}

export default App;
