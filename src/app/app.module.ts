import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms'; 
import { AngularFireModule } from '@angular/fire/compat';
import { AngularFirestoreModule } from '@angular/fire/compat/firestore';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MonthsComponent } from './months/months.component';
import { ReportFormComponent } from './report-form/report-form.component';
import { BudgetComponent } from './budget/budget.component';
import { environment } from 'src/environments/environment';
import { DisplayMoneyPipe } from './core/pipes/display-money.pipe';

@NgModule({
  declarations: [
    AppComponent,
    MonthsComponent,
    ReportFormComponent,
    BudgetComponent,
    DisplayMoneyPipe
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    AngularFireModule.initializeApp(environment.firebase),
    AngularFirestoreModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
