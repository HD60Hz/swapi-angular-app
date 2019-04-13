import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-people',
  templateUrl: './people.component.html',
  styleUrls: ['./people.component.css']
})
export class PeopleComponent implements OnInit {

  // Local storage set-up
  constructor() {
    const dataFromCache = JSON.parse(localStorage.getItem('peopleApiResponse'));
    if (dataFromCache !== null) {
      this.data = dataFromCache;
    }
  }

  getData(){
    return this.data[this.currentPage];
  }

  data = {};
  currentPage = 1;
  
  ngOnInit() {
    this.fetchPeople(this.currentPage);
  };
  
  fetchPeople(page) {
    this.currentPage = page;
    
    if (this.data[this.currentPage]) {
      return;
    };

    fetch(`https://swapi.co/api/people/?page=${page}`)
      .then(response => response.json())
      .then(responseJson => {
        this.data[this.currentPage] = responseJson;
        
        // Pushing data to localStorage
        localStorage.setItem('peopleApiResponse', JSON.stringify(this.data));
      })
  };

  handleChange($event) {
    this.fetchPeople($event.pageIndex + 1)
  };
};
