import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LandingComponent } from './landing/landing.component';
import { LogInComponent } from './log-in/log-in.component';
import { SignUpComponent } from './sign-up/sign-up.component';
import { ScheduleComponent } from './schedule/schedule.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { HubComponent } from './hub/hub.component';
import { ConnectComponent } from './connect/connect.component';
import { ChatComponent } from './chat/chat.component';

const routes: Routes = [
  {path: '', redirectTo: "/landing", pathMatch: "full"},
  {path: "landing", component: LandingComponent},
  {path: "schedule", component: ScheduleComponent},
  {path: "connect", component: ConnectComponent},
  {path: "hub", component:HubComponent},
  {path: "login", component: LogInComponent},
  {path: "signup", component: SignUpComponent},
  {path: "chat", component: ChatComponent},
  {path: "**", component: PageNotFoundComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
export const routingComponents = [LandingComponent, HubComponent, LogInComponent, PageNotFoundComponent,
  SignUpComponent, ScheduleComponent,ConnectComponent, ChatComponent]
