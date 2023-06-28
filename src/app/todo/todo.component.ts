import { Component, OnInit } from '@angular/core';
import { Task } from '../model/task.model';
import { TaskData } from '../data/data';

@Component({
  selector: 'app-todo',
  templateUrl: './todo.component.html',
  styleUrls: ['./todo.component.css']
})

export class TodoComponent implements OnInit{
  tasks: Task[] = [];

  constructor() {}

  ngOnInit() {
    this.tasks = new TaskData().getData();    
  }

  addTask(newTask: string) {
    this.tasks.push(new Task(newTask, false));
  }
}
