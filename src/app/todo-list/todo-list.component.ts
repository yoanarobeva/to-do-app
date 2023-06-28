import { Component, Input } from '@angular/core';
import { Task } from '../model/task.model';

@Component({
  selector: 'app-todo-list',
  templateUrl: './todo-list.component.html',
  styleUrls: ['./todo-list.component.css']
})
export class TodoListComponent {
  @Input() tasks: Task[] = [];

}
