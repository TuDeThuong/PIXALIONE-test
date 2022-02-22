import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DefaultComponent } from './default.component';
import { MainComponent } from '../../modules/main/main.component';
import { RouterModule } from '@angular/router';
import { ProfileComponent } from '../../modules/profile/profile.component';
import { SharedModule } from '../../shared/shared.module';
import { MatSidenavModule } from '@angular/material/sidenav';

@NgModule({
  declarations: [DefaultComponent, MainComponent, ProfileComponent],
  imports: [CommonModule, RouterModule, SharedModule, MatSidenavModule],
})
export class DefaultModule {}
