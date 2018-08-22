import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TasksComponent } from '../components/tasks/tasks.component';
import { TasksDisplayComponent } from '../tasks-display/tasks-display.component';
import { HttpClientModule } from '@angular/common/http';
import { Task } from '../../../models/task';

@NgModule({
  imports: [CommonModule, HttpClientModule],
  declarations: [TasksComponent],
  exports: [TasksDisplayComponent]
})
export class TasksModule { }
