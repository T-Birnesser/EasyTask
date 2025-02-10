import { Component } from '@angular/core';
import { HeaderComponent } from './header/header.component';
import { UserComponent } from './user/user.component';
import { TasksComponent } from './tasks/tasks.component';
import { EMPLOYEES } from './employees';


@Component({
  selector: 'app-root',
  standalone: true,
  imports: [HeaderComponent, UserComponent, TasksComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css',
})
export class AppComponent {
  employees = EMPLOYEES;
  selectedEmployeeId?: string;

  get selectedEmployee() {
    return this.employees.find(employee => employee.id === this.selectedEmployeeId);
  }

  onSelectEmployee(id: string) {
    this.selectedEmployeeId = id;
  }
}
