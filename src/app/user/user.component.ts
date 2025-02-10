import { Component, Input, Output, EventEmitter  } from '@angular/core';

import { Employee } from './user.model';
import { CardComponent } from "../shared/card/card.component";


@Component({
  selector: 'app-user',
  standalone: true,
  imports: [CardComponent],
  templateUrl: './user.component.html',
  styleUrl: './user.component.css'
})
export class UserComponent {
  @Input({required: true}) employee! : Employee;
  @Input({required: true}) selected!: boolean;
  @Output() select = new EventEmitter();


  get imagePath() {
    return 'assets/employeesPics/' + this.employee.avatar;
  }


  onSelectUser() {
    this.select.emit(this.employee.id);
  }
}


//Input properties are set from outside the component, required: true means the error will be shown in the outside component (app.component.html)
