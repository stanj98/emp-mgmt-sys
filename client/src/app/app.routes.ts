import { Routes } from '@angular/router';
import { EmployeesListComponent } from './employees-list/employees-list';

export const routes: Routes = [
    {path: '', component: EmployeesListComponent, title: 'Employees List'},
];
