import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { DashboardRoutingModule } from './dashboard-routing.module';
import { MatToolbarModule } from '@angular/material/toolbar';
import { DefaultModule } from './layouts/default/default.module';
import { AddCourseComponent } from './modules/add-course/add-course.component';
import { EditCourseComponent } from './modules/edit-course/edit-course.component';
import { FormsModule } from '@angular/forms';
import { AuthService } from 'src/app/core/services/auth.service';
import { DataService } from './shared/services/course.service';
import {
  ScreenTrackingService,
  UserTrackingService,
} from '@angular/fire/analytics';
import { AngularFireModule } from '@angular/fire/compat';
import { environment } from 'src/environments/environment';
import { AngularFireAuthModule } from '@angular/fire/compat/auth';
import { AngularFirestoreModule } from '@angular/fire/compat/firestore';
import { MatGridListModule } from '@angular/material/grid-list';
import { MatCardModule } from '@angular/material/card';
import { AdminGuard } from './shared/services/admin.guard';
import { CanReadGuard } from './shared/services/can-read.guard';
import { ProfileComponent } from './modules/profile/profile.component';
import { MainDialogComponent } from './modules/main/main-dialog/main-dialog.component';
import { MainComponent } from './modules/main/main.component';
import { MatDialogModule } from '@angular/material/dialog';

@NgModule({
  declarations: [
    AddCourseComponent,
    EditCourseComponent,
    ProfileComponent,
    MainDialogComponent,
    MainComponent,
  ],
  imports: [
    CommonModule,
    DashboardRoutingModule,
    MatToolbarModule,
    DefaultModule,
    FormsModule,
    AngularFireModule.initializeApp(environment.firebase),
    AngularFireAuthModule,
    AngularFirestoreModule,
    MatGridListModule,
    MatCardModule,
    MatDialogModule,
  ],
  providers: [
    AuthService,
    DataService,
    ScreenTrackingService,
    UserTrackingService,
    AdminGuard,
    CanReadGuard,
  ],
})
export class DashboardModule {}
