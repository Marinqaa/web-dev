// hh-service.service.ts
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Company } from './company';
import { Vacancy } from './vacancy';


@Injectable({
  providedIn: 'root'
})
export class CompanyService {
  private apiUrl = 'http://localhost:8000/api/companies/';

  constructor(private http: HttpClient) { }

  getCompanies(): Observable<Company[]> {
    return this.http.get<Company[]>(`${this.apiUrl}`);
  }

  getCompany(id: number): Observable<Company> {
    return this.http.get<Company>(`${this.apiUrl}${id}/`);
  }

  getVacanciesByCompany(id: number): Observable<Vacancy[]> {
    return this.http.get<Vacancy[]>(`${this.apiUrl}${id}/vacancies/`);
  }
}