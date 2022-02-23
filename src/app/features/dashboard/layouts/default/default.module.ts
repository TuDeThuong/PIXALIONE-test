import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DefaultComponent } from './default.component';
import { RouterModule } from '@angular/router';
import { SharedModule } from '../../shared/shared.module';
import { MatSidenavModule } from '@angular/material/sidenav';

@NgModule({
  declarations: [DefaultComponent],
  imports: [CommonModule, RouterModule, SharedModule, MatSidenavModule],
})
export class DefaultModule {}
