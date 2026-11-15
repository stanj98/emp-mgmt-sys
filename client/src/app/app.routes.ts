import { Routes } from '@angular/router';
import { EmployeesListComponent } from './employees-list/employees-list';
import { AddEmployeeComponent } from './add-employee/add-employee';
import { EditEmployeeComponent } from './edit-employee/edit-employee';

export const routes: Routes = [
    {path: '', component: EmployeesListComponent, title: 'Employees List'},
    {path: "new", component: AddEmployeeComponent},
    {path: "edit/:id", component: EditEmployeeComponent},
];
