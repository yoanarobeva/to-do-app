import { Component, Input } from '@angular/core';
import { Task } from '../model/task.model';
import { TasksService } from '../tasks.service';

@Component({
  selector: 'app-todo',
  templateUrl: './todo.component.html',
  styleUrls: ['./todo.component.css']
})

export class TodoComponent {
  constructor(private service: TasksService) {}

  tasks: Task[] = this.service.getTasks();

  addTask(newTask: string) {
    this.service.addTask(newTask);
  }

}
