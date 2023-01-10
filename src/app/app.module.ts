import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatIconModule } from '@angular/material/icon';
import { MatListModule } from '@angular/material/list';
import { MatButtonModule } from '@angular/material/button';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { DashboardComponent } from './dashboard/dashboard.component';
import { OrganizationComponent } from './organization/organization.component';
import { DomainsComponent } from './domains/domains.component';
import { UsersComponent } from './users/users.component';
import { GroupsComponent } from './groups/groups.component';
import { MailsettingsComponent } from './mailsettings/mailsettings.component';
import { SecuritycompliancesComponent } from './securitycompliances/securitycompliances.component';
import { SubscriptionComponent } from './subscription/subscription.component';
import { AuditComponent } from './audit/audit.component';
import { GroupComponent } from './group/group.component';
import { MatRadioModule } from '@angular/material/radio';
import { CreateComponent } from './create/create.component';
import { ImgComponent } from './img/img.component';
@NgModule({
  declarations: [
    AppComponent,
    DashboardComponent,
    OrganizationComponent,
    DomainsComponent,
    UsersComponent,
    GroupsComponent,
    MailsettingsComponent,
    SecuritycompliancesComponent,
    SubscriptionComponent,
    AuditComponent,
    GroupComponent,
    CreateComponent,
    ImgComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatToolbarModule,
    MatSidenavModule,
    MatIconModule,
    MatListModule,
    MatButtonModule,
    MatRadioModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
