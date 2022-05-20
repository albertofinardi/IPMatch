import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CidrCalculatorComponent } from './cidr-calculator/cidr-calculator.component';
import { CidrHostComponent } from './cidr-host/cidr-host.component';
import { CidrToMaskComponent } from './cidr-to-mask/cidr-to-mask.component';
import { SubnetmaskCalculatorComponent } from './subnetmask-calculator/subnetmask-calculator.component';

const routes: Routes = [
  { path: 'subnet-range', component: SubnetmaskCalculatorComponent},
  { path: 'cidr-range', component: CidrCalculatorComponent},
  { path: 'cidr-to-mask', component: CidrToMaskComponent},
  { path: 'host-to-cidr', component: CidrHostComponent},
  { path: '',   redirectTo: '/subnet-range', pathMatch: 'full' }, 
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
