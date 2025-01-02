import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule } from '@angular/router';
import { SimpleCalcComponent } from './simple-calc.component';

@NgModule({
  imports: [BrowserModule, FormsModule, RouterModule],
  exports: [SimpleCalcComponent],
  declarations: [SimpleCalcComponent],
  providers: [],
})
export class SimpleCalcModule {}
