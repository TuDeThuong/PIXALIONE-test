import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DefaultComponent } from './layouts/default/default.component';
import { AddCourseComponent } from './modules/add-course/add-course.component';
import { EditCourseComponent } from './modules/edit-course/edit-course.component';
import { MainComponent } from './modules/main/main.component';
import { ProfileComponent } from './modules/profile/profile.component';
import { AdminGuard } from './shared/services/admin.guard';
import { CanReadGuard } from './shared/services/can-read.guard';

const routes: Routes = [
  {
    path: '',
    component: DefaultComponent,
    children: [
      {
        path: '',
        component: MainComponent,
        canActivate: [CanReadGuard],
      },
      {
        path: 'profile',
        component: ProfileComponent,
      },
      {
        path: 'add-course',
        component: AddCourseComponent,
        canActivate: [AdminGuard],
      },
      {
        path: 'edit-course',
        component: EditCourseComponent,
        canActivate: [AdminGuard],
      },
    ],
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class DashboardRoutingModule {}
