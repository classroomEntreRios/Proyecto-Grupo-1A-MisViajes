import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http'

@Injectable({
  providedIn: 'root'
})
export class ApiclimaService {

  apiKey = `0fed3012b9b8da8a660e46abf365f20f`;
  apiLang = `sp`;
  apiMedidas = `metric`;
  URI: string = ``;
  constructor(private http: HttpClient) {
    this.URI = `https://api.openweathermap.org/data/2.5/weather?appid=${this.apiKey}&lang=${this.apiLang}&units=${this.apiMedidas}&q=`
  }

  getWeather(nombreCiudad: string, codigoCiudad: string){
    return this.http.get(`${this.URI}${nombreCiudad},${codigoCiudad}`)
  }
}