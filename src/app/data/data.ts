import { Task } from "../model/task.model";
import { data } from "./seed";

export class TaskData {
    
    getData(): Task[] {
        let tasks : Task[] = [];

        for (let i=0; i < data.length; i++) {
            tasks[i] = new Task(data[i].task, data[i].isCompleted);
        }

        return tasks;
    }
}