import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';


import { AppComponent } from './app.component';
import { TasksService } from './modules/tasks/services/tasks.service';
import { TasksComponent } from './modules/tasks/components/tasks/tasks.component';

import { TaskDetailsComponent } from './task-details/task-details.component';
import { TaskNewComponent } from './task-new/task-new.component';
import { TaskUpdateComponent } from './task-update/task-update.component';
import { AppRoutingModule } from './/app-routing.module';
import { TasksDisplayComponent } from './modules/tasks/tasks-display/tasks-display.component';


@NgModule({
  declarations: [
    AppComponent,  TasksComponent, TaskDetailsComponent, TaskNewComponent, TaskUpdateComponent, TasksDisplayComponent
  ],
  imports: [BrowserModule, FormsModule, AppRoutingModule ],
  providers: [TasksService],
  bootstrap: [AppComponent]
})
export class AppModule { }
