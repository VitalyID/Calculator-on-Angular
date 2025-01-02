import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { EmptyRouteComponent } from './components/empty-route/empty-route.component';
import { SimpleCalcComponent } from './components/simple-calc/simple-calc.component';

const routes: Routes = [
  {
    path: 'simple-calc',
    component: SimpleCalcComponent,
  },
  { path: '', redirectTo: 'simple-calc', pathMatch: 'full' },
  {
    path: '**',
    component: EmptyRouteComponent,
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
