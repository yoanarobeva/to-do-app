import { Component, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent {
  
  @Output() newTaskEvent = new EventEmitter<string>();

  addNewTask(newTask: string | undefined) {
    this.newTaskEvent.emit(newTask);
  }
}
