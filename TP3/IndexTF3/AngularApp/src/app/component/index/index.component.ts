import { Component, OnInit } from '@angular/core';
import { ApiclimaService } from 'src/app/services/api-clima.service';

@Component({
  selector: 'app-index',
  templateUrl: './index.component.html',
  styleUrls: ['./index.component.css']
})
export class IndexComponent implements OnInit {


  countryCode= 'ar';
  weather;

  constructor(private apiclimaService: ApiclimaService) {
    
   }

  ngOnInit(): void {
    
  }

  getWeather(cityName: string, countryCode: string){
    this.apiclimaService.getWeather(cityName, countryCode)
    .subscribe(
      res => {
        this.weather = res
      },
      err => console.log(err)
    ) 
  }

  submitLocation(cityName: HTMLInputElement){
    this.getWeather(cityName.value, this.countryCode )

    cityName.value='';
    cityName.focus();
    return false;

  }

}
