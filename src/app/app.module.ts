import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { GatewayListComponent } from './gateway-list/gateway-list.component';
import { GatewayDetailsComponent } from './gateway-details/gateway-details.component';

@NgModule({
  declarations: [
    AppComponent,
    GatewayListComponent,
    GatewayDetailsComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
