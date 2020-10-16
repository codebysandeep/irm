import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ForceLayoutRoutingModule } from './force-layout-routing.module';
import { ForceLayoutComponent } from './force-layout.component';

// Import FlexLayoutModule
import { FlexLayoutModule } from '@angular/flex-layout';
// Import MaterialModule
import { MaterialModule } from '../material.module';

import * as echarts from 'echarts';
import { NgxEchartsModule } from 'ngx-echarts';


@NgModule({
  declarations: [ForceLayoutComponent],
  imports: [
    CommonModule,
    ForceLayoutRoutingModule,
    NgxEchartsModule.forRoot({
      echarts: { init: echarts.init }
    }),
    FlexLayoutModule,
    MaterialModule
  ]
})
export class ForceLayoutModule { }
