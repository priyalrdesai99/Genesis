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
import { LogoutComponent } from './logout/logout.component';

import { ViewprofileComponent } from './viewprofile/viewprofile.component';
import { NavComponent } from './nav/nav.component';
import { ColorPickerModule } from 'ngx-color-picker';
import { SidenavComponent } from './sidenav/sidenav.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { LayoutModule } from '@angular/cdk/layout';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatButtonModule } from '@angular/material/button';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatIconModule } from '@angular/material/icon';
import { MatListModule } from '@angular/material/list';
import { MatStepperModule,MatInputModule } from '@angular/material';
import { PlanService } from './plan.service';
import { ViewplanComponent } from './viewplan/viewplan.component';
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
    LogoutComponent,
    ViewprofileComponent,
    NavComponent,
    SidenavComponent,
    ViewplanComponent,
    
    
    
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule ,
    ColorPickerModule,
    BrowserAnimationsModule,
    LayoutModule,
    MatToolbarModule,
    MatButtonModule,
    MatSidenavModule,
    MatIconModule,
    MatListModule,
    MatStepperModule
  ],
  providers: [UserServiceService,PlanService],
  bootstrap: [AppComponent]
})
export class AppModule { }
