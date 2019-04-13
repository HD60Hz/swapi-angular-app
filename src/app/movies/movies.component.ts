import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-movies',
  templateUrl: './movies.component.html',
  styleUrls: ['./movies.component.css']
})
export class MoviesComponent implements OnInit {
  data = null;

  getData() {
    return this.data
  }
  
  ngOnInit() {
    this.fetchMovie();
  }

  fetchMovie() {
    this.data = null;
    fetch(`https://swapi.co/api/films/?page=1`)
      .then(response => response.json())
      .then(responseJson => {
        console.warn('Response Movies: ', responseJson);
        this.data = responseJson;
      })
  }
  
}
