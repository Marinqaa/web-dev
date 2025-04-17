import { Component, OnInit } from '@angular/core';
import { CompanyService } from '../hh-service.service';
import { Company } from '../company';
import { Vacancy } from '../vacancy';
import { CommonModule } from '@angular/common';  

@Component({
  selector: 'app-company',
  standalone: true,  // Обозначаем компонент как standalone
  imports: [CommonModule], 
  templateUrl: './company.component.html',
  styleUrl: './company.component.css'
})
export class CompanyComponent implements OnInit {
  companies?: Company[];
  vacancies?: Vacancy[];
  selectedCompany?: Company;

  constructor(
    private hh_serviceService: CompanyService,
  ) {
  }

  ngOnInit() {
    this.getCompanies();
  }

  onSelect(company: Company): void {
    this.selectedCompany = company;
    this.getVacanciesByCompany(company.id);
  }
  
  getCompanies(): void {
    this.hh_serviceService.getCompanies().subscribe(companies => this.companies = companies);
  }

  getVacanciesByCompany(id: number): void {
    this.hh_serviceService.getVacanciesByCompany(id).subscribe(vacancies => this.vacancies = vacancies);
  }
}