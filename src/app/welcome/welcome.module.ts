import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { WelcomeRoutingModule } from './welcome-routing.module';
import { WelcomeComponent } from './welcome.component';

// Import ParticlesModule
import { ParticlesModule } from 'angular-particle';
// Import FlexLayoutModule
import { FlexLayoutModule } from '@angular/flex-layout';
// Import MaterialModule
import { MaterialModule } from '../material.module';

@NgModule({
  declarations: [WelcomeComponent],
  imports: [
    CommonModule,
    WelcomeRoutingModule,
    ParticlesModule,
    FlexLayoutModule,
    MaterialModule
  ],
  exports: [
    ParticlesModule,
    FlexLayoutModule,
    MaterialModule
  ]
})
export class WelcomeModule { }
