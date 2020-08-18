import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CardService {
  private baseUrl = 'http://localhost:8080/api/cards';

  constructor(private http: HttpClient) {}

  getFicha(id: number): Observable<Object> {
    return this.http.get(`${this.baseUrl}/${id}`);
  }

  createFicha(card: Object): Observable<Object> {
    return this.http.post(`${this.baseUrl}`, card);
  }

  updateFicha(id: number, value: any): Observable<Object> {
    return this.http.put(`${this.baseUrl}/${id}`, value);
  }

  deleteFicha(id: number): Observable<any> {
    return this.http.delete(`${this.baseUrl}/${id}`, { responseType: 'text' });
  }

  getFichasList(): Observable<any> {
    return this.http.get(`${this.baseUrl}`);
  }

  getFichasByAge(age: number): Observable<any> {
    return this.http.get(`${this.baseUrl}/age/${age}`);
  }

  deleteAll(): Observable<any> {
    return this.http.delete(`${this.baseUrl}` + `/delete`, {
      responseType: 'text'
    });
  }
}
