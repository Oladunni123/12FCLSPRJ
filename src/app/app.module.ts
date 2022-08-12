import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CustomerComponent } from './_layouts/customer/customer.component';
import { AdminComponent } from './_layouts/admin/admin.component';
import { AuthenticationComponent } from './_layouts/authentication/authentication.component';
import { IndexComponent } from './_layouts/views/index/index.component';
import { ContasUsComponent } from './_layouts/views/contas-us/contas-us.component';
import { ContactUsComponent } from './_layouts/views/home/contact-us/contact-us.component';
import { PricingComponent } from './_layouts/views/home/pricing/pricing.component';
import { CustomerDashboardComponent } from './_layouts/views/customer-dashboard/customer-dashboard.component';
import { TransactionComponent } from './_layouts/views/customer/transaction/transaction.component';
import { WalletComponent } from './_layouts/views/customer/wallet/wallet.component';
import { CustomerReportComponent } from './_layouts/views/customer/customer-report/customer-report.component';
import { LoginComponent } from './_layouts/views/auth/login/login.component';
import { LogoutComponent } from './_layouts/views/logout/logout.component';
import { ForgotpasswordComponent } from './_layouts/views/auth/forgotpassword/forgotpassword.component';
import { ResetpasswordComponent } from './_layouts/views/auth/resetpassword/resetpassword.component';
import { MamageUsersComponent } from './_layouts/views/admin/mamage-users/mamage-users.component';
import { ManageTransactionsComponent } from './_layouts/views/admin/manage-transactions/manage-transactions.component';
import { DashboardComponent } from './_layouts/views/admin/dashboard/dashboard.component';
import { ManageReportsComponent } from './_layouts/views/admin/manage-reports/manage-reports.component';
import { ManageUsersComponent } from './_views/admin/manage-users/manage-users.component';
import { TransactionsComponent } from './_views/customer/transactions/transactions.component';
import { RegisterComponent } from './_views/auth/register/register.component';
import { ForgotPasswordComponent } from './_views/auth/forgot-password/forgot-password.component';
import { ResetPasswordComponent } from './_views/auth/reset-password/reset-password.component';

@NgModule({
  declarations: [
    AppComponent,
    CustomerComponent,
    AdminComponent,
    AuthenticationComponent,
    IndexComponent,
    ContasUsComponent,
    ContactUsComponent,
    PricingComponent,
    CustomerDashboardComponent,
    TransactionComponent,
    WalletComponent,
    CustomerReportComponent,
    LoginComponent,
    LogoutComponent,
    ForgotpasswordComponent,
    ResetpasswordComponent,
    MamageUsersComponent,
    ManageTransactionsComponent,
    DashboardComponent,
    ManageReportsComponent,
    ManageUsersComponent,
    TransactionsComponent,
    RegisterComponent,
    ForgotPasswordComponent,
    ResetPasswordComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
