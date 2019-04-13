import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-vehicles',
  templateUrl: './vehicles.component.html',
  styleUrls: ['./vehicles.component.css']
})
export class VehiclesComponent implements OnInit {

  // Local storage set-up
  constructor() {
    const dataFromCache = JSON.parse(localStorage.getItem('vehicleApiResponse'));
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
    this.getVehicles(this.currentPage);
  }

  getVehicles(page) {
    this.currentPage = page;
   
    if (this.data[this.currentPage]) {
      return;
    };

    fetch(`https://swapi.co/api/starships/?page=${page}`)
      .then(response => response.json())
      .then(responseJson => {
        this.data[this.currentPage] = responseJson;

        // Pushing data to localStorage
        localStorage.setItem('vehicleApiResponse', JSON.stringify(this.data));
      })
  }

  handleChange($event) {
    this.getVehicles($event.pageIndex + 1)
  }
};
