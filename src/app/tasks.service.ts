import { OnInit } from '@angular/core';
import { Task } from './model/task.model';
import { TaskData } from './data/data';

// @Injectable({
//   providedIn: 'root'
// })
export class TasksService {
  tasks: Task[] = new TaskData().getData(); ;
  editValue: string | undefined;
  showPopUp: boolean = false;
  
  constructor() {}

  getTasks() {    
    return this.tasks;
  }

  addTask(newTask: string) {
    this.tasks.push(new Task(newTask, false));
  }

  getEditValue(newTaskValue: string) {
    this.editValue = newTaskValue;
  }

  private findTask(task:string) {
    return this.tasks.find(x => x.task == task);
  }

  popUp(task: string) {    
    this.showPopUp = !this.showPopUp;
    let currentTask = this.findTask(task);

    if (currentTask) {
      //todo
    }
      
  }

  editTask(task: string) {
    let currentTask = this.findTask(task)
    if(currentTask && this.editValue) {
      currentTask.task = this.editValue;
    }
  }

  delete(task: string) {
    let currentTask = this.findTask(task);
    if(currentTask) {
      let index = this.tasks.indexOf(currentTask)
      this.tasks.splice(index, 1);
    }
  }
}
