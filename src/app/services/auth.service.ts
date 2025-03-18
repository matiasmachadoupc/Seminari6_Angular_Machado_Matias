import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  private apiUrl = 'http://localhost:9000/api'; // URL base de la API

  constructor(private http: HttpClient) {}

  login(credentials: { email: string; contraseña: string }): Observable<any> {
    return this.http.post(`${this.apiUrl}/login`, credentials);
  }

  register(user: { name: string, age: number, email: string, contraseña: string }): Observable<any> {
    return this.http.post(`${this.apiUrl}/users`, user);
  }
}