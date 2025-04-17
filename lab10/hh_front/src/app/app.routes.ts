import { Routes } from '@angular/router';
import { CompanyComponent } from './company/company.component';

export const routes: Routes = [
    { path: '', redirectTo: 'companies', pathMatch: 'full'},
    { path: 'companies', component: CompanyComponent},
];