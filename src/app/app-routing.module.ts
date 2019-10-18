import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { RegisterComponent } from './register/register.component';
import { EditPageComponent } from './edit-page/edit-page.component';
import { CreatePageComponent } from './create-page/create-page.component';
import { AccountSettingsComponent } from './account-settings/account-settings.component';
import { FeedBackComponent } from './feed-back/feed-back.component';
import { LoggedInComponent } from './logged-in/logged-in.component';
import { PlanSettingsComponent } from './plan-settings/plan-settings.component';
import { PreviewComponent } from './preview/preview.component';
import { LogoutComponent } from './logout/logout.component';
import { ViewprofileComponent } from './viewprofile/viewprofile.component';
import { NavComponent } from './nav/nav.component';
import { SidenavComponent } from './sidenav/sidenav.component';


const routes: Routes = [
  {path:"",component:HomeComponent},
  {path:"register",component:RegisterComponent},
  {path:"editpage",component:EditPageComponent},
  {path:"createpage",component:CreatePageComponent},
  {path:"accountsettings",component:AccountSettingsComponent},
  {path:"feedback",component:FeedBackComponent},
  {path:"loggedin",component:LoggedInComponent},
  {path:"palnsettings",component:PlanSettingsComponent},
  {path:"preview",component:PreviewComponent},
  {path:"logout",component:LogoutComponent},
  {path:"viewprofile",component:ViewprofileComponent},
  {path:"nav",component:NavComponent},
  {path:"sidenav",component:SidenavComponent},


];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
