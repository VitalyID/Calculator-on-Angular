import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule } from '@angular/router';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { EmptyRouteComponent } from './components/empty-route/empty-route.component';
import { NavigationComponent } from './components/navigation/navigation.component';
import { SimpleCalcModule } from './components/simple-calc/simple-calc.module';

@NgModule({
  // declarations: [AppComponent, EmptyRouteComponent, NavigationComponent],
  declarations: [AppComponent, EmptyRouteComponent, NavigationComponent],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    SimpleCalcModule,
    RouterModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
