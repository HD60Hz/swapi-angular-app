import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-movies',
  templateUrl: './movies.component.html',
  styleUrls: ['./movies.component.css']
})
export class MoviesComponent implements OnInit {

  // Local storage set-up
  constructor() {
    const dataFromCache = JSON.parse(localStorage.getItem('moviesApiResponse'));
    if (dataFromCache !== null) {
      this.data = dataFromCache;
    }
  }

  data = null;


  getData() {
    return this.data
  }
  
  ngOnInit() {
    this.getMovies();
  }

  getMovies() {
    if (this.getData()) {
      return;
    };

    fetch(`https://swapi.co/api/films`)
      .then(response => response.json())
      .then(responseJson => {
        this.data = responseJson;
        console.log(this.data)

        // Pushing data to localStorage
        localStorage.setItem('movieSwapiResponse', JSON.stringify(this.data));
      })


  }
  
  
}
