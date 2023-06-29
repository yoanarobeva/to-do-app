import { Component } from '@angular/core';
import { TasksService } from '../tasks.service';

@Component({
  selector: 'app-pop-up',
  templateUrl: './pop-up.component.html',
  styleUrls: ['./pop-up.component.css']
})
export class PopUpComponent {
  showPopUp: boolean | undefined;
  constructor(private service: TasksService) {
    this.showPopUp = service.showPopUp;
  }
}
