import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Drink } from './drink';

@Injectable({
  providedIn: 'root'
})
export class DrinkService {
  private baseURL = "http://localhost:8080/api/v1/drinks"
  constructor(private httpClient: HttpClient) { }

  getDrinksList(): Observable<Drink[]>{
    return this.httpClient.get<Drink[]>(`${this.baseURL}`)
  }

  createDrink(drink: Drink): Observable<Object>{
    return this.httpClient.post(`${this.baseURL}`, drink)
  }

  getDrinkById(id: number): Observable<Drink>{
    return this.httpClient.get<Drink>(`${this.baseURL}/${id}`);
  }

  updateDrink(id: number, drink: Drink): Observable<Object>{
    return this.httpClient.put(`${this.baseURL}/${id}`, drink);
  }

  deleteDrink(id: number): Observable<Object>{
    return this.httpClient.delete(`${this.baseURL}/${id}`);
  }

}