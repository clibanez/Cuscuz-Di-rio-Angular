import { API_CONFIG } from './../config/api.config';
import { Injectable } from '@angular/core';
import { Cuscuz } from '../models/cuscuz';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class CuscuzService {

  constructor(private http: HttpClient) { }

  //lista todos os cuscuz
  findAll(): Observable<Cuscuz[]> {
    return this.http.get<Cuscuz[]>(`${API_CONFIG.baseUrl}/cuscuz`);
  }
  //cria o cuscuz
  create(cuscuz: Cuscuz): Observable<Cuscuz> {
    return this.http.post<Cuscuz>(`${API_CONFIG.baseUrl}/cuscuz`, cuscuz);
  }
}
