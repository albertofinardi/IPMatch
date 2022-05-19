import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { SubnetmaskCalculatorComponent } from './subnetmask-calculator/subnetmask-calculator.component';

const routes: Routes = [
  { path: 'subnet-range', component: SubnetmaskCalculatorComponent},
  { path: '',   redirectTo: '/subnet-range', pathMatch: 'full' }, 
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
