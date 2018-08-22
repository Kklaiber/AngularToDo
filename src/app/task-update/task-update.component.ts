import { Component, OnInit, Input, Output } from '@angular/core';
import { Task } from '../models/task';
import { EventEmitter } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { of } from 'rxjs';

@Component({
  selector: 'app-task-update',
  templateUrl: './task-update.component.html',
  styleUrls: ['./task-update.component.css']
})
export class TaskUpdateComponent implements OnInit {
  @Input() task: Task;
  @Output() taskDeleted: EventEmitter<number> = new EventEmitter();
  @Output() taskViewed: EventEmitter<string> = new EventEmitter();
 
  private tasksRoute = 'http://localhost:3000/movies';
        public tasks: Task[];

  constructor(private http: HttpClient ) { }

  getTasks() {
    this.http.get<Task[]>(this.tasksRoute).subscribe(tasks => {
            this.tasks = tasks;
            console.log('Tasks', this.tasks);
    });
}

ngOnInit() {
}

onClickDelete(){
  this.taskDeleted.emit(this.task.id);
}

onClickView(){
  this.taskViewed.emit(this.task.task);
}

}


 


