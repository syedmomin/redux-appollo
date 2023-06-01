import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ArrayCompareComponent } from './array-compare/array-compare.component';
import { ObjectCompareComponent } from './object-compare/object-compare.component';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path:"",component:ArrayCompareComponent
  }
];

@NgModule({
  declarations: [
    ArrayCompareComponent,
    ObjectCompareComponent
  ],
  imports: [
    CommonModule,
    RouterModule.forChild(routes)
  ]
})
export class CompareModule { }
