import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { HomeRoutingModule } from './home-routing.module';
import { HomeComponent } from './home.component';

// Import FlexLayoutModule
import { FlexLayoutModule } from '@angular/flex-layout';
// Import MaterialModule
import { MaterialModule } from '../material.module';

import * as echarts from 'echarts';
import { NgxEchartsModule } from 'ngx-echarts';


@NgModule({
  declarations: [HomeComponent],
  imports: [
    CommonModule,
    HomeRoutingModule,
    NgxEchartsModule.forRoot({
      echarts: { init: echarts.init }
    }),
    FlexLayoutModule,
    MaterialModule
  ]
})
export class HomeModule { }
