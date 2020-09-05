import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { PayComponent } from './pay/pay.component';
import { HomeComponent } from './home/home.component';

const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'pay', component: PayComponent },

  { path: '**', component: HomeComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
