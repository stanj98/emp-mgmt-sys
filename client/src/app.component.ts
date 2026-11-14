import { Component } from "@angular/core";
import { RouterOutlet } from "@angular/router";
import { EmployeesListComponent } from "./app/employees-list/employees-list";
import { MatToolbarModule } from "@angular/material/toolbar";

@Component({
    selector: 'app-root',
    standalone: true,
    imports: [RouterOutlet, EmployeesListComponent, MatToolbarModule],
    template: `
        <mat-tootlbar>
            <span>Employees Management System </span>
        </mat-toolbar>
        <main>
            <router-outlet />
        </main>
    `,
    styles: [
        `main {
            display: flex;
            justify-content: center;
            padding: 2rem 4rem;
        }`
    ],
})

export class AppComponent {
    title = 'client';
}