import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { Task } from '../../../models/task';
import { TasksComponent } from '../components/tasks/tasks.component';



@Injectable({
  providedIn: 'root'
})
export class TasksService {
  
  tasks:Task[] = [
    {
      id: 1,
      task: "Walk Dog",
      description: "Take to the park for 30 minutes.",
      
    }
  ];

  getTask = (): Observable<Task[]> => {
      return of(this.tasks)
  }

  addTask(task: Task) {
    this.tasks.push(task);
  }

  constructor() { }
}
