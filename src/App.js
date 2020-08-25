import React from 'react';
import './App.css';
import Row from './Row.js'
import requests from './requests.js'
import Banner from './Banner.js'
import Navbar from './Navbar.js'

function App() {
  return (
    <div className="app">
      <Navbar/>
      <Banner/>
      <Row 
        tittle="Netflix Originals" 
        fetchUrl={requests.fetchNetflixOriginals}
        isLargeRow
      />
      <Row tittle="Trending Now" fetchUrl={requests.fetchTrending}/>
      <Row tittle="Top Rated" fetchUrl={requests.fetchTopRated}/>
      <Row tittle="Action Movies" fetchUrl={requests.fetchActionMovies}/>
      <Row tittle="Comedy Movies" fetchUrl={requests.fetchComedyMovies}/>
      <Row tittle="Horror Movies" fetchUrl={requests.fetchHorrorMovies}/>
      <Row tittle="Romance Movies" fetchUrl={requests.fetchRomanceMovies}/>
      <Row tittle="Documentaries" fetchUrl={requests.fetchDocumentaries}/>
    </div>
  );
}

export default App; 
