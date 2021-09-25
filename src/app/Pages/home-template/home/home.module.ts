import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { ChildHomeComponent } from './child-home/child-home.component';
import { HomeRoutingModule } from './home-routing.module';
import { HomeComponent } from './home.component';
import { ShareModuleModule } from 'src/app/_core/share/share-module/share-module.module';
import { MaterialModule } from 'src/app/_core/share/material-module';

@NgModule({
  declarations: [HomeComponent, ChildHomeComponent],
  imports: [
    CommonModule,
    HomeRoutingModule,
    FormsModule,
    ShareModuleModule,
    MaterialModule,
  ],
})
export class HomeModule {}
