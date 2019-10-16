import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import {ReactiveFormsModule} from '@angular/forms'; 



import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { RegisterComponent } from './register/register.component';
import { AccountSettingsComponent } from './account-settings/account-settings.component';
import { CreatePageComponent } from './create-page/create-page.component';
import { EditPageComponent } from './edit-page/edit-page.component';
import { FeedBackComponent } from './feed-back/feed-back.component';
import { LoggedInComponent } from './logged-in/logged-in.component';
import { PlanSettingsComponent } from './plan-settings/plan-settings.component';
import { PreviewComponent } from './preview/preview.component';
import { UserServiceService } from './user-service.service';
import { HttpClientModule } from '@angular/common/http';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    RegisterComponent,
    AccountSettingsComponent,
    CreatePageComponent,
    EditPageComponent,
    FeedBackComponent,
    LoggedInComponent,
    PlanSettingsComponent,
    PreviewComponent,
    
    
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule
  ],
  providers: [UserServiceService],
  bootstrap: [AppComponent]
})
export class AppModule { }
