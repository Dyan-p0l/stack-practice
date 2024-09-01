import './App.css';
import { useState, useEffect } from 'react';
import { Logo } from './components/Logo.jsx';
import { Movies } from './components/Movies.jsx';

//API KEY: f894c396
const API_URL = 'http://www.omdbapi.com?apikey=f894c396';

function App() {

  document.addEventListener('keydown', (e) => {
    if (e.key === 'Enter') {
      document.getElementById('js-button-search').click();
    }
    
  })
  const [movies, setMovies] = useState([]);
  const [searchTerm, setSearchTerm] = useState('');

  const searchMovies = async (title) => {
    const response = await fetch(`${API_URL}&s=${title}`);
    const data = await response.json();

    setMovies(data.Search);
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
          value={searchTerm}
          onChange={(e) => {setSearchTerm(e.target.value)}}
          />
          <button className='button-search' id='js-button-search' style={{height: "50px", width: "50px", borderRadius: "0px 10px 10px 0px", backgroundColor: "#fe7b00"}}
          onClick={() => searchMovies(searchTerm)}
          ><i className="ri-search-line" style={{fontSize: "27px", fontWeight: "600"}}></i></button>
        </div>

        <div className='container-movies'>
          {
            movies?.length > 0 ? movies.map((movie) => <Movies moviename={movie}/>)
            : 
            (<div className='empty'><h2 style={{color: "#ffffff"}}>NO MOVIES FOUND!</h2></div>) 
          }
        </div>
        
      </div> 
    </>
  );
}

export default App;
