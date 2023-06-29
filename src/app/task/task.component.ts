import { Component, EventEmitter, Input, Output } from '@angular/core';
import { TasksService } from '../tasks.service';

@Component({
  selector: 'app-task',
  templateUrl: './task.component.html',
  styleUrls: ['./task.component.css']
})
export class TaskComponent {

  @Input() task: string = '';
  @Input() isCompleted: boolean = false;
  
  constructor(private service: TasksService) {
  }

  completeTask() {
    this.isCompleted = !this.isCompleted;
  }

  openEdit() {
    this.service.popUp(this.task);
  }

  deleteTask() {
    this.service.delete(this.task);
  }
}
