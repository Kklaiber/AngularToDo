import { Component, OnInit } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { of } from 'rxjs';
import { Task } from '../../../models/task';
import { TasksComponent } from '../components/tasks/tasks.component';

@Component({
  selector: 'app-tasks-display',
  templateUrl: './tasks-display.component.html',
  styleUrls: ['./tasks-display.component.css']
})
// export class TasksDisplayComponent implements OnInit {

//   constructor() { }

//   ngOnInit() {
//   }

// }
export class TasksDisplayComponent implements OnInit {
  private tasksRoute = 'http://localhost:3000/details';
  public tasks: Task[];

  constructor(private http: HttpClient) {}

  getTasks() {
          this.http.get<Task[]>(this.tasksRoute).subscribe(tasks => {
                  this.tasks = tasks;
                  console.log('Task', this.tasks);
          });
  }
  ngOnInit() {
          this.getTasks();
  }

  onTaskViewed(taskId) {
    let taskIndex = 0;
    for(let task of this.tasks) {
      if(task.id === taskId) {
        window.open(task.task);
        break;
      }
      taskIndex++;
    }
  }
}