import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ForceLayoutComponent } from './force-layout.component';

const routes: Routes = [{ path: '', component: ForceLayoutComponent }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ForceLayoutRoutingModule { }
