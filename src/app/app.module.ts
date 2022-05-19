import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { ReactiveFormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { SubnetmaskCalculatorComponent } from './subnetmask-calculator/subnetmask-calculator.component';

import { AngularFireModule } from '@angular/fire/compat';
import { AngularFirePerformanceModule, PerformanceMonitoringService } from '@angular/fire/compat/performance';
import { AngularFireAnalyticsModule, ScreenTrackingService } from '@angular/fire/compat/analytics';


const firebaseConfig = {
  apiKey: "AIzaSyDiGXdmZB1URwEM8GSsxwpsEUn7ykN4NkI",
  authDomain: "ipmatch.firebaseapp.com",
  projectId: "ipmatch",
  storageBucket: "ipmatch.appspot.com",
  messagingSenderId: "905402177893",
  appId: "1:905402177893:web:2ddeb32733a298057b298c",
  measurementId: "G-XCYN7L5HWK"
};

@NgModule({
  declarations: [
    AppComponent,
    SubnetmaskCalculatorComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule,
    AngularFireModule.initializeApp(firebaseConfig),
    AngularFirePerformanceModule,
    AngularFireAnalyticsModule
  ],
  providers: [PerformanceMonitoringService, ScreenTrackingService],
  bootstrap: [AppComponent]
})
export class AppModule { }
