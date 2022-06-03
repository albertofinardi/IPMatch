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
import { CidrCalculatorComponent } from './cidr-calculator/cidr-calculator.component';
import { CidrToMaskComponent } from './cidr-to-mask/cidr-to-mask.component';
import { CidrHostComponent } from './cidr-host/cidr-host.component';
import { ServiceWorkerModule } from '@angular/service-worker';
import { PublicOrPrivateComponent } from './public-or-private/public-or-private.component';
import { WildcardComponent } from './wildcard/wildcard.component';


@NgModule({
  declarations: [
    AppComponent,
    SubnetmaskCalculatorComponent,
    CidrCalculatorComponent,
    CidrToMaskComponent,
    CidrHostComponent,
    PublicOrPrivateComponent,
    WildcardComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule,
    AngularFireModule.initializeApp(environment.firebaseConfig),
    AngularFirePerformanceModule,
    AngularFireAnalyticsModule,
    ServiceWorkerModule.register('ngsw-worker.js', {
      enabled: environment.production,
      // Register the ServiceWorker as soon as the application is stable
      // or after 30 seconds (whichever comes first).
      registrationStrategy: 'registerWhenStable:30000'
    })
  ],
  providers: [PerformanceMonitoringService, ScreenTrackingService],
  bootstrap: [AppComponent]
})
export class AppModule { }
