import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './components/login/login.component';
import { ChartFormComponent } from './components/chart-form/chart-form.component';
import { ChartDisplayComponent } from './components/chart-display/chart-display.component';
import { AuthService } from './services/auth.service';
import { ChartService } from './services/chart.service';
import { HomeComponent } from './components/home/home.component';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    ChartFormComponent,
    ChartDisplayComponent,
    HomeComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    ReactiveFormsModule,
    AppRoutingModule,
  ],
  providers: [AuthService, ChartService],
  bootstrap: [AppComponent]
})
export class AppModule { }
