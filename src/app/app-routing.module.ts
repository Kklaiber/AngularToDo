import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes, Router } from '@angular/router';
import { TaskNewComponent } from './task-new/task-new.component';
import { TasksComponent } from './modules/tasks/components/tasks/tasks.component';
import { TaskDetailsComponent } from './task-details/task-details.component';
import { TaskUpdateComponent } from './task-update/task-update.component';

const routes: Routes = [
  {
    path: 'new',
    component: TaskNewComponent
  },
  {
    path:'tasks',
    component: TasksComponent
  },
  {
    path:'details',
    component: TaskDetailsComponent
  },
  {
    path: 'update',
    component: TaskUpdateComponent
  },
  {
    path: '',
    redirectTo: '/tasks',
    pathMatch: 'full'

  }
]

@NgModule({
  imports: [CommonModule, RouterModule.forRoot(routes)],
  
  exports: [RouterModule]
})
export class AppRoutingModule { }
