import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { NgUsMapComponent } from './ng-us-map.component';



@NgModule({
  declarations: [
    NgUsMapComponent
  ],
  imports: [
    CommonModule
  ],
  exports: [
    NgUsMapComponent,
    
  ]
})
export class NgUsMapModule { }
