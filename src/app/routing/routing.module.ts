import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { TestComponent } from '../test/test.component';
import { HomeComponent } from '../home/home.component'; 

import { RouterModule, Routes } from '@angular/router';//Imported for routing



const appRoutes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'test',   component: TestComponent },
  { path: 'home',   component: HomeComponent },
];


@NgModule({
  imports: [
    CommonModule,
    RouterModule.forRoot(appRoutes)
  ],
  exports: [
    RouterModule
  ]
})

export class RoutingModule { };