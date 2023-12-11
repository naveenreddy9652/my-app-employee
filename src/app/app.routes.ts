

import { NgModule } from '@angular/core';
import {RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { DasboardComponent } from './dasboard/dasboard.component';
import { StructuraldirectivesComponent } from './structuraldirectives/structuraldirectives.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { DatabindingComponent } from './databinding/databinding.component';
export const routes: Routes = [
    {path:'', component: LoginComponent},
    {path: 'dashboard', component: DasboardComponent, children: [
         {path: 'structuraldirectives', component:StructuraldirectivesComponent},
         {path: 'databindings', component:DatabindingComponent}

    ]},
    {path:'**', component: PageNotFoundComponent},


];
