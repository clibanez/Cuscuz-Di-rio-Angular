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

  findAll(): Observable<Cuscuz[]> {
    return this.http.get<Cuscuz[]>(`${API_CONFIG.baseUrl}/cuscuz`);
  }
}
