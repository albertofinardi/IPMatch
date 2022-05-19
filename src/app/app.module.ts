import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { ReactiveFormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { SubnetmaskCalculatorComponent } from './subnetmask-calculator/subnetmask-calculator.component';

import { AngularFireModule } from '@angular/fire/compat';
import { AngularFirePerformanceModule, PerformanceMonitoringService } from '@angular/fire/compat/performance';
import { AngularFireAnalyticsModule, ScreenTrackingService } from '@angular/fire/compat/analytics';
import { environment } from 'src/environments/environment.prod';


@NgModule({
  declarations: [
    AppComponent,
    SubnetmaskCalculatorComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule,
    AngularFireModule.initializeApp(environment.firebaseConfig),
    AngularFirePerformanceModule,
    AngularFireAnalyticsModule
  ],
  providers: [PerformanceMonitoringService, ScreenTrackingService],
  bootstrap: [AppComponent]
})
export class AppModule { }
