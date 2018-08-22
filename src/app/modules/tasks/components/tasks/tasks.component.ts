import { Component, OnInit } from '@angular/core';
import { Task } from '../../../../models/task';
import { RouterModule } from '@angular/router';
import { TasksService } from '../../services/tasks.service';


@Component({
  selector: 'app-tasks',
  templateUrl: './tasks.component.html',
  styleUrls: ['./tasks.component.css']
})
export class TasksComponent implements OnInit {
  task = ["Drink tons of coffee","Finish this blasted final","try not to lose my mind",]
  addTask:Task = new Task;
  dataService: TasksService;

  constructor(private tasksService: TasksService) { 
    this.dataService = this.tasksService;
   
  }

  ngOnInit() {
  }

  onSubmit() {
    console.log("Task Added!", this.addTask);
    this.dataService.addTask(this.addTask);
  }

  // addNewTask(addTask:Task) {
  //   this.dataService.push(addTask)
  // }

}