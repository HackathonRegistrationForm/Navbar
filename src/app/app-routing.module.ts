import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DashboardComponent } from './dashboard/dashboard.component';
import { DomainsComponent } from './domains/domains.component';
import { GroupsComponent } from './groups/groups.component';
import { MailsettingsComponent } from './mailsettings/mailsettings.component';
import { OrganizationComponent } from './organization/organization.component';
import { SecuritycompliancesComponent } from './securitycompliances/securitycompliances.component';
import { SubscriptionComponent } from './subscription/subscription.component';
import { UsersComponent } from './users/users.component';
import { AuditComponent } from './audit/audit.component';
import { GroupComponent } from './group/group.component';

import { CreateComponent } from './create/create.component';
import { ImgComponent } from './img/img.component';
const routes: Routes = [
  { path : 'dashboard' ,component : DashboardComponent },
  { path : 'domains' ,component : DomainsComponent },
  { path : 'groups' ,component : GroupsComponent },
  { path : 'mailsettings' ,component : MailsettingsComponent },
  { path : 'organization' ,component : OrganizationComponent },
  { path : 'securitycompliances' ,component : SecuritycompliancesComponent },
  { path : 'subscription' ,component : SubscriptionComponent },
  { path : 'users' ,component : UsersComponent },
  { path : 'audit' ,component : AuditComponent },
  { path: 'group',component:GroupComponent},
  { path : 'create' ,component: CreateComponent},
  { path : 'img' ,component: ImgComponent}
 
 
]
@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
export const routingComponents =[DashboardComponent,DomainsComponent,GroupsComponent,MailsettingsComponent,OrganizationComponent,SecuritycompliancesComponent,SubscriptionComponent,UsersComponent,AuditComponent,CreateComponent,ImgComponent,GroupsComponent]
