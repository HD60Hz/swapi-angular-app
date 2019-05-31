import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-planets',
  templateUrl: './planets.component.html',
  styleUrls: ['./planets.component.css']
})
export class PlanetsComponent implements OnInit {

  // Local storage set-up
  constructor() {
    const dataFromCache = JSON.parse(localStorage.getItem('planetApiResponse'));
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
    this.getPlanet(this.currentPage);
  }

  getPlanet(page) {
    this.currentPage = page;
   
    if (this.data[this.currentPage]) {
      return;
    };

    fetch(`https://swapi.co/api/planets/?page=${page}`)
      .then(response => response.json())
      .then(responseJson => {
        this.data[this.currentPage] = responseJson;

        // Pushing data to localStorage
        localStorage.setItem('planetApiResponse', JSON.stringify(this.data));
      })
  }

  handleChange($event) {
    this.getPlanet($event.pageIndex + 1)
  }

}
